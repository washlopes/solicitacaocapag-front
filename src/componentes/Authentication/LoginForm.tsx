import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';
import { login } from '../../redux/Authentication/Authentication.actions';
import ButtonApp from '../../shared/ButtonApp';
import Form from '../../shared/Form';
import Input from '../../shared/Input';

// import { Container } from './styles';

const LoginForm: React.FC = () => {

    const disparar = useDispatch()

    const [form, setForm] = useState({
        usuario: '',
        senha: ''
    })

    const handleLogin = async () => {
        try {
            //@ts-ignore
            await disparar(login(form))
        } catch (erro: any) {
            Swal.fire('Erro', erro.message, 'error')
        }
        console.table(form)
    }

    const handleInputOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target

        setForm({
            ...form,
            [name]: value
        })
    }

    return <Form titulo='Login - Solicitação Capacidade Pagamento' onSubmit={handleLogin}>
        <Input
            rotulo='Usuário:'
            name='usuario'
            value={form.usuario}
            onChange={handleInputOnChange}
            placeholder='E.g.: FXXXXXXX'
        />
        <Input
            type="password"
            rotulo='Senha:'
            name='senha'
            onChange={handleInputOnChange}
            value={form.senha}
        />
        <ButtonApp>
            Login
        </ButtonApp>
    </Form>;
}

export default LoginForm;