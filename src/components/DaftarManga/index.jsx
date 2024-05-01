import React from 'react'
import { Link } from 'react-router-dom'

const DaftarManga = ({ api }) => {
    return (
        <div className='grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 px-4'>
            {api && api.data && api.data.map((manga) => {
                return (
                    <div key={manga.mal_id} className='bg-[#ADD8E6] hover:bg-[#ADFF2F] dark:bg-[#345DAC] cards'>
                        <Link to={`/anime/${manga.mal_id}`} className='dark:hover:text-yellow-500 transition-all'>
                            <img src={manga.images.webp.image_url} alt="images" width={350} height={350} />
                            <h3 className='font-semibold md:text-xl text-md p-4 hover:text-[#FF4500]'>{manga.title}</h3>
                        </Link>
                    </div>
                );
            })}
        </div>
    )
}

export default DaftarManga