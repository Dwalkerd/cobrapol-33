import { useQuery } from '@tanstack/react-query'
import { supabase } from '@/integrations/supabase/client'

interface Sindicato {
  id: number
  nome_fantasia: string
  demonicacao: string
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
  endereco?: {
    uf: string
    municipio: string
    rua: string
    bairro: string
    numero: string
    cep: string
  }[]
}

interface FiltrosSindicatos {
  estado?: string
  regiao?: string
  busca?: string
}

// Mapeamento de estados por região
const REGIOES_BRASIL = {
  'Norte': ['AC', 'AP', 'AM', 'PA', 'RO', 'RR', 'TO'],
  'Nordeste': ['AL', 'BA', 'CE', 'MA', 'PB', 'PE', 'PI', 'RN', 'SE'],
  'Centro-Oeste': ['DF', 'GO', 'MT', 'MS'],
  'Sudeste': ['ES', 'MG', 'RJ', 'SP'],
  'Sul': ['PR', 'RS', 'SC']
}

export function useSindicatos(filtros?: FiltrosSindicatos) {
  return useQuery({
    queryKey: ['sindicatos', filtros],
    queryFn: async () => {
      console.log('🔍 [useSindicatos] Iniciando busca com filtros:', filtros)
      let query = supabase
        .from('sindicatos')
        .select(`
          *,
          endereco (
            uf,
            municipio,
            rua,
            bairro,
            numero,
            cep
          )
        `)
        .eq('is_sindicato_ativo', true)
        .order('nome_fantasia', { ascending: true })

      // Filtro por busca (nome ou UF)
      if (filtros?.busca) {
        const buscaUpper = filtros.busca.toUpperCase()
        
        // Se a busca tiver 2 caracteres, assume que é uma UF
        if (buscaUpper.length === 2) {
          query = query.or(`endereco.uf.eq.${buscaUpper}`)
        } else {
          // Busca por nome
          query = query.ilike('nome_fantasia', `%${filtros.busca}%`)
        }
      }

      // Filtro por estado específico
      if (filtros?.estado && filtros.estado !== 'Todos os Estados') {
        query = query.eq('endereco.uf', filtros.estado)
      }

      // Filtro por região
      if (filtros?.regiao && filtros.regiao !== 'Todas as Regiões') {
        const estadosDaRegiao = REGIOES_BRASIL[filtros.regiao as keyof typeof REGIOES_BRASIL]
        if (estadosDaRegiao) {
          query = query.in('endereco.uf', estadosDaRegiao)
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
        .from('endereco')
        .select('uf')
        .not('uf', 'is', null)
      
      if (error) {
        console.error('Erro ao buscar estados:', error)
        throw error
      }
      
      const estados = [...new Set(data?.map((e: any) => e.uf))]
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
      return Object.keys(REGIOES_BRASIL)
    },
    staleTime: 1000 * 60 * 30
  })
}
