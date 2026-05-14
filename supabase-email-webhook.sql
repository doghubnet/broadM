-- Broad Mobility application email webhook
-- Review before running manually in Supabase SQL Editor.
-- Replace YOUR_PROJECT_REF before running.
-- Replace YOUR_WEBHOOK_SECRET with the same value stored in Supabase Edge Function secrets.
-- Do not commit real secret values.
-- Do not paste real secret values into GitHub.

drop trigger if exists on_application_insert_email on public.applications;

create trigger on_application_insert_email
after insert on public.applications
for each row
execute function supabase_functions.http_request(
  'https://YOUR_PROJECT_REF.functions.supabase.co/send-application-email',
  'POST',
  '{"Content-Type":"application/json","x-broadmobility-webhook-secret":"YOUR_WEBHOOK_SECRET"}',
  '{}',
  '5000'
);
