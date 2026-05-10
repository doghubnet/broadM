-- Broad Mobility application form policies
-- Review before running in Supabase SQL Editor.

alter table public.applications enable row level security;

drop policy if exists "Allow public application inserts only" on public.applications;

create policy "Allow public application inserts only"
on public.applications
for insert
to anon
with check (
  status = 'new'
  and full_name is not null
  and length(full_name) between 2 and 140
  and email is not null
  and length(email) between 5 and 180
  and phone is not null
  and length(phone) between 5 and 60
  and application_level in ('Bachelor', 'Masters', 'Others')
  and application_area is not null
  and length(application_area) between 2 and 180
  and countries_interested is not null
  and length(countries_interested) between 2 and 240
  and heard_about_us is not null
  and length(heard_about_us) between 2 and 80
);

-- No SELECT policy is created for anon.
-- No UPDATE policy is created for anon.
-- No DELETE policy is created for anon.
-- This means public visitors can submit applications, but cannot read, edit, or delete application rows.

drop policy if exists "Allow public document uploads only" on storage.objects;

create policy "Allow public document uploads only"
on storage.objects
for insert
to anon
with check (
  bucket_id = 'application-documents'
  and (storage.foldername(name))[1] in (
    'grade-exams',
    'high-school-transcripts',
    'passports',
    'bachelor-certificates',
    'bachelor-transcripts'
  )
  and lower(storage.extension(name)) in ('pdf', 'jpg', 'jpeg', 'png')
);

-- No SELECT policy is created for anon on storage.objects.
-- No UPDATE policy is created for anon on storage.objects.
-- No DELETE policy is created for anon on storage.objects.
-- The bucket must remain private.
-- Files can be reviewed later from the Supabase Dashboard or through a protected admin flow.
