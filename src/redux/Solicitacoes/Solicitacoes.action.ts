import { SolicitacaoCreator } from "../../componentes/SolicitacaoForm/SolicitacaoForm"
import { atualizaSolicitacao, excluirSolicitacao, obterTodasSolicitacoes, salvarSolicitacao } from "../../services/Solicitacao.service"

import { Action, Thunk } from ".."
import { Solicitacao } from "../../shared/Tabela/Tabela.mockdata"

export const atualizarSolicitacao = (solicitacao: Solicitacao): Thunk => async (dispatch) => {
    await atualizaSolicitacao(solicitacao)
    dispatch(obterSolicitacoes())
}

export const obterSolicitacoes = (): Thunk<Solicitacao[]> => async (dispatch) => {
    const solicitacoes = await obterTodasSolicitacoes()

    dispatch({
        type: 'FETCH_TODAS_SOLICITACOES',
        payload: solicitacoes
    })
}

export const inserirNovaSolicitacao = (solicitacao: SolicitacaoCreator): Thunk =>
    async (dispatch) => {
        await salvarSolicitacao(solicitacao)
        dispatch(obterSolicitacoes())
    }

export const deletarSolicitacao = (id: string): Thunk => async (dispatch) => {
    await excluirSolicitacao(id)
    dispatch(obterSolicitacoes)
}