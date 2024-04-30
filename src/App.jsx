import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DaftarAnime from './components/DaftarAnime'

export default function App() {

  return (
    <BrowserRouter>
      <h1>Paling Populer</h1>
      <DaftarAnime />
    </BrowserRouter>
  )
}
