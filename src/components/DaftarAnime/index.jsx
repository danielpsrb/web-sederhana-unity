import React from 'react';
import { Link } from 'react-router-dom';


const DaftarAnime = ({ api }) => {

    return (
        <div className='grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 px-4'>
            {api && api.data && api.data.map((animes) => {
                return (
                    <div key={animes.mal_id} className='shadow-xl '>
                        <Link to={`/anime/${animes.mal_id}`}>
                            <img src={animes.images.webp.image_url} alt="images" width={350} height={350} />
                            <h3 className='font-bold md:text-xl text-md p-4'>{animes.title}</h3>
                        </Link>
                    </div>
                );
            })}
        </div>
    );
};

export default DaftarAnime;

