import React from 'react';

// import { Container } from './styles';

import './Header.scss'

declare interface HeaderProps {
    titulo?: string,
    children?: JSX.Element
}

const Header: React.FC<HeaderProps> = (props) => {
    return <div >
        <header className='AppHeader'>
            <span>{props.titulo}</span>
        </header>
    </div>;
}

export default Header;
