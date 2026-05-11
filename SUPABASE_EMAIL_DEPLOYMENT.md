# Supabase Email Deployment

## 1. Purpose

This deployment system deploys the Supabase Edge Function that sends an admin email after a new Broad Mobility application is inserted.

The intended flow is:

1. A visitor submits the existing Broad Mobility application form.
2. The existing frontend uploads documents to Supabase Storage and inserts one row into `public.applications`.
3. A Supabase Database Webhook calls the `send-application-email` Edge Function.
4. The Edge Function sends an admin notification email through Resend.
5. The admin inbox receives the application notice at `gediyonadamu5070@gmail.com`.

## 2. Required GitHub repository secrets

Add these required GitHub Actions repository secrets:

- `SUPABASE_ACCESS_TOKEN`
- `SUPABASE_PROJECT_REF`
- `RESEND_API_KEY`
- `BROAD_MOBILITY_WEBHOOK_SECRET`

## 3. Optional GitHub repository secret

Optional secret:

- `SUPABASE_DB_URL`

`SUPABASE_DB_URL` is only needed if you want GitHub Actions to automatically install or update the database webhook trigger. If it is not configured, the workflow still deploys the Edge Function and sets Edge Function secrets, then prints manual SQL setup instructions.

## 4. Where to get each secret

- `SUPABASE_ACCESS_TOKEN`: Supabase Dashboard or Supabase account access token area.
- `SUPABASE_PROJECT_REF`: Supabase project reference. For this project: `woxumrlodanxkdwswneq`.
- `RESEND_API_KEY`: Resend dashboard API key.
- `BROAD_MOBILITY_WEBHOOK_SECRET`: A strong random secret created by you. Use the same value for the Edge Function secret and webhook header.
- `SUPABASE_DB_URL`: Supabase Postgres connection string. Keep private. Add only as a GitHub repository secret.

Do not include real secret values in repository files, issues, pull requests, logs, screenshots, or documentation.

## 5. How to add GitHub repository secrets

1. Open the GitHub repository.
2. Go to **Settings**.
3. Go to **Secrets and variables**.
4. Choose **Actions**.
5. Click **New repository secret**.
6. Add each required secret by name.
7. Optionally add `SUPABASE_DB_URL` if you want automated webhook SQL execution.

## 6. How to run the workflow manually

1. Open the GitHub repository.
2. Go to **Actions**.
3. Select **Deploy Supabase Email Function**.
4. Click **Run workflow**.
5. Choose the branch to deploy from.
6. Click **Run workflow**.

The workflow uses `workflow_dispatch` only. It does not run on push or pull request events.

## 7. Automated SQL behavior

If `SUPABASE_DB_URL` exists, the workflow:

1. Installs the PostgreSQL client.
2. Creates a temporary SQL file from `supabase-email-webhook.sql`.
3. Replaces `YOUR_PROJECT_REF` with the `SUPABASE_PROJECT_REF` GitHub secret.
4. Replaces `YOUR_WEBHOOK_SECRET` with the `BROAD_MOBILITY_WEBHOOK_SECRET` GitHub secret.
5. Runs the temporary SQL with `psql`.
6. Deletes the temporary SQL file after execution.

The temporary SQL file is deleted after execution and must never be committed.

## 8. Manual SQL fallback

If `SUPABASE_DB_URL` is not added, the workflow deploys the Edge Function and sets secrets only.

Manual steps:

1. Open `supabase-email-webhook.sql`.
2. Replace `YOUR_PROJECT_REF` with: `woxumrlodanxkdwswneq`.
3. Replace `YOUR_WEBHOOK_SECRET` with the same value stored as `BROAD_MOBILITY_WEBHOOK_SECRET`.
4. Run the SQL in Supabase SQL Editor.
5. Do not save the replaced SQL with the real secret into GitHub.

## 9. How to test

1. Deploy the website normally.
2. Run the GitHub Action: **Deploy Supabase Email Function**.
3. Submit a new Broad Mobility application.
4. Check **Supabase Table Editor → public.applications**.
5. Confirm a new row exists.
6. Check that Supabase Storage paths remain saved in the application row.
7. Check Supabase Edge Function logs for `send-application-email`.
8. Check the admin inbox: `gediyonadamu5070@gmail.com`.


## No-domain Resend testing

- The current sender is `Broad Mobility <onboarding@resend.dev>`.
- This sender is for testing only.
- With `onboarding@resend.dev`, Resend can only send to the Resend account owner email.
- The current testing recipient is `gediyonadamu5070@gmail.com`.
- For production, verify a custom domain in Resend.
- After domain verification, update the sender to a verified address such as `applications@broadmobility.com` and update the recipient as needed.

## 10. Troubleshooting

- If no email arrives, check Resend dashboard logs.
- Check Supabase Edge Function logs.
- Confirm webhook SQL was run.
- Confirm `BROAD_MOBILITY_WEBHOOK_SECRET` matches between the Edge Function secret and webhook header.
- Confirm `RESEND_API_KEY` is valid.
- Confirm sender email is allowed by Resend.
- For production, verify a sender domain in Resend.

## 11. Security confirmation

No email API key was exposed in frontend code.
