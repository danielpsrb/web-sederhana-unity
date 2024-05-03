import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { getAnimeResponse, getAnimeRekomendasi, reproduce } from './api/api-services'; // Mengimpor fungsi getAnimeResponse
import DaftarAnime from './components/DaftarAnime';
import Header from './components/DaftarAnime/Header';
import Navbar from './components/Navbar';
import DaftarManga from './components/DaftarManga';
import Search from './pages/Search';
import Populer from './pages/Populer';
import TopManga from './pages/TopManga';
import AnimeRecommendation from './components/RekomendasiAnime';
import NotFound from './components/NotFound';

export default function App() {
  const [animeData, setAnimeData] = useState([]);
  const [mangaData, setMangaData] = useState([]);
  const [rekomendasiAnimeData, setRekomendasiAnimeData] = useState();

  useEffect(() => {
    const fetchAnime = async () => {
      try {
        const topAnime = await getAnimeResponse('top/anime', 'limit=8');
        setAnimeData(topAnime);

        // Penundaan 1 detik antara permintaan
        await new Promise(resolve => setTimeout(resolve, 1000));

        const topManga = await fetchMangaWithRetry();
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

  // Fungsi untuk mengambil data top manga dengan penanganan retry
  const fetchMangaWithRetry = async () => {
    let retryCount = 0;
    while (true) {
      try {
        const topManga = await getAnimeResponse('top/manga', 'limit=8');
        return topManga;
      } catch (error) {
        if (error.response.status === 429 && retryCount < 3) {
          // Jika respons adalah 429 Too Many Requests, tunggu waktu yang semakin lama sebelum mencoba lagi
          const waitTime = Math.pow(2, retryCount) * 1000; // Backoff eksponensial
          await new Promise(resolve => setTimeout(resolve, waitTime));
          retryCount++;
        } else {
          throw error; // Lepaskan kesalahan jika bukan 429 atau sudah mencoba beberapa kali
        }
      }
    }
  };

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
                <Header title="Top Manga" linkTitle="See all Top Manga" linkHref="/top-manga" />
                <DaftarManga api={mangaData} />
              </section>
              <section>
                <Header title="Anime Recommendation" />
                <AnimeRecommendation api={rekomendasiAnimeData} />
              </section>
            </>
          } />
          <Route path="/search/:keyword" element={<Search />} /> {/* Menambahkan rute untuk Search */}
          <Route path="/populer" element={<Populer />} /> {/* Menambahkan rute untuk Populer */}
          <Route path="/top-manga" element={<TopManga />} /> {/* Menambahkan rute untuk lihat semua daftar TopManga */}
          <Route path="*" element={<NotFound />} /> {/* Menambahkan rute untuk NotFound */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}
