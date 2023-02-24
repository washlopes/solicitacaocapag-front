import React from 'react';
import Header from '../componentes/Header';
import Container from '../shared/Container';
import { Button } from 'react-bootstrap';
import withPermission from '../utils/HOC/withPermission';
// import { Container } from './styles';

const HomeView: React.FC = () => {
    return <>
        <Header titulo='Solicitação de Capacidade de Pagamento' />
        <Container >
            <Button href='/inclusao'>Incluir</Button>
            <Button href='/listar'>Buscar</Button>
        </Container>
    </>;
}

export default HomeView;