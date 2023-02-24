import React from 'react';

// import { Container } from './styles';

import './Input.scss'


declare interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    rotulo?: string,
    children?: JSX.Element
}

const Input: React.FC<InputProps> = (props) => {
    return <div className='AppInput'>
        <label>
            <span>{props.rotulo}</span>
        </label>
        <input
            {...props}
        />
    </div>;
}

export default Input;