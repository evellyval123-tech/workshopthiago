-- Método A.R.M. — setup do banco (rodar no SQL Editor do Supabase)
-- Auth nativo do Supabase (auth.users) cuida de cadastro/login/sessão/recuperação de senha.
-- Aqui só criamos a tabela de progresso: uma linha por usuário, respostas em jsonb.

create table if not exists public.progresso (
  user_id uuid primary key references auth.users(id) on delete cascade,
  answers jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);

alter table public.progresso enable row level security;

create policy "usuario le seu progresso"
  on public.progresso for select
  using (auth.uid() = user_id);

create policy "usuario insere seu progresso"
  on public.progresso for insert
  with check (auth.uid() = user_id);

create policy "usuario atualiza seu progresso"
  on public.progresso for update
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

-- mantém updated_at em dia a cada upsert
create or replace function public.tocar_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists progresso_updated_at on public.progresso;
create trigger progresso_updated_at
  before update on public.progresso
  for each row execute function public.tocar_updated_at();

-- Opcional: desabilitar confirmação de e-mail em Authentication > Settings
-- para que o login funcione imediatamente após o cadastro (mesma decisão
-- tomada no projeto irmão "Indicador do Amanhã").
