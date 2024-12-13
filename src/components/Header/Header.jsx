import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/form">Crear Noticia</Link>
        <Link to="/list">Lista de Noticias</Link>
      </nav>
    </header>
  );
};

export default Header;
