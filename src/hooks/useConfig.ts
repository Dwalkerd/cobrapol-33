import { useQuery } from '@tanstack/react-query'
import { supabase } from '@/integrations/supabase/client'

export function useConfig() {
  return useQuery({
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
      return data
    },
    staleTime: 1000 * 60 * 10
  })
}
