import React from 'react';
import { connect } from 'react-redux';
import PerfilCard, { Usuario } from '../componentes/Authentication/PerfilCard';
import Header from '../componentes/Header';
import Container from '../shared/Container';
import withPermission from '../utils/HOC/withPermission';

// import { Container } from './styles';

declare interface PerfilViewProps {
    usuario: Usuario
}

const PerfilView: React.FC<PerfilViewProps> = (props) => {
    return <>
        <Header titulo='Solicitação Capag' />
        <Container>
            <div >
                <PerfilCard usuario={props.usuario} />
            </div>
        </Container>

    </>;
}

const mapStateToProps = () => ({
    usuario: {
        chave: 'F9805839',
        email: 'washlopes@bb.com.br'
    }

})

export default connect(mapStateToProps)(
    withPermission(['admin', 'customer'], '/home')(PerfilView)

);