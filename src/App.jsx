import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import DaftarAnime from './components/DaftarAnime'
import Header from './components/DaftarAnime/Header';
import Navbar from './components/Navbar';

export default function App() {

  return (
    <BrowserRouter>
      <div className="dark:text-gray-100 dark:bg-slate-900 duration-100">
        <Navbar />
        <Header />
        <DaftarAnime />
      </div>
    </BrowserRouter>
  )
}
