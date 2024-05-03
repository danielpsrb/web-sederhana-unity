import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { getAnimeResponse, getAnimeRekomendasi, reproduce } from './api/api-services'; // Mengimpor fungsi getAnimeResponse
import DaftarAnime from './components/DaftarAnime';
import Header from './components/DaftarAnime/Header';
import Navbar from './components/Navbar';
import DaftarManga from './components/DaftarManga';
import Search from './pages/Search';
import AnimeRecommendation from './components/RekomendasiAnime';
import NotFound from './components/NotFound';
import useSWR from 'swr';

export default function App() {
  const [animeData, setAnimeData] = useState("");
  const [mangaData, setMangaData] = useState("");
  const [rekomendasiAnimeData, setRekomendasiAnimeData] = useState("");

  useEffect(() => {
    const fetchAnime = async () => {
      try {
        const topAnime = await getAnimeResponse('top/anime', 'limit=8');
        setAnimeData(topAnime);

        const topManga = await getAnimeResponse('top/manga', 'limit=8')
        setMangaData(topManga);

        let rekomendasiAnime = await getAnimeRekomendasi("recommendations/anime", "entry");
        rekomendasiAnime = reproduce(rekomendasiAnime, 8)
        setRekomendasiAnimeData(rekomendasiAnime);

      } catch (error) {
        console.error('error fetching data:', error);
      }
    };
    fetchAnime();
  }, []);

  return (
    <BrowserRouter>
      <div className="min-h-screen dark:text-gray-100 dark:bg-[#232323] duration-100">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <section>
                <Header title="Top Anime" linkTitle="See all Top Anime" linkHref="/populer" />
                <DaftarAnime api={animeData} />
              </section>
              <section>
                <Header title="Top Manga" />
                <DaftarManga api={mangaData} />
              </section>
              <section>
                <Header title="Anime Recommendation" />
                <AnimeRecommendation api={rekomendasiAnimeData} />
              </section>
            </>
          } />
          <Route path="/search/:keyword" element={<Search />} /> {/* Menambahkan rute untuk Search */}
          <Route path="*" element={<NotFound />} /> {/* Menambahkan rute untuk NotFound */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}
