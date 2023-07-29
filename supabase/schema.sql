-- *** Table definitions ***

create table if not exists public.event_users (
    id uuid not null primary key default uuid_generate_v4(),
    user_id uuid references auth.users on delete cascade not null,
    email varchar(100) not null unique,
    full_name varchar(100) not null,
    avatar_url varchar(200) not null,
    provider varchar(20) not null,
    display_name varchar(12) not null,
    role varchar(16),
    secret_word varchar(200) not null,
    receipt_id varchar(40) not null unique,
    activated_at timestamp with time zone,
    created_at timestamp with time zone default timezone('utc' :: text, now()) not null,
    updated_at timestamp with time zone default timezone('utc' :: text, now()) not null
);
comment on table public.event_users is 'Holds all of event users information';

create table if not exists public.pm_receipts (
    id uuid not null primary key default uuid_generate_v4(),
    role varchar(16) not null,
    receipt_id varchar(40) not null unique,
    created_at timestamp with time zone default timezone('utc' :: text, now()) not null,
    updated_at timestamp with time zone default timezone('utc' :: text, now()) not null
);
comment on table public.pm_receipts is 'Holds all of pass market receipts information';

-- *** Function definitions ***
create or replace function public.handle_activate()
  returns trigger as $$
begin
  update public.event_users
  set activated_at = now(), role = new.role
  where receipt_id = new.receipt_id;
  return new;
end;
$$ language plpgsql security definer;

-- *** Trigger definitions ***
drop trigger if exists on_new_receipt_created on public.pm_receipts;
create trigger on_new_receipt_created
  after insert on public.pm_receipts
  for each row
  execute function handle_activate();
