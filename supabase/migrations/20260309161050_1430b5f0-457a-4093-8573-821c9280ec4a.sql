
-- 1. Create app_role enum
CREATE TYPE public.app_role AS ENUM ('admin', 'editor', 'user');

-- 2. Create user_roles table
CREATE TABLE public.user_roles (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
    role app_role NOT NULL,
    created_at timestamp with time zone DEFAULT now(),
    UNIQUE (user_id, role)
);

-- 3. Enable RLS on user_roles
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

-- 4. Create has_role security definer function
CREATE OR REPLACE FUNCTION public.has_role(_user_id uuid, _role app_role)
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.user_roles
    WHERE user_id = _user_id
      AND role = _role
  )
$$;

-- 5. RLS policies for user_roles
CREATE POLICY "Users can view own roles"
ON public.user_roles
FOR SELECT
TO authenticated
USING (user_id = auth.uid());

-- 6. RLS policies for noticias_cobrapol - editors can SELECT all (including drafts)
CREATE POLICY "Editors can view all noticias"
ON public.noticias_cobrapol
FOR SELECT
TO authenticated
USING (public.has_role(auth.uid(), 'editor') OR public.has_role(auth.uid(), 'admin'));

-- 7. Editors/admins can INSERT
CREATE POLICY "Editors can insert noticias"
ON public.noticias_cobrapol
FOR INSERT
TO authenticated
WITH CHECK (public.has_role(auth.uid(), 'editor') OR public.has_role(auth.uid(), 'admin'));

-- 8. Editors/admins can UPDATE
CREATE POLICY "Editors can update noticias"
ON public.noticias_cobrapol
FOR UPDATE
TO authenticated
USING (public.has_role(auth.uid(), 'editor') OR public.has_role(auth.uid(), 'admin'))
WITH CHECK (public.has_role(auth.uid(), 'editor') OR public.has_role(auth.uid(), 'admin'));

-- 9. Editors/admins can DELETE
CREATE POLICY "Editors can delete noticias"
ON public.noticias_cobrapol
FOR DELETE
TO authenticated
USING (public.has_role(auth.uid(), 'editor') OR public.has_role(auth.uid(), 'admin'));

-- 10. Create storage bucket for news images
INSERT INTO storage.buckets (id, name, public)
VALUES ('noticias-imagens', 'noticias-imagens', true);

-- 11. Storage policies - public read
CREATE POLICY "Public can view news images"
ON storage.objects
FOR SELECT
TO public
USING (bucket_id = 'noticias-imagens');

-- 12. Storage policies - authenticated editors can upload
CREATE POLICY "Editors can upload news images"
ON storage.objects
FOR INSERT
TO authenticated
WITH CHECK (
  bucket_id = 'noticias-imagens' 
  AND (public.has_role(auth.uid(), 'editor') OR public.has_role(auth.uid(), 'admin'))
);

-- 13. Storage policies - authenticated editors can update
CREATE POLICY "Editors can update news images"
ON storage.objects
FOR UPDATE
TO authenticated
USING (
  bucket_id = 'noticias-imagens'
  AND (public.has_role(auth.uid(), 'editor') OR public.has_role(auth.uid(), 'admin'))
);

-- 14. Storage policies - authenticated editors can delete
CREATE POLICY "Editors can delete news images"
ON storage.objects
FOR DELETE
TO authenticated
USING (
  bucket_id = 'noticias-imagens'
  AND (public.has_role(auth.uid(), 'editor') OR public.has_role(auth.uid(), 'admin'))
);
