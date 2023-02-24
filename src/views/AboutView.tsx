import React from 'react';
import withPermission from '../utils/HOC/withPermission';

// import { Container } from './styles';

const AboutView: React.FC = () => {
    return <div >
        <h1>About</h1>
    </div>;
}

export default withPermission(['admin', 'customer'], '/login')(AboutView);