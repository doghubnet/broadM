-- BROVI manual payment verification system
-- These are the active BROVI manual payment accounts.
-- Admin may update account values manually inside Supabase if accounts change.
-- Do not add other payment methods without direct owner approval.

create extension if not exists pgcrypto;

create table if not exists public.payment_methods (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  method_id text unique not null,
  method_name text not null,
  account_name text not null,
  account_number text not null,
  instruction_en text not null,
  instruction_am text not null,
  is_active boolean not null default true,
  display_order integer not null default 0
);

create table if not exists public.payment_requests (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  plan_id text not null,
  plan_name text not null,
  plan_price_usd numeric not null,
  plan_price_etb numeric not null,
  payment_method text not null,
  full_name text not null,
  email text not null,
  phone text not null,
  transaction_reference text not null,
  receipt_path text not null,
  status text not null default 'pending',
  admin_notes text,
  verified_at timestamptz,
  constraint payment_requests_status_check check (status in ('pending', 'verified', 'rejected')),
  constraint payment_requests_plan_check check (plan_id in ('go', 'plus', 'pro')),
  constraint payment_requests_usd_positive_check check (plan_price_usd > 0),
  constraint payment_requests_etb_positive_check check (plan_price_etb > 0),
  constraint payment_requests_email_check check (position('@' in email) > 1),
  constraint payment_requests_receipt_path_check check (receipt_path like 'receipts/%')
);

comment on table public.payment_methods is 'Active BROVI manual payment accounts. Admin may update account values manually inside Supabase if accounts change. Do not add other payment methods without direct owner approval.';
comment on table public.payment_requests is 'Manual payment receipt requests submitted by clients. Public inserts only; admins verify or reject inside Supabase.';
comment on column public.payment_requests.status is 'Always forced to pending on public insert. Admin may later update to verified or rejected inside Supabase.';

alter table public.payment_methods enable row level security;
alter table public.payment_requests enable row level security;

-- Active methods are public so the website can show the current manual payment accounts.
drop policy if exists "Allow public read of active payment methods" on public.payment_methods;
create policy "Allow public read of active payment methods"
on public.payment_methods
for select
to anon
using (is_active = true);

-- Public clients may only insert payment requests. They cannot read, update, or delete requests.
drop policy if exists "Allow public payment request inserts only" on public.payment_requests;
create policy "Allow public payment request inserts only"
on public.payment_requests
for insert
to anon
with check (
  plan_id in ('go', 'plus', 'pro')
  and plan_price_usd > 0
  and plan_price_etb > 0
  and payment_method in ('telebirr', 'cbe_bank', 'siinque_bank')
  and length(full_name) between 2 and 140
  and position('@' in email) > 1
  and length(phone) between 5 and 60
  and length(transaction_reference) between 2 and 180
  and receipt_path like 'receipts/%'
);

create or replace function public.force_pending_payment_request()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  new.status := 'pending';
  new.verified_at := null;
  new.admin_notes := null;
  return new;
end;
$$;

drop trigger if exists force_pending_payment_request_before_insert on public.payment_requests;
create trigger force_pending_payment_request_before_insert
before insert on public.payment_requests
for each row
execute function public.force_pending_payment_request();

-- Seed only the approved active BROVI manual payment accounts.
insert into public.payment_methods (
  method_id,
  method_name,
  account_name,
  account_number,
  instruction_en,
  instruction_am,
  is_active,
  display_order
) values
  (
    'telebirr',
    'Telebirr',
    'Gedion Adamu',
    '0906795434',
    'Transfer the exact amount to this Telebirr account and use your full name as the payment reason.',
    'ትክክለኛውን መጠን ወደዚህ የቴሌብር ሂሳብ ያስተላልፉ፣ በምክንያት ቦታ ሙሉ ስምዎን ይጻፉ።',
    true,
    1
  ),
  (
    'cbe_bank',
    'CBE Bank',
    'Gedion Adamu',
    '1000238891977',
    'Transfer the exact amount to this CBE Bank account and keep the bank receipt for upload.',
    'ትክክለኛውን መጠን ወደዚህ የCBE Bank ሂሳብ ያስተላልፉ፣ የባንክ ደረሰኙን ለማስገባት ያስቀምጡ።',
    true,
    2
  ),
  (
    'siinque_bank',
    'Siinque Bank',
    'Gediyon Adamu',
    '1073488600113',
    'Transfer the exact amount to this Siinque Bank account and upload the receipt after payment.',
    'ትክክለኛውን መጠን ወደዚህ የSiinque Bank ሂሳብ ያስተላልፉ፣ ከክፍያ በኋላ ደረሰኙን ያስገቡ።',
    true,
    3
  )
on conflict (method_id) do update set
  method_name = excluded.method_name,
  account_name = excluded.account_name,
  account_number = excluded.account_number,
  instruction_en = excluded.instruction_en,
  instruction_am = excluded.instruction_am,
  is_active = excluded.is_active,
  display_order = excluded.display_order;

-- Private Supabase Storage bucket for manual payment receipts.
insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values (
  'payment-receipts',
  'payment-receipts',
  false,
  10485760,
  array['application/pdf', 'image/jpeg', 'image/png']::text[]
)
on conflict (id) do update set
  public = false,
  file_size_limit = 10485760,
  allowed_mime_types = array['application/pdf', 'image/jpeg', 'image/png']::text[];

-- Public clients may upload receipt files only. They cannot read/update/delete private receipts.
drop policy if exists "Allow public payment receipt uploads only" on storage.objects;
create policy "Allow public payment receipt uploads only"
on storage.objects
for insert
to anon
with check (
  bucket_id = 'payment-receipts'
  and name like 'receipts/%'
  and lower((storage.foldername(name))[1]) = 'receipts'
);
