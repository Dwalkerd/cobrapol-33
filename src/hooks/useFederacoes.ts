import { useQuery } from '@tanstack/react-query'
import { supabase } from '@/integrations/supabase/client'

export function useFederacoes() {
  return useQuery({
    queryKey: ['federacoes'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('federacoes')
        .select('*')
        .order('regiao')
      
      if (error) {
        console.error('Erro ao buscar federações:', error)
        throw error
      }
      
      return data || []
    },
    staleTime: 1000 * 60 * 30
  })
}

export function useSindicatosPorFederacao(federacaoId: number) {
  return useQuery({
    queryKey: ['sindicatos-federacao', federacaoId],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('sindicatos')
        .select('*')
        .eq('federacao_id', federacaoId)
        .eq('is_sindicato_ativo', true)
        .order('nome_fantasia')
      
      if (error) {
        console.error('Erro ao buscar sindicatos:', error)
        throw error
      }
      
      return data || []
    },
    enabled: !!federacaoId,
    staleTime: 1000 * 60 * 10
  })
}
