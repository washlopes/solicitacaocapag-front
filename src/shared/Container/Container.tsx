import React from 'react';

// import { Container } from './styles';

import './Container.scss'

declare interface ContainerProps {
    children?: JSX.Element | JSX.Element[]
}

const Container: React.FC<ContainerProps> = (props) => {
    return <div className='AppContainer'>
        {props.children}
    </div>;
}

export default Container;