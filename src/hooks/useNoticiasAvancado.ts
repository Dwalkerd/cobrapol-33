import { useQuery } from '@tanstack/react-query'
import { supabase } from '@/integrations/supabase/client'

interface FiltrosNoticias {
  categoria?: string
  busca?: string
  page?: number
  limit?: number
}

export function useNoticiasComFiltros(filtros: FiltrosNoticias = {}) {
  const { categoria, busca, page = 1, limit = 12 } = filtros
  
  return useQuery({
    queryKey: ['noticias-filtradas', filtros],
    queryFn: async () => {
      let query = supabase
        .from('noticias_cobrapol' as any)
        .select('*', { count: 'exact' })
        .eq('status', 'publicado')
        .order('data_publicacao', { ascending: false })

      if (categoria && categoria !== 'todas') {
        query = query.eq('categoria', categoria)
      }
      
      if (busca && busca.trim() !== '') {
        query = query.or(`titulo.ilike.%${busca}%,resumo.ilike.%${busca}%`)
      }

      const from = (page - 1) * limit
      const to = from + limit - 1
      query = query.range(from, to)

      const { data, error, count } = await query
      
      if (error) throw error
      
      return { 
        noticias: data || [], 
        total: count || 0,
        totalPaginas: Math.ceil((count || 0) / limit)
      }
    }
  })
}

export function useCategorias() {
  return useQuery({
    queryKey: ['categorias-noticias'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('noticias_cobrapol' as any)
        .select('categoria')
        .eq('status', 'publicado')
      
      if (error) throw error
      
      const categorias = [...new Set(data?.map((n: any) => n.categoria))]
      return categorias.filter(c => c)
    }
  })
}

export function useNoticiaDetalhes(slug: string) {
  return useQuery({
    queryKey: ['noticia-detalhes', slug],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('noticias_cobrapol' as any)
        .select('*')
        .eq('slug', slug)
        .eq('status', 'publicado')
        .maybeSingle()
      
      if (error) throw error
      if (!data) throw new Error('Notícia não encontrada')
      
      // Incrementar visualizações
      await supabase
        .from('noticias_cobrapol' as any)
        .update({ visualizacoes: ((data as any).visualizacoes || 0) + 1 })
        .eq('id', (data as any).id)
      
      return data
    }
  })
}

export function useNoticiasRelacionadas(categoriaAtual: string, slugAtual: string, limit: number = 3) {
  return useQuery({
    queryKey: ['noticias-relacionadas', categoriaAtual, slugAtual],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('noticias_cobrapol' as any)
        .select('*')
        .eq('status', 'publicado')
        .eq('categoria', categoriaAtual)
        .neq('slug', slugAtual)
        .order('data_publicacao', { ascending: false })
        .limit(limit)
      
      if (error) throw error
      return data || []
    }
  })
}
