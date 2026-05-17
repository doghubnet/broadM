-- BROVI payment request email webhook
-- Review before running manually in Supabase SQL Editor.
-- Replace YOUR_WEBHOOK_SECRET with the same value stored in Supabase Edge Function secrets.
-- Never commit the real webhook secret to GitHub.

-- This trigger calls the send-payment-request-email Edge Function after a payment request insert.
drop trigger if exists on_payment_request_insert_email on public.payment_requests;

create trigger on_payment_request_insert_email
after insert on public.payment_requests
for each row
execute function supabase_functions.http_request(
  'https://woxumrlodanxkdwswneq.functions.supabase.co/send-payment-request-email',
  'POST',
  '{"Content-Type":"application/json","x-broadmobility-webhook-secret":"YOUR_WEBHOOK_SECRET"}',
  '{}',
  '5000'
);
