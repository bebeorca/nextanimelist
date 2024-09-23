"use client"
import React, { useEffect, useState } from 'react'
import AnimeList from '@/Components/Anime List'
import HeaderMenu from '@/Components/Utilities/HeaderMenu'
import Pagination from '@/Components/Utilities/Pagination'
import { getAnimeResponse } from '../../libs/api-libs'

const Page = () => {

    const [page, setPage] = useState(1);
    const [topAnime, setTopAnime] = useState([]);

    const fetchData = async() => {
        const populerAnime = await getAnimeResponse("top/anime", `page=${page}`)
        setTopAnime(populerAnime)
    }
    
    useEffect(() => {
        fetchData()
    }, [page])
    

    return (
        <div className='flex flex-col justify-between'>
            <HeaderMenu title={`ANIME TERPOPULER #${page}`}/>
            <AnimeList api={topAnime}/>
            <Pagination page={page} totalPage={topAnime.pagination?.last_visible_page} setPage={setPage}/>
        </div>
    )
}

export default Page
