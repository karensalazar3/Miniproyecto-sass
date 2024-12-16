import React from 'react'
import { Link } from 'react-router-dom'
import './Header.scss'

const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <Link to="/" className="link">Home</Link>
        <Link to="/form" className="link">Crear Noticia</Link>
        <Link to="/list" className="link">Lista de Noticias</Link>
      </nav>
    </header>
  );
};

export default Header
