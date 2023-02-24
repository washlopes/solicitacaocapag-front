import { Solicitacao } from '../shared/Tabela/Tabela.mockdata'
import { SolicitacaoCreator } from '../componentes/SolicitacaoForm/SolicitacaoForm'
import api from '../apis'

export const obterTodasSolicitacoes = () => api.get<Solicitacao[]>('/solicitacoes').then(res => res.data)

export const salvarSolicitacao = (solicitacao: SolicitacaoCreator) => {
    api.post('/solicitacoes', solicitacao)
}

export const atualizaSolicitacao = (
    { _id, codigoCliente, nomeCliente, prefixoAgencia, valorProposto,
        valorFinanciado, prazoSolicitado, prazoCarencia,
        margemLucroOperacional }: Solicitacao
) => api.patch(`/solicitacoes/${_id}`, {
    ...(codigoCliente && { codigoCliente }),
    ...(nomeCliente && { nomeCliente }),
    ...(prefixoAgencia && { prefixoAgencia }),
    ...(valorProposto && { valorProposto }),
    ...(valorFinanciado && { valorFinanciado }),
    ...(prazoSolicitado && { prazoSolicitado }),
    ...(prazoCarencia && { prazoCarencia }),
    ...(margemLucroOperacional && { margemLucroOperacional })
})

export const excluirSolicitacao = (id: string) => api.delete(`/solicitacoes/${id}`)