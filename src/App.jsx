import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import DaftarAnime from './components/DaftarAnime'
import Header from './components/DaftarAnime/Header';
import Navbar from './components/Navbar';
import AnimeRecommendation from './components/RekomendasiAnime';

export default function App() {

  const [animeData, setAnimeData] = useState("");

  useEffect(() => {
        const fetchAnime = async () => {
            try {
                const response = await fetch(`${import.meta.env.VITE_REACT_API_URL}/top/anime?limit=8`);
                const topAnime = await response.json();
                setAnimeData(topAnime);
            } catch (error) {
                console.error('error fetchig data:', error);
            }
        };
        fetchAnime();
  }, []);

  return (
    <BrowserRouter>
      <div className="dark:text-gray-100 dark:bg-slate-900 duration-100">
        <Navbar />
        <Header />
        <DaftarAnime api={animeData} />
        <AnimeRecommendation />
      </div>
    </BrowserRouter>
  )
}
