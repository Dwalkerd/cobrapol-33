export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "12.2.3 (519615d)"
  }
  public: {
    Tables: {
      diretoria_sindicato: {
        Row: {
          atribuicoes: string | null
          cargo: string | null
          created_at: string
          foto_user_url: string | null
          id: number
          id_sindicato: number | null
          nome_user: string | null
        }
        Insert: {
          atribuicoes?: string | null
          cargo?: string | null
          created_at?: string
          foto_user_url?: string | null
          id?: number
          id_sindicato?: number | null
          nome_user?: string | null
        }
        Update: {
          atribuicoes?: string | null
          cargo?: string | null
          created_at?: string
          foto_user_url?: string | null
          id?: number
          id_sindicato?: number | null
          nome_user?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "diretoria_sindicato_id_sindicato_fkey"
            columns: ["id_sindicato"]
            isOneToOne: false
            referencedRelation: "sindicatos"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "diretoria_sindicato_id_sindicato_fkey"
            columns: ["id_sindicato"]
            isOneToOne: false
            referencedRelation: "view_entidade_sindical"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "diretoria_sindicato_id_sindicato_fkey"
            columns: ["id_sindicato"]
            isOneToOne: false
            referencedRelation: "view_financeiro_alertas"
            referencedColumns: ["id_sindicato"]
          },
          {
            foreignKeyName: "diretoria_sindicato_id_sindicato_fkey"
            columns: ["id_sindicato"]
            isOneToOne: false
            referencedRelation: "view_financeiro_ultimas_atualizacoes"
            referencedColumns: ["id_sindicato"]
          },
        ]
      }
      documentos: {
        Row: {
          created_at: string
          id: number
          link_doc: string | null
          nome: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          link_doc?: string | null
          nome?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          link_doc?: string | null
          nome?: string | null
        }
        Relationships: []
      }
      endereco: {
        Row: {
          bairro: string | null
          cep: string | null
          created_at: string
          id: number
          id_sindicato: number | null
          municipio: string | null
          numero: string | null
          rua: string | null
          uf: string | null
        }
        Insert: {
          bairro?: string | null
          cep?: string | null
          created_at?: string
          id?: number
          id_sindicato?: number | null
          municipio?: string | null
          numero?: string | null
          rua?: string | null
          uf?: string | null
        }
        Update: {
          bairro?: string | null
          cep?: string | null
          created_at?: string
          id?: number
          id_sindicato?: number | null
          municipio?: string | null
          numero?: string | null
          rua?: string | null
          uf?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "endereco_id_sindicato_fkey"
            columns: ["id_sindicato"]
            isOneToOne: false
            referencedRelation: "sindicatos"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "endereco_id_sindicato_fkey"
            columns: ["id_sindicato"]
            isOneToOne: false
            referencedRelation: "view_entidade_sindical"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "endereco_id_sindicato_fkey"
            columns: ["id_sindicato"]
            isOneToOne: false
            referencedRelation: "view_financeiro_alertas"
            referencedColumns: ["id_sindicato"]
          },
          {
            foreignKeyName: "endereco_id_sindicato_fkey"
            columns: ["id_sindicato"]
            isOneToOne: false
            referencedRelation: "view_financeiro_ultimas_atualizacoes"
            referencedColumns: ["id_sindicato"]
          },
        ]
      }
      financeiro: {
        Row: {
          adm_aprove: boolean | null
          aliquota: number | null
          ano: string | null
          competencia: string | null
          created_at: string
          descricao: string | null
          dias_atraso: number | null
          doc_url: string | null
          dtivama: string | null
          dtp: string | null
          dtvec: string | null
          dtvei: string | null
          dvp: number | null
          id: number
          id_sindicato: number | null
          mes: string | null
          referencia: string | null
          status: Database["public"]["Enums"]["status_financeiro"] | null
          valor_arrecadacao: number | null
          valor_contribuicao: number | null
          vama: number | null
          vcm: number | null
          vpc: number | null
        }
        Insert: {
          adm_aprove?: boolean | null
          aliquota?: number | null
          ano?: string | null
          competencia?: string | null
          created_at?: string
          descricao?: string | null
          dias_atraso?: number | null
          doc_url?: string | null
          dtivama?: string | null
          dtp?: string | null
          dtvec?: string | null
          dtvei?: string | null
          dvp?: number | null
          id?: number
          id_sindicato?: number | null
          mes?: string | null
          referencia?: string | null
          status?: Database["public"]["Enums"]["status_financeiro"] | null
          valor_arrecadacao?: number | null
          valor_contribuicao?: number | null
          vama?: number | null
          vcm?: number | null
          vpc?: number | null
        }
        Update: {
          adm_aprove?: boolean | null
          aliquota?: number | null
          ano?: string | null
          competencia?: string | null
          created_at?: string
          descricao?: string | null
          dias_atraso?: number | null
          doc_url?: string | null
          dtivama?: string | null
          dtp?: string | null
          dtvec?: string | null
          dtvei?: string | null
          dvp?: number | null
          id?: number
          id_sindicato?: number | null
          mes?: string | null
          referencia?: string | null
          status?: Database["public"]["Enums"]["status_financeiro"] | null
          valor_arrecadacao?: number | null
          valor_contribuicao?: number | null
          vama?: number | null
          vcm?: number | null
          vpc?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "financeiro_id_sindicato_fkey"
            columns: ["id_sindicato"]
            isOneToOne: false
            referencedRelation: "sindicatos"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "financeiro_id_sindicato_fkey"
            columns: ["id_sindicato"]
            isOneToOne: false
            referencedRelation: "view_entidade_sindical"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "financeiro_id_sindicato_fkey"
            columns: ["id_sindicato"]
            isOneToOne: false
            referencedRelation: "view_financeiro_alertas"
            referencedColumns: ["id_sindicato"]
          },
          {
            foreignKeyName: "financeiro_id_sindicato_fkey"
            columns: ["id_sindicato"]
            isOneToOne: false
            referencedRelation: "view_financeiro_ultimas_atualizacoes"
            referencedColumns: ["id_sindicato"]
          },
        ]
      }
      notificacoes: {
        Row: {
          created_at: string
          id: number
          id_sindicato: number | null
          mensagem: string | null
          mensagem_callout: string | null
          titulo_popup: string | null
          user_bubble: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          id_sindicato?: number | null
          mensagem?: string | null
          mensagem_callout?: string | null
          titulo_popup?: string | null
          user_bubble?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          id_sindicato?: number | null
          mensagem?: string | null
          mensagem_callout?: string | null
          titulo_popup?: string | null
          user_bubble?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "notificacoes_id_sindicato_fkey"
            columns: ["id_sindicato"]
            isOneToOne: false
            referencedRelation: "sindicatos"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "notificacoes_id_sindicato_fkey"
            columns: ["id_sindicato"]
            isOneToOne: false
            referencedRelation: "view_entidade_sindical"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "notificacoes_id_sindicato_fkey"
            columns: ["id_sindicato"]
            isOneToOne: false
            referencedRelation: "view_financeiro_alertas"
            referencedColumns: ["id_sindicato"]
          },
          {
            foreignKeyName: "notificacoes_id_sindicato_fkey"
            columns: ["id_sindicato"]
            isOneToOne: false
            referencedRelation: "view_financeiro_ultimas_atualizacoes"
            referencedColumns: ["id_sindicato"]
          },
        ]
      }
      pastas: {
        Row: {
          created_at: string
          id: number
          nome: string | null
          sigilo: Database["public"]["Enums"]["sigilo_pastas"] | null
          tamanho_mg: number | null
        }
        Insert: {
          created_at?: string
          id?: number
          nome?: string | null
          sigilo?: Database["public"]["Enums"]["sigilo_pastas"] | null
          tamanho_mg?: number | null
        }
        Update: {
          created_at?: string
          id?: number
          nome?: string | null
          sigilo?: Database["public"]["Enums"]["sigilo_pastas"] | null
          tamanho_mg?: number | null
        }
        Relationships: []
      }
      ranking: {
        Row: {
          cargo: string | null
          created_at: string
          id: number
          id_sindicato: number | null
          update_at: string | null
          valor_final_carreira: number | null
          valor_inicio_carreira: number | null
        }
        Insert: {
          cargo?: string | null
          created_at?: string
          id?: number
          id_sindicato?: number | null
          update_at?: string | null
          valor_final_carreira?: number | null
          valor_inicio_carreira?: number | null
        }
        Update: {
          cargo?: string | null
          created_at?: string
          id?: number
          id_sindicato?: number | null
          update_at?: string | null
          valor_final_carreira?: number | null
          valor_inicio_carreira?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "ranking_id_sindicato_fkey"
            columns: ["id_sindicato"]
            isOneToOne: false
            referencedRelation: "sindicatos"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "ranking_id_sindicato_fkey"
            columns: ["id_sindicato"]
            isOneToOne: false
            referencedRelation: "view_entidade_sindical"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "ranking_id_sindicato_fkey"
            columns: ["id_sindicato"]
            isOneToOne: false
            referencedRelation: "view_financeiro_alertas"
            referencedColumns: ["id_sindicato"]
          },
          {
            foreignKeyName: "ranking_id_sindicato_fkey"
            columns: ["id_sindicato"]
            isOneToOne: false
            referencedRelation: "view_financeiro_ultimas_atualizacoes"
            referencedColumns: ["id_sindicato"]
          },
        ]
      }
      relacao_pasta_sub_docs: {
        Row: {
          created_at: string
          id: number
          id_doc: number | null
          id_pasta: number | null
          id_subpasta: number | null
        }
        Insert: {
          created_at?: string
          id?: number
          id_doc?: number | null
          id_pasta?: number | null
          id_subpasta?: number | null
        }
        Update: {
          created_at?: string
          id?: number
          id_doc?: number | null
          id_pasta?: number | null
          id_subpasta?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "relacao_pasta_sub_docs_id_doc_fkey"
            columns: ["id_doc"]
            isOneToOne: false
            referencedRelation: "documentos"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "relacao_pasta_sub_docs_id_doc_fkey"
            columns: ["id_doc"]
            isOneToOne: false
            referencedRelation: "vw_conteudo_subpasta"
            referencedColumns: ["documento_id"]
          },
          {
            foreignKeyName: "relacao_pasta_sub_docs_id_pasta_fkey"
            columns: ["id_pasta"]
            isOneToOne: false
            referencedRelation: "pastas"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "relacao_pasta_sub_docs_id_pasta_fkey"
            columns: ["id_pasta"]
            isOneToOne: false
            referencedRelation: "vw_pastas_principais"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "relacao_pasta_sub_docs_id_subpasta_fkey"
            columns: ["id_subpasta"]
            isOneToOne: false
            referencedRelation: "subpastas"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "relacao_pasta_sub_docs_id_subpasta_fkey"
            columns: ["id_subpasta"]
            isOneToOne: false
            referencedRelation: "vw_conteudo_subpasta"
            referencedColumns: ["subpasta_id"]
          },
          {
            foreignKeyName: "relacao_pasta_sub_docs_id_subpasta_fkey"
            columns: ["id_subpasta"]
            isOneToOne: false
            referencedRelation: "vw_conteudo_subpasta"
            referencedColumns: ["subpasta2_id"]
          },
        ]
      }
      relacao_sub_docs_sub: {
        Row: {
          created_at: string
          id: number
          id_doc: number | null
          id_subpasta: number | null
          id_subpasta2: number | null
        }
        Insert: {
          created_at?: string
          id?: number
          id_doc?: number | null
          id_subpasta?: number | null
          id_subpasta2?: number | null
        }
        Update: {
          created_at?: string
          id?: number
          id_doc?: number | null
          id_subpasta?: number | null
          id_subpasta2?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "relacao_sub_docs_id_doc_fkey"
            columns: ["id_doc"]
            isOneToOne: false
            referencedRelation: "documentos"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "relacao_sub_docs_id_doc_fkey"
            columns: ["id_doc"]
            isOneToOne: false
            referencedRelation: "vw_conteudo_subpasta"
            referencedColumns: ["documento_id"]
          },
          {
            foreignKeyName: "relacao_sub_docs_id_subpasta_fkey"
            columns: ["id_subpasta"]
            isOneToOne: false
            referencedRelation: "subpastas"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "relacao_sub_docs_id_subpasta_fkey"
            columns: ["id_subpasta"]
            isOneToOne: false
            referencedRelation: "vw_conteudo_subpasta"
            referencedColumns: ["subpasta_id"]
          },
          {
            foreignKeyName: "relacao_sub_docs_id_subpasta_fkey"
            columns: ["id_subpasta"]
            isOneToOne: false
            referencedRelation: "vw_conteudo_subpasta"
            referencedColumns: ["subpasta2_id"]
          },
          {
            foreignKeyName: "relacao_sub_docs_id_subpasta2_fkey"
            columns: ["id_subpasta2"]
            isOneToOne: false
            referencedRelation: "subpastas"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "relacao_sub_docs_id_subpasta2_fkey"
            columns: ["id_subpasta2"]
            isOneToOne: false
            referencedRelation: "vw_conteudo_subpasta"
            referencedColumns: ["subpasta_id"]
          },
          {
            foreignKeyName: "relacao_sub_docs_id_subpasta2_fkey"
            columns: ["id_subpasta2"]
            isOneToOne: false
            referencedRelation: "vw_conteudo_subpasta"
            referencedColumns: ["subpasta2_id"]
          },
        ]
      }
      sindicatos: {
        Row: {
          aliquota: number | null
          ata_eleicao_link: string | null
          cnes_link: string | null
          cnpj: string | null
          contribuicao_minima: number | null
          created_at: string
          data_fundacao: string | null
          demonicacao: string | null
          email: string | null
          estatuto_link: string | null
          foto: string | null
          id: number
          is_contribuicao_ativa: boolean | null
          is_sindicato_ativo: boolean | null
          nome_fantasia: string | null
          telefone: string | null
        }
        Insert: {
          aliquota?: number | null
          ata_eleicao_link?: string | null
          cnes_link?: string | null
          cnpj?: string | null
          contribuicao_minima?: number | null
          created_at?: string
          data_fundacao?: string | null
          demonicacao?: string | null
          email?: string | null
          estatuto_link?: string | null
          foto?: string | null
          id?: number
          is_contribuicao_ativa?: boolean | null
          is_sindicato_ativo?: boolean | null
          nome_fantasia?: string | null
          telefone?: string | null
        }
        Update: {
          aliquota?: number | null
          ata_eleicao_link?: string | null
          cnes_link?: string | null
          cnpj?: string | null
          contribuicao_minima?: number | null
          created_at?: string
          data_fundacao?: string | null
          demonicacao?: string | null
          email?: string | null
          estatuto_link?: string | null
          foto?: string | null
          id?: number
          is_contribuicao_ativa?: boolean | null
          is_sindicato_ativo?: boolean | null
          nome_fantasia?: string | null
          telefone?: string | null
        }
        Relationships: []
      }
      subpastas: {
        Row: {
          created_at: string
          id: number
          nome: string | null
          nome_user_bubble: string | null
          tamanho_mb: number | null
          updated_at: string | null
          user_id_bubble: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          nome?: string | null
          nome_user_bubble?: string | null
          tamanho_mb?: number | null
          updated_at?: string | null
          user_id_bubble?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          nome?: string | null
          nome_user_bubble?: string | null
          tamanho_mb?: number | null
          updated_at?: string | null
          user_id_bubble?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      view_entidade_sindical: {
        Row: {
          aliquota: number | null
          ata_eleicao_link: string | null
          bairro: string | null
          cep: string | null
          cnes_link: string | null
          cnpj: string | null
          contribuicao_minima: number | null
          created_at: string | null
          data_fundacao: string | null
          denominacao: string | null
          email: string | null
          estado: string | null
          estatuto_link: string | null
          foto: string | null
          id: number | null
          is_contribuicao_ativa: boolean | null
          is_sindicato_ativo: boolean | null
          municipio: string | null
          nome_fantasia: string | null
          numero: string | null
          rua: string | null
          situacao: string | null
          telefone: string | null
        }
        Relationships: []
      }
      view_financeiro_alertas: {
        Row: {
          boletos_emitidos: number | null
          boletos_emitidos_nao_pagos: number | null
          boletos_pagos: number | null
          id_sindicato: number | null
          sindicato: string | null
        }
        Relationships: []
      }
      view_financeiro_ultimas_atualizacoes: {
        Row: {
          data_criacao: string | null
          data_referencia: string | null
          denominacao: string | null
          dias_atraso: number | null
          id_sindicato: number | null
          status: Database["public"]["Enums"]["status_financeiro"] | null
        }
        Relationships: []
      }
      view_movimentacao_receita_por_mes: {
        Row: {
          mes_abrev: string | null
          mes_periodo: string | null
          total_arrecadacao: number | null
          total_contribuicao: number | null
        }
        Relationships: []
      }
      view_posicao_final: {
        Row: {
          id_sindicato: number | null
          posicao_final: number | null
          sindicato: string | null
          valor_final_carreira: number | null
        }
        Relationships: [
          {
            foreignKeyName: "ranking_id_sindicato_fkey"
            columns: ["id_sindicato"]
            isOneToOne: false
            referencedRelation: "sindicatos"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "ranking_id_sindicato_fkey"
            columns: ["id_sindicato"]
            isOneToOne: false
            referencedRelation: "view_entidade_sindical"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "ranking_id_sindicato_fkey"
            columns: ["id_sindicato"]
            isOneToOne: false
            referencedRelation: "view_financeiro_alertas"
            referencedColumns: ["id_sindicato"]
          },
          {
            foreignKeyName: "ranking_id_sindicato_fkey"
            columns: ["id_sindicato"]
            isOneToOne: false
            referencedRelation: "view_financeiro_ultimas_atualizacoes"
            referencedColumns: ["id_sindicato"]
          },
        ]
      }
      view_posicao_inicio: {
        Row: {
          id_sindicato: number | null
          posicao_inicio: number | null
          sindicato: string | null
          valor_inicio_carreira: number | null
        }
        Relationships: [
          {
            foreignKeyName: "ranking_id_sindicato_fkey"
            columns: ["id_sindicato"]
            isOneToOne: false
            referencedRelation: "sindicatos"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "ranking_id_sindicato_fkey"
            columns: ["id_sindicato"]
            isOneToOne: false
            referencedRelation: "view_entidade_sindical"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "ranking_id_sindicato_fkey"
            columns: ["id_sindicato"]
            isOneToOne: false
            referencedRelation: "view_financeiro_alertas"
            referencedColumns: ["id_sindicato"]
          },
          {
            foreignKeyName: "ranking_id_sindicato_fkey"
            columns: ["id_sindicato"]
            isOneToOne: false
            referencedRelation: "view_financeiro_ultimas_atualizacoes"
            referencedColumns: ["id_sindicato"]
          },
        ]
      }
      view_ranking_final: {
        Row: {
          cargo: string | null
          final_carreira: number | null
          inicio_carreira: number | null
          ranking: number | null
          sindicato: string | null
        }
        Relationships: []
      }
      view_ranking_inicio: {
        Row: {
          cargo: string | null
          final_carreira: number | null
          inicio_carreira: number | null
          ranking: number | null
          sindicato: string | null
        }
        Relationships: []
      }
      view_ranking_regiao_final: {
        Row: {
          media_final_carreira: number | null
          ranking: number | null
          regiao: string | null
        }
        Relationships: []
      }
      view_ranking_regiao_inicio: {
        Row: {
          media_inicio_carreira: number | null
          ranking: number | null
          regiao: string | null
        }
        Relationships: []
      }
      view_ranking_unidade_federacao: {
        Row: {
          estado: string | null
          final_carreira: number | null
          inicio_carreira: number | null
          media_carreira: number | null
          ranking: number | null
          sindicato: string | null
        }
        Relationships: []
      }
      view_sindicatos_com_atrasos: {
        Row: {
          categoria: string | null
          quantidade: number | null
        }
        Relationships: []
      }
      view_superadmin_financeiro: {
        Row: {
          boletos_pendentes: number | null
          entidades_sindicais_inadimplentes: number | null
        }
        Relationships: []
      }
      vw_conteudo_subpasta: {
        Row: {
          documento_id: number | null
          documento_link: string | null
          documento_nome: string | null
          relacao_criada_em: string | null
          subpasta_id: number | null
          subpasta_nome: string | null
          subpasta2_id: number | null
          subpasta2_nome: string | null
        }
        Relationships: []
      }
      vw_pastas_principais: {
        Row: {
          created_at: string | null
          id: number | null
          ids_subpastas: string | null
          nome: string | null
          sigilo: Database["public"]["Enums"]["sigilo_pastas"] | null
          tamanho_mg: number | null
        }
        Relationships: []
      }
      vw_principais_metricas_mes: {
        Row: {
          boleto_pendente: number | null
          informou_recepcao_e_pagou: number | null
          nao_informou_recepcao_e_nao_pagou: number | null
          nao_informou_recepcao_e_pagou: number | null
          total_pago_ano: number | null
        }
        Relationships: []
      }
      vw_ultimas_contribuicoes_sindicato: {
        Row: {
          arrecadacao: number | null
          boleto_status: string | null
          denominacao: string | null
          id_financeiro: number | null
          id_sindicato: number | null
          recibo_url: string | null
          upload_url: string | null
        }
        Relationships: [
          {
            foreignKeyName: "financeiro_id_sindicato_fkey"
            columns: ["id_sindicato"]
            isOneToOne: false
            referencedRelation: "sindicatos"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "financeiro_id_sindicato_fkey"
            columns: ["id_sindicato"]
            isOneToOne: false
            referencedRelation: "view_entidade_sindical"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "financeiro_id_sindicato_fkey"
            columns: ["id_sindicato"]
            isOneToOne: false
            referencedRelation: "view_financeiro_alertas"
            referencedColumns: ["id_sindicato"]
          },
          {
            foreignKeyName: "financeiro_id_sindicato_fkey"
            columns: ["id_sindicato"]
            isOneToOne: false
            referencedRelation: "view_financeiro_ultimas_atualizacoes"
            referencedColumns: ["id_sindicato"]
          },
        ]
      }
    }
    Functions: {
      add_documento_to_pasta: {
        Args: { _link_doc: string; _nome: string; _pasta_id: number }
        Returns: {
          documento_id: number
          relacao_id: number
        }[]
      }
      add_documento_to_subpasta: {
        Args: { _link_doc: string; _nome: string; _subpasta_id: number }
        Returns: {
          documento_id: number
          relacao_id: number
        }[]
      }
      add_subpasta_to_pasta: {
        Args: {
          _nome: string
          _nome_user_bubble?: string
          _pasta_id: number
          _user_id_bubble?: string
        }
        Returns: {
          relacao_id: number
          subpasta_id: number
        }[]
      }
      add_subpasta_to_subpasta: {
        Args: {
          _nome: string
          _nome_user_bubble?: string
          _parent_subpasta_id: number
          _tamanho_mb?: number
          _user_id_bubble?: string
        }
        Returns: {
          relacao_id: number
          subpasta_id: number
        }[]
      }
      atualizar_sindicato: {
        Args:
          | {
              p_aliquota: number
              p_ata_eleicao_link: string
              p_bairro: string
              p_cep: string
              p_cnes_link: string
              p_cnpj: string
              p_contribuicao_minima: number
              p_data_fundacao: string
              p_demonincacao: string
              p_email: string
              p_estatuto_link: string
              p_foto: string
              p_id: number
              p_is_contribuicao_ativa: boolean
              p_is_sindicato_ativo: boolean
              p_municipio: string
              p_nome_fantasia: string
              p_numero: string
              p_rua: string
              p_uf: string
            }
          | {
              p_aliquota: number
              p_ata_eleicao_link: string
              p_bairro: string
              p_cnes_link: string
              p_cnpj: string
              p_contribuicao_minima: number
              p_data_fundacao: string
              p_demonincacao: string
              p_email: string
              p_estatuto_link: string
              p_foto: string
              p_id: number
              p_is_contribuicao_ativa: boolean
              p_is_sindicato_ativo: boolean
              p_municipio: string
              p_nome_fantasia: string
              p_numero: string
              p_rua: string
              p_uf: string
            }
          | {
              p_aliquota: number
              p_ata_eleicao_link: string
              p_bairro: string
              p_cnes_link: string
              p_cnpj: string
              p_contribuicao_minima: number
              p_data_fundacao: string
              p_demonincacao: string
              p_email: string
              p_estatuto_link: string
              p_foto: string
              p_id: number
              p_is_contribuicao_ativa: boolean
              p_is_sindicato_ativo: boolean
              p_municipio: string
              p_nome_fantasia: string
              p_numero: string
              p_rua: string
              p_uf: string
            }
        Returns: undefined
      }
      inserir_sindicato: {
        Args:
          | {
              p_aliquota: number
              p_ata_eleicao_link: string
              p_bairro: string
              p_cep: string
              p_cnes_link: string
              p_cnpj: string
              p_contribuicao_minima: number
              p_data_fundacao: string
              p_demonincacao: string
              p_email: string
              p_estatuto_link: string
              p_foto: string
              p_is_contribuicao_ativa: boolean
              p_is_sindicato_ativo: boolean
              p_municipio: string
              p_nome_fantasia: string
              p_numero: string
              p_rua: string
              p_uf: string
            }
          | {
              p_aliquota: number
              p_ata_eleicao_link: string
              p_bairro: string
              p_cnes_link: string
              p_cnpj: string
              p_contribuicao_minima: number
              p_data_fundacao: string
              p_demonincacao: string
              p_email: string
              p_estatuto_link: string
              p_foto: string
              p_is_contribuicao_ativa: boolean
              p_is_sindicato_ativo: boolean
              p_municipio: string
              p_nome_fantasia: string
              p_numero: string
              p_rua: string
              p_uf: string
            }
        Returns: number
      }
      rpc_update_financeiro: {
        Args:
          | {
              p_adm_aprove?: string
              p_aliquota?: string
              p_ano?: string
              p_competencia?: string
              p_descricao?: string
              p_dias_atraso?: string
              p_doc_url?: string
              p_dtivama?: string
              p_dtp?: string
              p_dtvec?: string
              p_dtvei?: string
              p_dvp?: string
              p_id?: string
              p_id_sindicato?: string
              p_mes?: string
              p_referencia?: string
              p_status?: string
              p_valor_arrecadacao?: string
              p_valor_contribuicao?: string
              p_vama?: string
              p_vcm?: string
              p_vpc?: string
            }
          | {
              p_adm_aprove_t?: string
              p_aliquota_t?: string
              p_ano?: string
              p_competencia?: string
              p_descricao?: string
              p_dias_atraso_t?: string
              p_doc_url?: string
              p_dtivama?: string
              p_dtp?: string
              p_dtvec?: string
              p_dtvei?: string
              p_dvp_t?: string
              p_id: number
              p_id_sindicato?: number
              p_mes?: string
              p_referencia?: string
              p_status?: Database["public"]["Enums"]["status_financeiro"]
              p_valor_arrecadacao_t?: string
              p_valor_contribuicao_t?: string
              p_vama_t?: string
              p_vcm_t?: string
              p_vpc_t?: string
            }
          | {
              p_adm_aprove_t?: string
              p_aliquota_t?: string
              p_ano?: string
              p_competencia?: string
              p_descricao?: string
              p_dias_atraso_t?: string
              p_doc_url?: string
              p_dtivama?: string
              p_dtp?: string
              p_dtvec?: string
              p_dtvei?: string
              p_dvp_t?: string
              p_id: number
              p_id_sindicato_t?: string
              p_mes?: string
              p_referencia?: string
              p_status_t?: string
              p_valor_arrecadacao_t?: string
              p_valor_contribuicao_t?: string
              p_vama_t?: string
              p_vcm_t?: string
              p_vpc_t?: string
            }
        Returns: undefined
      }
    }
    Enums: {
      estados:
        | "AC"
        | "AL"
        | "AP"
        | "AM"
        | "BA"
        | "CE"
        | "DF"
        | "ES"
        | "GO"
        | "MA"
        | "MT"
        | "MS"
        | "MG"
        | "PA"
        | "PB"
        | "PR"
        | "PE"
        | "PI"
        | "RJ"
        | "RN"
        | "RS"
        | "RO"
        | "RR"
        | "SC"
        | "SP"
        | "SE"
        | "TO"
      genero: "Masculino" | "Feminino" | "Não binário"
      redes_sociais: "Instagram" | "Linkedin" | "Facebook"
      sigilo_pastas: "Público" | "Restrito" | "Sigiloso"
      status_financeiro:
        | "Informou a Recadação e pagou"
        | "Informou a Recadação e possui boleto pendente"
        | "Não informou a Recadação e pagou"
        | "Não informou a Recadação, mas possui boleto"
        | "Não Informou a Recadação e não Pagou"
        | "null"
      tipo_telefone: "Corporativo" | "Pessoal"
      tipo_usuario: "Usuario externo" | "Dirigente sindical"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      estados: [
        "AC",
        "AL",
        "AP",
        "AM",
        "BA",
        "CE",
        "DF",
        "ES",
        "GO",
        "MA",
        "MT",
        "MS",
        "MG",
        "PA",
        "PB",
        "PR",
        "PE",
        "PI",
        "RJ",
        "RN",
        "RS",
        "RO",
        "RR",
        "SC",
        "SP",
        "SE",
        "TO",
      ],
      genero: ["Masculino", "Feminino", "Não binário"],
      redes_sociais: ["Instagram", "Linkedin", "Facebook"],
      sigilo_pastas: ["Público", "Restrito", "Sigiloso"],
      status_financeiro: [
        "Informou a Recadação e pagou",
        "Informou a Recadação e possui boleto pendente",
        "Não informou a Recadação e pagou",
        "Não informou a Recadação, mas possui boleto",
        "Não Informou a Recadação e não Pagou",
        "null",
      ],
      tipo_telefone: ["Corporativo", "Pessoal"],
      tipo_usuario: ["Usuario externo", "Dirigente sindical"],
    },
  },
} as const
