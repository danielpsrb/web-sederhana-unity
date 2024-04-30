import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import DaftarAnime from './components/DaftarAnime'
import Navbar from './components/Navbar';

export default function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <div className='flex justify-between items-center p-4'>
        <h1 className='md:text-xl font-medium'>Paling Populer</h1>
        <Link to='/populer' className='md:text-xl text-md'>Lihat Semua Anime</Link>
      </div>
      <DaftarAnime />
    </BrowserRouter>
  )
}
