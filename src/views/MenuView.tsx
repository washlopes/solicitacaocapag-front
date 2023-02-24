import React from 'react';
import { Link } from 'react-router-dom';

import './estilos.scss'
// import { Container } from './styles';

const MenuView: React.FC = () => {
    return <div className='menu'>
        <nav>
            <ul>
                <li>
                    <Link to='/home'>Home</Link>
                </li>
                <li>
                    <Link to='/about'>About</Link>
                </li>
            </ul>

        </nav>
    </div>;
}

export default MenuView;