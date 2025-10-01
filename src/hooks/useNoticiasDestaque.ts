import { useQuery } from '@tanstack/react-query'
import { supabase } from '@/integrations/supabase/client'

export function useNoticiasDestaque(limit: number = 4) {
  return useQuery({
    queryKey: ['noticias-destaque', limit],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('noticias_cobrapol' as any)
        .select('*')
        .eq('status', 'publicado')
        .eq('destaque', true)
        .order('data_publicacao', { ascending: false })
        .limit(limit)
      
      if (error) {
        console.error('Erro ao buscar notícias destaque:', error)
        throw error
      }
      return data || []
    },
    staleTime: 1000 * 60 * 5
  })
}
