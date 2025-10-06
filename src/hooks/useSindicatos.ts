import { useQuery } from '@tanstack/react-query'
import { supabase } from '@/integrations/supabase/client'

interface FiltrosSindicatos {
  estado?: string
  regiao?: string
  busca?: string
  federacao_id?: number
}

export function useSindicatos(filtros: FiltrosSindicatos = {}) {
  const { estado, regiao, busca, federacao_id } = filtros
  
  return useQuery({
    queryKey: ['sindicatos', filtros],
    queryFn: async () => {
      let query = (supabase as any)
        .from('sindicatos')
        .select(`
          *,
          federacoes:federacao_id (
            nome,
            sigla,
            regiao
          ),
          endereco (
            rua,
            bairro,
            municipio,
            uf,
            cep
          )
        `)
        .eq('is_sindicato_ativo', true)
        .order('estado')
        .order('nome_fantasia')

      // Filtro por estado
      if (estado && estado !== 'todos') {
        query = query.eq('estado', estado)
      }
      
      // Filtro por região (via federação)
      if (regiao && regiao !== 'todas') {
        query = query.eq('federacoes.regiao', regiao)
      }
      
      // Filtro por federação
      if (federacao_id) {
        query = query.eq('federacao_id', federacao_id)
      }
      
      // Filtro por busca (nome ou denominação)
      if (busca && busca.trim() !== '') {
        query = query.or(`nome_fantasia.ilike.%${busca}%,demonicacao.ilike.%${busca}%`)
      }

      const { data, error } = await query
      
      if (error) {
        console.error('Erro ao buscar sindicatos:', error)
        throw error
      }
      
      return data || []
    },
    staleTime: 1000 * 60 * 10
  })
}

export function useEstadosDisponiveis() {
  return useQuery({
    queryKey: ['estados-sindicatos'],
    queryFn: async () => {
      const { data, error } = await (supabase as any)
        .from('sindicatos')
        .select('estado')
        // Removido filtro is_sindicato_ativo para mostrar TODOS os estados
      
      if (error) {
        console.error('Erro ao buscar estados:', error)
        throw error
      }
      
      console.log('📊 Dados brutos dos estados:', data)
      
      const estados = [...new Set(data?.map((s: any) => s.estado))]
        .filter(e => e) // Remove nulls/undefined
        .sort()
      
      console.log('✅ Estados únicos disponíveis:', estados)
      
      return estados
    },
    staleTime: 1000 * 60 * 30
  })
}

export function useRegioesMapeadas() {
  return useQuery({
    queryKey: ['regioes-sindicatos'],
    queryFn: async () => {
      const { data, error } = await (supabase as any)
        .from('federacoes')
        .select('regiao')
      
      if (error) throw error
      
      const regioes = [...new Set(data?.map((f: any) => f.regiao))].sort()
      return regioes.filter(r => r)
    },
    staleTime: 1000 * 60 * 30
  })
}
