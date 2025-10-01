import { useQuery } from '@tanstack/react-query'
import { supabase } from '@/integrations/supabase/client'

export function useEstatisticas() {
  return useQuery({
    queryKey: ['estatisticas'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('estatisticas_site' as any)
        .select('*')
        .order('ano', { ascending: false })
        .limit(1)
        .single()
      
      if (error) {
        console.error('Erro ao buscar estatísticas:', error)
        throw error
      }
      return data
    },
    staleTime: 1000 * 60 * 30
  })
}
