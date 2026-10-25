GLOWCHAT — Tanglish setup guide (mobile-friendly)

IMPORTANT:
- GitHub + Vercel host the website files. Shared live chat needs a database/auth backend, so this starter uses Supabase's free tier (subject to current plan limits).
- Do NOT put an admin password or Supabase service_role key in app.js. Only the Supabase Project URL and anon/public key belong in browser code.
- The requested password 'sam@143' is weak. Create a strong admin password instead; never store it in the source code.
- The app has no phone-number login, no image/video/audio upload, simple text moderation, admin message delete, user ban/unban, glow admin badge, and 24-hour message cleanup (if pg_cron is available).
- This is a starter project, not deployed or production-audited. The blocked-word list is a basic example and will need moderation tuning.

PART A — Create the database
1. Open https://supabase.com/ and create a free project.
2. In Project Settings > API, copy Project URL and anon/public key.
3. Go to Authentication > Sign In / Providers (or Sign-in methods) and enable Anonymous sign-ins.
4. Open SQL Editor, create a new query, paste all of supabase-schema.sql, and run it.
5. If the last cron.schedule statement fails, comment out that statement and create a scheduled database job in Supabase if your plan supports it. Auto-delete won't work until scheduled cleanup is configured.

PART B — Set up the website
1. Open app.js and replace:
   PASTE_YOUR_SUPABASE_PROJECT_URL_HERE
   PASTE_YOUR_SUPABASE_ANON_KEY_HERE
   with your Project URL and anon/public key.
2. Upload index.html, style.css, app.js, and supabase-schema.sql to a GitHub repository.
3. In Vercel, import that GitHub repository and deploy. Framework preset: Other; build command blank; output directory . (root).

PART C — Make your account the admin
1. On the deployed website, create an account in Supabase Authentication > Users using an email and a strong password (or sign up with password through a temporary login page; easiest is create user from Supabase dashboard).
2. In Supabase Authentication > Users, copy that user's UUID.
3. In SQL Editor run this, replacing UUID_HERE with your account UUID:
   insert into public.admin_users(user_id) values ('UUID_HERE') on conflict do nothing;
4. Admin login on the website uses that account's email + password. The admin dashboard checks the database allowlist, so just typing username/password in the front end cannot grant admin rights.

PART D — Features and limitations
- Guests enter a username and nickname, and anonymous Supabase auth is created behind the scenes.
- Everyone sees the same public text lobby.
- Messages with a small starter list of bad words, phone-number-like patterns, email addresses, and certain contact handles are blocked in browser and database rules. No filter can catch every spelling or evasion; expand the list carefully.
- Admin can delete messages and ban/unban users. A banned user cannot send new messages. Refreshing chat after a ban will show any existing messages until deleted or expired.
- Messages older than 24 hours are removed only if scheduled cleanup is active.
- No website can guarantee anonymity. Do not promise users that chat is fully private; public chat messages are visible to all visitors who have joined.
