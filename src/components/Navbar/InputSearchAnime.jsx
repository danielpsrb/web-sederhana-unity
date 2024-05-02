import React, { useRef, useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const InputSearchAnime = () => {
    const searchRef = useRef();
    const navigate = useNavigate();
    const location = useLocation();
    const [searchValue, setSearchValue] = useState('');

    useEffect(() => {
        if (location.pathname === '/') {
            setSearchValue('');
        }
    }, [location]);

    const handleSearchInput = (e) => {
        if (e.key === "Enter" || e.type === "click") {
            e.preventDefault();
            const keyword = searchRef.current.value;
    
            if (keyword.trim() !== "") {
                navigate(`/search/${keyword}`);
            }
        }
    };

    return (
        <div className='relative'>
            <input 
                placeholder='cari anime..' 
                className='w-80 md:w-auto p-2 pr-10 text-gray-800 placeholder-gray-500 rounded-md bg-gray-200 dark:bg-gray-800 dark:text-white dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ffc639] dark:focus:ring-blue-500' 
                ref={searchRef}
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                onKeyDown={handleSearchInput}
            />
            <button className='absolute top-2.5 end-2 text-black dark:text-white text-xl' onClick={handleSearchInput}>
                <ion-icon name="search-outline"></ion-icon>
            </button>
        </div>
    );
};

export default InputSearchAnime;
