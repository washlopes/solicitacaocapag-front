import { Action } from ".."
import Solicitacoes, { Solicitacao } from "../../shared/Tabela/Tabela.mockdata"



// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = Solicitacoes, action: Action): Solicitacao[] {

    switch (action.type) {
        case 'INSERIR_NOVA_SOLICITACAO':
            return [...state, {
                ...action.payload
            }]
        case 'FETCH_TODAS_SOLICITACOES':
            return [...action.payload]
        default:
            return state
    }

}