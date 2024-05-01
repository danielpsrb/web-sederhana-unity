import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import DaftarAnime from './components/DaftarAnime'
import Header from './components/DaftarAnime/Header';
import Navbar from './components/Navbar';

export default function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Header />
      <DaftarAnime />
    </BrowserRouter>
  )
}
