import React from 'react';
import LoginForm from '../componentes/Authentication/LoginForm';

import './LoginView.scss'
// import { Container } from './styles';

const LoginView: React.FC = () => {
    return <div className='login'>
        <div>
            <LoginForm />
        </div>
    </div>;
}

export default LoginView;