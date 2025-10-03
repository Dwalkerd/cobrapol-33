import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { supabase } from '@/integrations/supabase/client'

interface Revista {
  id: number
  created_at?: string
  updated_at?: string
  ano: number | null
  data_publicacao?: string
  downloads: number
  destaque: boolean
  titulo: string
  edicao: string | null
  mes: string | null
  descricao: string | null
  capa_url: string | null
  arquivo_pdf_url: string | null
  tamanho_arquivo: string | null
  status: string
}

interface FiltrosRevistas {
  ano?: number
  busca?: string
}

export function useRevistas(filtros: FiltrosRevistas = {}) {
  const { ano, busca } = filtros
  
  return useQuery({
    queryKey: ['revistas', filtros],
    queryFn: async () => {
      let query = supabase
        .from('revistas' as any)
        .select('*')
        .eq('status', 'ativo')
        .order('ano', { ascending: false })
        .order('mes', { ascending: false })

      // Filtro por ano
      if (ano) {
        query = query.eq('ano', ano)
      }
      
      // Filtro por busca (título ou descrição)
      if (busca && busca.trim() !== '') {
        query = query.or(`titulo.ilike.%${busca}%,descricao.ilike.%${busca}%,edicao.ilike.%${busca}%`)
      }

      const { data, error } = await query
      
      if (error) {
        console.error('Erro ao buscar revistas:', error)
        throw error
      }
      
      return (data || []) as unknown as Revista[]
    },
    staleTime: 1000 * 60 * 5
  })
}

export function useRevistasDestaque() {
  return useQuery({
    queryKey: ['revistas-destaque'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('revistas' as any)
        .select('*')
        .eq('status', 'ativo')
        .eq('destaque', true)
        .order('ano', { ascending: false })
        .limit(3)
      
      if (error) {
        console.error('Erro ao buscar revistas destaque:', error)
        throw error
      }
      
      return (data || []) as unknown as Revista[]
    },
    staleTime: 1000 * 60 * 10
  })
}

export function useAnosDisponiveis() {
  return useQuery({
    queryKey: ['anos-revistas'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('revistas' as any)
        .select('ano')
        .eq('status', 'ativo')
      
      if (error) throw error
      
      // Extrair anos únicos e ordenar
      const anos = [...new Set((data || []).map((r: any) => r.ano))].sort((a, b) => (b || 0) - (a || 0))
      return anos.filter(a => a) as number[] // Remove nulls
    },
    staleTime: 1000 * 60 * 30
  })
}

export function useIncrementarDownload() {
  const queryClient = useQueryClient()
  
  return useMutation({
    mutationFn: async (revistaId: number) => {
      const { data: revista, error: fetchError } = await supabase
        .from('revistas' as any)
        .select('downloads')
        .eq('id', revistaId)
        .single()
      
      if (fetchError) throw fetchError
      
      const { error: updateError } = await supabase
        .from('revistas' as any)
        .update({ downloads: ((revista as any)?.downloads || 0) + 1 })
        .eq('id', revistaId)
      
      if (updateError) throw updateError
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['revistas'] })
    }
  })
}
