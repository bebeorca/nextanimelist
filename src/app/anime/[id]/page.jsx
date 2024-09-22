"use client"
import { getAnimeResponse } from '@/app/libs/api-libs'
import DetailCard from '@/Components/DetailCard'
import Synopsis from '@/Components/Utilities/Synopsis'
import VideoPlayer from '@/Components/Utilities/VideoPlayer'
import Image from 'next/image'
import React from 'react'

const page = async ({ params: { id } }) => {

    const { data } = await getAnimeResponse(`anime/${id}`)

    return (
        <>
            <div className='p-4 md:px-44 flex sm:flex-nowrap flex-wrap gap-4 text-white'>
                <Image src={data?.images.webp.image_url} alt={data?.images.jpg.image_url} width={250} height={250}
                    className='w-full rounded object-cover' />
                <div className='flex flex-col gap-4 overflow-hidden'>
                    <div className='pt-4'>
                        <h3 className='text-primary font-bold text-4xl'>{data?.title}</h3>
                    </div>
                    <DetailCard status={data?.status} season={data?.season} year={data?.year} rank={data?.rank} score={data?.score} scored_by={data?.scored_by} episodes={data?.episodes} genre={data?.genres[0].name} />
                    <Synopsis synopsis={data?.synopsis}/>
                </div>
            </div>
            <VideoPlayer videoId={data?.trailer.youtube_id} />
        </>
    )
}

export default page
