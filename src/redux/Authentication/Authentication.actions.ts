import { Thunk } from "..";
import { loginUsuario } from "../../services/Authentication.service";

declare interface Credenciais {
    usuario: string
    senha: string
}

export const login = ({ usuario, senha }: Credenciais): Thunk =>
    async (dispatch) => {
        const usuarioLogado = await loginUsuario(usuario, senha)
        dispatch({
            type: 'AUTHENTICATION_LOGIN',
            payload: usuarioLogado
        })
    }
