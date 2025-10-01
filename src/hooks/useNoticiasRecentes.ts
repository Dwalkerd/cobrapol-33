import { useQuery } from '@tanstack/react-query'
import { supabase } from '@/integrations/supabase/client'

export function useNoticiasRecentes(limit: number = 6) {
  return useQuery({
    queryKey: ['noticias-recentes', limit],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('noticias_cobrapol' as any)
        .select('*')
        .eq('status', 'publicado')
        .order('data_publicacao', { ascending: false })
        .limit(limit)
      
      if (error) {
        console.error('Erro ao buscar notícias recentes:', error)
        throw error
      }
      return data || []
    },
    staleTime: 1000 * 60 * 5
  })
}
