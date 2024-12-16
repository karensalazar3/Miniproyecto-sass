import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Form from './components/Form/Form'
import ListNews from './components/ListNews/ListNews'
import Footer from './components/Footer/Footer'
import './App.scss'

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<Form />} />
        <Route path="/list" element={<ListNews />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App
