-- Adicionar campos de endereço completo na tabela sindicatos
ALTER TABLE public.sindicatos
ADD COLUMN IF NOT EXISTS rua text,
ADD COLUMN IF NOT EXISTS bairro text,
ADD COLUMN IF NOT EXISTS municipio text,
ADD COLUMN IF NOT EXISTS numero text,
ADD COLUMN IF NOT EXISTS cep text;