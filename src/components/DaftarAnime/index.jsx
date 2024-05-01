import React from 'react';
import { Link } from 'react-router-dom';


const DaftarAnime = ({ api }) => {

    return (
        <div className='grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 px-4'>
            {api && api.data && api.data.map((animes) => {
                return (
                    <div key={animes.mal_id} className='bg-[#ADD8E6] hover:bg-[#DCDCDC] dark:bg-[#345DAC] cards'>
                        <Link to={`/anime/${animes.mal_id}`} className='dark:hover:text-yellow-500 transition-all' >
                            <img src={animes.images.webp.image_url} alt="images" width={350} height={350} loading='eager' />
                            <h3 className='font-semibold md:text-xl text-md p-4 hover:text-[#D2691E]'>{animes.title}</h3>
                        </Link>
                    </div>
                );
            })}
        </div>
    );
};

export default DaftarAnime;

