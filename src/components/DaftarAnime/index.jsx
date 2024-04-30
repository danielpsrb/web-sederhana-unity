import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const DaftarAnime = ({ title, images }) => {
    const [anime, setAnime] = useState(null);

    useEffect(() => {
        const fetchAnime = async () => {
            try {
                const response = await fetch(`${import.meta.env.VITE_REACT_API_URL}/top/anime?limit=8`);
                const data = await response.json();
                setAnime(data);
            } catch (error) {
                console.error('error fetchig data:', error);
            }
        };
        fetchAnime();
    }, []);

    return (
        <div className=''>
            <div className='grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 px-4'>
            {anime && anime.data && anime.data.map(data => {
                return (
                    <div key={data.mal_id} className='shadow-xl '>
                        <Link to={`/anime/${data.mal_id}`}>
                            <img src={data.images.webp.image_url} alt="images" width={350} height={350} />
                            <h3 className='font-bold md:text-xl text-md p-4'>{data.title}</h3>
                        </Link>
                    </div>
                );
            })}
            </div>
        </div>
    );
};

export default DaftarAnime;
