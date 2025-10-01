import { useQuery } from '@tanstack/react-query'
import { supabase } from '@/integrations/supabase/client'

interface ConfiguracoesSite {
  id: number
  created_at: string
  updated_at: string
  redes_sociais: {
    discord: string
    twitter: string
    youtube: string
    facebook: string
    instagram: string
  }
  cores_tema: {
    accent: string
    primary: string
    secondary: string
  }
  informacoes_footer: {
    cnpj: string
    fundacao: string
  }
  logo_url: string | null
  nome_organizacao: string
  slogan: string
  descricao_principal: string | null
  telefone_principal: string
  email_principal: string
  endereco_completo: string
}

export function useConfig() {
  return useQuery<ConfiguracoesSite>({
    queryKey: ['config'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('configuracoes_site' as any)
        .select('*')
        .single()
      
      if (error) {
        console.error('Erro ao buscar configurações:', error)
        throw error
      }
      return data as unknown as ConfiguracoesSite
    },
    staleTime: 1000 * 60 * 10
  })
}
