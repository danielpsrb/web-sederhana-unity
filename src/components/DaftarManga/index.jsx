import React from 'react'
import { Link } from 'react-router-dom'

const DaftarManga = ({ api }) => {
    return (
        <div className='grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 px-4'>
            {api && api.data && api.data.map((manga) => {
                return (
                    <div key={manga.mal_id} className='shadow-xl '>
                        <Link to={`/anime/${manga.mal_id}`}>
                            <img src={manga.images.webp.image_url} alt="images" width={350} height={350} />
                            <h3 className='font-bold md:text-xl text-md p-4'>{manga.title}</h3>
                        </Link>
                    </div>
                );
            })}
        </div>
    )
}

export default DaftarManga