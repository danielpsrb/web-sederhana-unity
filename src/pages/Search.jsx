import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getAnimeResponse } from '../api/api-services';
import Header from '../components/DaftarAnime/Header';
import DaftarAnime from '../components/DaftarAnime';

const Search = () => {
    const { keyword } = useParams();
    const [searchAnime, setSearchAnime] = useState(null);
    const decodedKeyword = decodeURI(keyword);

    useEffect(() => {
        const fetchSearchResults = async () => {
            try {
                const searchResults = await getAnimeResponse("anime", `q=${decodedKeyword}`);
                setSearchAnime(searchResults);
            } catch (error) {
                console.error('Error fetching search results:', error);
            }
        };

        fetchSearchResults();
    }, [decodedKeyword]);

    return (
        <>
            <section className='dark:text-gray-100 dark:bg-slate-900 duration-100'>
                <Header title={`Pencarian Untuk ${decodedKeyword}...`} linkTitle="" linkHref="/populer"/>
                <DaftarAnime api={searchAnime} />
            </section>
        </>
    );
};

export default Search;
