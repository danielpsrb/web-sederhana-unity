import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { getAnimeResponse, getTopManga } from './api/api-services'; // Mengimpor fungsi getAnimeResponse
import DaftarAnime from './components/DaftarAnime';
import Header from './components/DaftarAnime/Header';
import Navbar from './components/Navbar';
import DaftarManga from './components/DaftarManga';


export default function App() {
  const [animeData, setAnimeData] = useState("");
  const [mangaData, setMangaData] = useState("");

  useEffect(() => {
    const fetchAnime = async () => {
      try {
        const topAnime = await getAnimeResponse('top/anime', 'limit=8');
        setAnimeData(topAnime);

        const topManga = await getTopManga();
        setMangaData(topManga);

      } catch (error) {
        console.error('error fetching data:', error);
      }
    };
    fetchAnime();
  }, []);

  return (
    <BrowserRouter>
      <div className="dark:text-gray-100 dark:bg-slate-900 duration-100">
        <Navbar />
        <section>
          <Header title="Top Anime" linkTitle="Lihat Semua" linkHref="/populer" />
          <DaftarAnime api={animeData} />
        </section>
        <section>
          <Header title="Top Manga" linkTitle="Lihat Semua" linkHref="/populer" />
          <DaftarManga api={mangaData} />
        </section>
      </div>
    </BrowserRouter>
  );
}
