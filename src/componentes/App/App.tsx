import React from 'react';

import './App.css';

import HomeView from '../../views/HomeView';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NotFoundView from '../../views/NotFoundView';
import AboutView from '../../views/AboutView';
import MenuView from '../../views/MenuView';
import LoginView from '../../views/LoginView';
import PerfilView from '../../views/PerfilView';
import SolicitacaoFormView from '../../views/SolicitacaoFormView';
import ListarSolicitacoesView from '../../views/ListarSolicitacoesView';




function App() {

  return (
    <div >
      <BrowserRouter>
        <MenuView />
        <Routes>
          <Route path='/home' element={<HomeView />} />
          <Route path='/inclusao' element={<SolicitacaoFormView />} />
          <Route path='/listar' element={<ListarSolicitacoesView />} />
          <Route path='/about' element={<AboutView />} />
          <Route path='/login' element={<LoginView />} />
          <Route path='/perfil' element={<PerfilView />} />
          <Route path='*' element={<NotFoundView />} />
        </Routes>

      </BrowserRouter>

    </div >
  );
}

export default App;