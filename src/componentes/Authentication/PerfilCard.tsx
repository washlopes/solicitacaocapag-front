import React from 'react';
import Form from '../../shared/Form';

import Input from '../../shared/Input';

// import { Container } from './styles';

export interface Usuario {
    chave: string
    email: string
}

declare interface PerfilCardProps {
    usuario: Usuario
}


const PerfilCard: React.FC<PerfilCardProps> = (props) => {
    return <div>
        <Form titulo='Perfil'>
            <Input
                rotulo='Chave:'
                name='chave'
                value={props.usuario.chave}
            />
            <Input
                rotulo='Email:'
                name='email'
                value={props.usuario.email}
            />
        </Form>
    </div>;
}

export default PerfilCard;