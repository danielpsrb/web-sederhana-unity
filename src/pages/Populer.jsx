import React, { useEffect, useState } from 'react';
import HeaderTitle from '../components/Utilities/HeaderTitle';
import Pagination from '../components/Utilities/Pagination';
import DaftarAnime from '../components/DaftarAnime';
import { getAnimeResponse } from '../api/api-services';

const Populer = () => {

    const [page, setPage] = useState(1)
    const [daftarAnime, setDaftarAnime] = useState([]);

    const fetchData = async () => {
        const populerAnime = await getAnimeResponse("top/anime", `page=${page}`)
        setDaftarAnime(populerAnime)
    }

    useEffect(() => {
        fetchData();
    }, [page])

    return (
        <>
            <HeaderTitle title={`DAFTAR ANIME TERPOPULER #${page}`} />
            <DaftarAnime api={daftarAnime} />
            <Pagination 
                page={page} 
                lastPage={daftarAnime.pagination?.last_visible_page}
                setPage={setPage}
            />
        </>
    )
}

export default Populer