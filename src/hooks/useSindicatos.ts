import { useQuery } from '@tanstack/react-query'
import { supabase } from '@/integrations/supabase/client'

interface Sindicato {
  id: number
  nome_fantasia: string
  denominacao: string
  cnpj: string
  email: string
  telefone: string
  foto: string
  data_fundacao: string
  contribuicao_minima: number
  is_sindicato_ativo: boolean
  estatuto_link: string
  cnes_link: string
  ata_eleicao_link: string
  presidente_nome: string
  website: string
  estado: string
  cidade: string
  federacao_id: number
  // Campos de endereço diretos
  rua: string
  bairro: string
  municipio: string
  numero: string
  cep: string
}

interface FiltrosSindicatos {
  estado?: string
  regiao?: string
  busca?: string
}

// Mapeamento de regiões para federacao_id
const REGIAO_FEDERACAO_MAP: Record<string, number> = {
  'Centro-Oeste': 1,
  'Nordeste': 2,
  'Norte': 3,
  'Sudeste': 4,
  'Sul': 5
}

export function useSindicatos(filtros?: FiltrosSindicatos) {
  return useQuery({
    queryKey: ['sindicatos', filtros],
    queryFn: async () => {
      console.log('🔍 [useSindicatos] Iniciando busca com filtros:', filtros)
      
      let query = supabase
        .from('sindicatos')
        .select('*')
        .eq('is_sindicato_ativo', true)
        .order('nome_fantasia', { ascending: true })

      // Filtro por busca (nome ou UF)
      if (filtros?.busca && filtros.busca.trim() !== '') {
        const buscaTrimmed = filtros.busca.trim()
        const buscaUpper = buscaTrimmed.toUpperCase()
        
        // Se a busca tiver 2 caracteres, assume que é uma UF
        if (buscaTrimmed.length === 2) {
          query = query.eq('estado', buscaUpper)
        } else {
          // Busca por nome_fantasia ou denominacao
          query = query.or(`nome_fantasia.ilike.%${buscaTrimmed}%,denominacao.ilike.%${buscaTrimmed}%`)
        }
      }

      // Filtro por estado específico
      if (filtros?.estado && filtros.estado !== 'Todos os Estados') {
        query = query.eq('estado', filtros.estado)
      }

      // Filtro por região (usando federacao_id)
      if (filtros?.regiao && filtros.regiao !== 'Todas as Regiões') {
        const federacaoId = REGIAO_FEDERACAO_MAP[filtros.regiao]
        if (federacaoId) {
          query = query.eq('federacao_id', federacaoId)
        }
      }

      const { data, error } = await query

      console.log('✅ [useSindicatos] Dados recebidos:', data)
      console.log('📊 [useSindicatos] Total de registros:', data?.length || 0)

      if (error) {
        console.error('Erro ao buscar sindicatos:', error)
        console.log('❌ [useSindicatos] Detalhes do erro:', error.message, error.details, error.hint)
        throw error
      }

      return data as Sindicato[]
    },
    staleTime: 1000 * 60 * 5, // 5 minutos
  })
}

export function useEstadosDisponiveis() {
  return useQuery({
    queryKey: ['estados-sindicatos'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('sindicatos')
        .select('estado')
        .eq('is_sindicato_ativo', true)
        .not('estado', 'is', null)
      
      if (error) {
        console.error('Erro ao buscar estados:', error)
        throw error
      }
      
      const estados = [...new Set(data?.map((e: any) => e.estado))]
        .filter(uf => uf)
        .sort()
      
      return estados
    },
    staleTime: 1000 * 60 * 30
  })
}

export function useRegioesMapeadas() {
  return useQuery({
    queryKey: ['regioes-sindicatos'],
    queryFn: async () => {
      return Object.keys(REGIAO_FEDERACAO_MAP)
    },
    staleTime: 1000 * 60 * 30
  })
}
