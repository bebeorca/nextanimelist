import { getAnimeResponse } from '@/libs/api-libs'
import DetailCard from '@/Components/DetailCard'
import Synopsis from '@/Components/Utilities/Synopsis'
import VideoPlayer from '@/Components/Utilities/VideoPlayer'
import Image from 'next/image'
import React from 'react'
import EpisodeCard from '@/Components/EpisodeCard'
import HeaderTitle from '@/Components/DetailCard/header'
import { authUserSession } from '@/libs/auth-libs'

const page = async ({ params: { id } }) => {

    const { data } = await getAnimeResponse(`anime/${id}`)
    const user = await authUserSession();

    return (
        <div className='flex flex-col p-4 md:px-44 gap-5'>
            <div className='flex sm:flex-nowrap flex-wrap gap-4 text-white'>
                <Image src={data?.images.webp.image_url} alt={data?.images.jpg.image_url} width={250} height={250}
                    className='w-full rounded object-cover' />
                <div className='flex flex-col gap-4 overflow-hidden'>
                    <HeaderTitle mal_id={id} user_email={user?.email} title={data?.title} />
                    <DetailCard status={data?.status} season={data?.season} year={data?.year} rank={data?.rank} score={data?.score} scored_by={data?.scored_by} episodes={data?.episodes} genre={data?.genres} />
                    <Synopsis synopsis={data?.synopsis} />
                </div>
            </div>
            <div className='text-white flex flex-col'>
                <h1 className='text-2xl pb-2'>Episodes</h1>
                <EpisodeCard id={id} />
            </div>
            <VideoPlayer videoId={data?.trailer.youtube_id} />
        </div>
    )
}

export default page
