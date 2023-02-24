import React from 'react';


import './ButtonApp.scss'
// import { Container } from './styles';

declare interface ButtonAppProps {
    conteudo?: string
    rotulo?: string
    onClick?: () => void
    children?: string
}

const ButtonApp: React.FC<ButtonAppProps> = (props) => {
    return (<div >
        <button className='AppButton'
            onClick={props.onClick}
        >
            <span>
                {props.children || 'Sem rótulo'}
            </span>
        </button>
    </div>);
}

export default ButtonApp;