import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getAnimeResponse } from '../api/api-services';

const Anime = () => {
    const { id } = useParams();
    const [anime, setAnime] = useState(null);

    useEffect(() => {
        const fetchAnime = async () => {
            try {
                const animeData = await getAnimeResponse(`anime/${id}`);
                setAnime(animeData);
            } catch (error) {
                console.error('Error fetching anime:', error);
            }
        };
        fetchAnime();
    }, [id]);

    if (!anime) {
        // Render loading state or return null
        return null;
    }

    return (
        <>
            <div className='pt-4 px-4'>
                <h3 className="lg:text-2xl text-xl text-color-primary text-center">{anime.data.title_english} - {anime.data.year}</h3>
            </div>
            <div className="pt-4 px-4 flex  gap-2 lg:justify-center text-color-greenyellow overflow-x-auto gap-x-4 whitespace-nowrap">
                <div className="w-36 flex-shrink-0 flex flex-col justify-center items-center rounded-md border-2 border-[#0000FF] dark:border-[#7FFF00] p-2 m-2">
                    <h3>PERINGKAT</h3>
                    <p>{anime.data.rank}</p>
                </div>
                <div className="w-36 flex-shrink-0 flex flex-col justify-center items-center rounded-md border-2 border-[#0000FF] dark:border-[#7FFF00] p-2 m-2">
                    <h3>SKOR</h3>
                    <p>{anime.data.score}</p>
                </div>
                <div className="w-36 flex-shrink-0 flex flex-col justify-center items-center rounded-md border-2 border-[#0000FF] dark:border-[#7FFF00] p-2 m-2">
                    <h3>JUMLAH SUKA</h3>
                    <p>{anime.data.scored_by}</p>
                </div>
                <div className="w-36 flex-shrink-0 flex flex-col justify-center items-center rounded-md border-2 border-[#0000FF] dark:border-[#7FFF00] p-2 m-2">
                    <h3>DURASI WAKTU</h3>
                    <p>{anime.data.duration}</p>
                </div>
                <div className="w-36 flex-shrink-0 flex flex-col justify-center items-center rounded-md border-2 border-[#0000FF] dark:border-[#7FFF00] p-2 m-2">
                    <h3>ANGGOTA</h3>
                    <p>{anime.data.members}</p>
                </div>
                <div className="w-36 flex-shrink-0 flex flex-col justify-center items-center rounded-md border-2 border-[#0000FF] dark:border-[#7FFF00] p-2 m-2">
                    <h3>EPISODE</h3>
                    <p>{anime.data.episodes}</p>
                </div>
                <div className="w-36 flex-shrink-0 flex flex-col justify-center items-center rounded-md border-2 border-[#0000FF] dark:border-[#7FFF00] p-2 m-2">
                    <h3>Status Tayang</h3>
                    <p>{anime.data.status}</p>
                </div>
            </div>

            <div className="flex flex-col md:gap-2` py-4 md:mx-4 mx-2">
                <div className="grid md:grid-cols-2 gap-2 grid-cols-1 mb-4">
                    <img src={anime.data.images.webp.image_url} alt="images" width={500} height={400} className="w-full rounded-sm object-cover h-96" />
                    <iframe src={anime.data.trailer.embed_url} width="100%" height={384} allowFullScreen ></iframe>
                </div>
                <a href={`https://myanimelist.net/anime/${id}`} className="relative text-color-lavender text-center text-xl mb-2">
                    <span className="no-underline">👉</span> <span className="hover:underline">Go to Official Website</span> <span className="no-underline">👈</span>
                </a>
            </div>
            
            <div className="border-2 border-[#0000FF] dark:border-[#7FFF00] p-2 bg-color-accent rounded-lg select-none ">
                    <p className="text-justify text-xl text-color-black">{anime.data.synopsis}</p>
            </div>
        </>
    );
};

export default Anime;
