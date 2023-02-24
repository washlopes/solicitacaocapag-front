import React from 'react';

// import { Container } from './styles';
import './Form.scss'

declare interface FormProps {
    titulo?: string,
    onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void
    children?: JSX.Element | JSX.Element[]
}
const Form: React.FC<FormProps> = (props) => {

    const preventedSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        props.onSubmit && props.onSubmit(event)
    }

    return <form className='AppForm' onSubmit={preventedSubmit}>

        {
            props.titulo && <div className='Titulo'>
                {props.titulo}
            </div>
        }
        {props.children}
    </form>
}

export default Form;