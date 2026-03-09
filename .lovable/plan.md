

## Plano: Painel Editorial de Notícias

### Resumo
Criar um painel administrativo oculto em `/painel-editorial` com autenticação via Supabase Auth, editor de texto rico (WYSIWYG), upload de imagens para o Storage e CRUD completo de notícias.

---

### 1. Banco de Dados (Migrations)

**a) Tabela `user_roles`** para controle de acesso:
- Criar enum `app_role` com valores `admin`, `editor`, `user`
- Criar tabela `user_roles` (user_id -> auth.users, role)
- Criar função `has_role()` (SECURITY DEFINER) para verificar papel sem recursão RLS
- Depois de criar o primeiro usuário no Supabase Auth, você atribuirá a role `editor` ou `admin` manualmente via SQL

**b) RLS na tabela `noticias_cobrapol`**:
- Manter a policy SELECT existente (público lê notícias publicadas)
- Adicionar policy SELECT para editores verem todos os status (rascunho, publicado)
- Adicionar policies INSERT, UPDATE, DELETE restritas a usuários com role `admin` ou `editor`

**c) Storage bucket `noticias-imagens`**:
- Criar bucket público para imagens de destaque
- RLS: qualquer um lê, apenas autenticados com role editor/admin fazem upload

---

### 2. Autenticação

**Página de Login** (`/painel-editorial/login`):
- Formulário simples email + senha
- Usa `supabase.auth.signInWithPassword()`
- Redireciona para `/painel-editorial` após login
- Sem link visível no site -- acesso apenas por URL direta

**Auth Context/Hook**:
- Hook `useAuth` com `onAuthStateChange` + `getSession`
- Componente `ProtectedRoute` que verifica sessão e role antes de renderizar

---

### 3. Frontend -- Painel Editorial

**Rota `/painel-editorial`** (protegida):
- Dashboard com lista de notícias (todas, inclusive rascunhos)
- Tabela com colunas: título, categoria, status, data, ações (editar/excluir)
- Botão "Nova Notícia"
- Filtro por status (publicado/rascunho)

**Formulário de Criar/Editar Notícia**:
- Campos: título, slug (gerado automaticamente a partir do título, editável), resumo, autor, categoria, destaque (sim/não), status (publicado/rascunho)
- **Editor rico (Tiptap)**: negrito, itálico, listas, links, headings. Texto simples com Enter gera parágrafos automaticamente, sem necessidade de tags HTML
- **Upload de imagem destaque**: input de arquivo -> upload para bucket `noticias-imagens` -> URL gerada automaticamente e salva no campo `imagem_destaque`
- Botão de exclusão com confirmação (AlertDialog)

**Dependência adicional**: `@tiptap/react`, `@tiptap/starter-kit` (editor WYSIWYG leve e moderno)

---

### 4. Ajuste no Front Público

- `NoticiaDetalhes.tsx` já usa `dangerouslySetInnerHTML` para renderizar o conteúdo -- o HTML gerado pelo Tiptap será compatível
- Nenhuma quebra no front público -- as queries existentes continuam funcionando pois a policy de SELECT público permanece inalterada

---

### 5. Segurança

- Rota `/painel-editorial/*` não aparece em nenhum menu ou link do site
- Acesso controlado por Supabase Auth + verificação de role no servidor (RLS)
- Mesmo que alguém descubra a URL, sem login com role correta não consegue acessar nem dados nem funcionalidades
- Upload de imagens restrito a usuários autenticados com role

---

### Arquivos a Criar/Modificar

```text
CRIAR:
  src/hooks/useAuth.ts              -- Hook de autenticação
  src/components/ProtectedRoute.tsx  -- Wrapper de rota protegida
  src/pages/painel-editorial/Login.tsx
  src/pages/painel-editorial/PainelEditorial.tsx  -- Lista de notícias
  src/pages/painel-editorial/NoticiaForm.tsx       -- Formulário criar/editar
  src/components/ui/rich-text-editor.tsx           -- Editor Tiptap

MODIFICAR:
  src/App.tsx  -- Adicionar rotas /painel-editorial/*

MIGRATIONS:
  1. Criar user_roles + has_role function
  2. Adicionar RLS INSERT/UPDATE/DELETE em noticias_cobrapol
  3. Criar bucket noticias-imagens com policies
```

---

### Pós-implementação (ações manuais)

1. Criar o usuário do social media no Supabase Auth (dashboard > Authentication > Users)
2. Atribuir role via SQL: `INSERT INTO user_roles (user_id, role) VALUES ('<uuid>', 'editor')`
3. Compartilhar a URL `/painel-editorial/login` com o social media

