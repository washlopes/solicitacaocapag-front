import { Action } from "..";
import { Usuario } from "../../services/Authentication.service";


declare interface AuthenticationState {
    profile?: Usuario
}

export default function (state: AuthenticationState = {}, action: Action): AuthenticationState {
    switch (action.type) {
        case 'AUTHENTICATION_LOGIN':
            return { profile: action.payload }
        case 'AUTHENTICATION_LOGOUT':
            return {}
        default: return state
    }
}