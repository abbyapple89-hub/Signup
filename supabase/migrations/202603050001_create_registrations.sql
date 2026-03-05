create extension if not exists pgcrypto;

create table if not exists public.registrations (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  student_id text not null,
  phone text not null,
  team text not null,
  reason text not null,
  created_at timestamptz not null default now()
);

alter table public.registrations enable row level security;

create policy "public can read registrations"
on public.registrations
for select
to anon
using (true);

create policy "public can insert registrations"
on public.registrations
for insert
to anon
with check (true);

create policy "public can delete registrations"
on public.registrations
for delete
to anon
using (true);
