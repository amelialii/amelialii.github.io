-- Heartbeat table for the "Keep Supabase awake" GitHub Action
-- (.github/workflows/supabase-keepalive.yml).
-- Run this once in the Supabase dashboard: SQL Editor -> New query -> paste -> Run.
--
-- The anon key can only INSERT rows here. It can't read, update or delete
-- anything. At 6 rows a day the table grows by about 2,200 tiny rows a year.

create table if not exists public.heartbeat (
  id        bigint generated always as identity primary key,
  pinged_at timestamptz not null default now(),
  source    text not null default 'github-actions'
);

alter table public.heartbeat enable row level security;

drop policy if exists "anon can insert heartbeat" on public.heartbeat;
create policy "anon can insert heartbeat"
  on public.heartbeat
  for insert
  to anon
  with check (true);

grant insert on public.heartbeat to anon;

-- Optional: run this now and then to clear out old rows.
-- delete from public.heartbeat where pinged_at < now() - interval '30 days';
