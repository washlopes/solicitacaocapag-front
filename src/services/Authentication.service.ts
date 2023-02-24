import api from '../apis';

export declare interface Usuario {
    _id: string
    usuario: string
    email: string
    role: 'admin' | 'customer'
    token: string
    createdAt: string
    updatedAt: string
}

export const loginUsuario = (usuario: string, senha: string) =>
    api.post<Usuario>('/authentication/login', { usuario, senha })
        .then(res => res.data)