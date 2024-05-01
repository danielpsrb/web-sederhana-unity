import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const InputSearchAnime = () => {

    const searchRef = useRef();
    const navigate = useNavigate();

    const handleSearchInput = (e) => {
        e.preventDefault();
        const keyword = searchRef.current.value;
        navigate(`/search/${keyword}`);
    }

    return (
        <div className='relative'>
            <input 
                placeholder='cari anime..' 
                className='w-80 md:w-auto p-2 pr-10 text-black rounded-md' 
                ref={searchRef}
            />
            <button className='absolute top-2.5 end-2 text-black text-xl' onClick={handleSearchInput}>
                <ion-icon name="search-outline"></ion-icon>
            </button>
        </div>
    )
}

export default InputSearchAnime