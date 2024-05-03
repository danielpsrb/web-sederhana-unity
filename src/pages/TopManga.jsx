import React, { useEffect, useState } from 'react';
import HeaderTitleManga from '../components/Utilities/TopManga/HeaderTitleManga'
import PaginationManga from '../components/Utilities/TopManga/PaginationManga'
import DaftarManga from '../components/DaftarManga'
import { getAnimeResponse } from '../api/api-services'

const TopManga = () => {

    const [page, setPage] = useState(1)
    const [daftarManga, setDaftarManga] = useState([]);

    const fetchData = async () => {
        const topManga = await getAnimeResponse("top/manga", `page=${page}`)
        setDaftarManga(topManga)
    }

    useEffect(() => {
        fetchData();
    }, [page])

    return (
        <>
            <HeaderTitleManga title={`DAFTAR MANGA TERPOPULER #${page}`} />
            <DaftarManga api={daftarManga} />
            <PaginationManga 
                page={page} 
                lastPage={daftarManga.pagination?.last_visible_page}
                setPage={setPage}
            />
        </>
    )
}

export default TopManga