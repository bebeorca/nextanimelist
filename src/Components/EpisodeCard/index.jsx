"use client";
import { Star } from '@phosphor-icons/react'
import Link from 'next/link'
import React from 'react'
import { getAnimeEpisodes } from '@/libs/api-libs';

const EpisodeCard = async ({ id }) => {

  const apiEpisodes = await getAnimeEpisodes(id)

  return (
    <div>
      {apiEpisodes.data?.map((data => {
        const date = data.aired
        const aired = date.split('T')[0]
        return (
          <div className='w-full border-t py-4 border-primary'>
            <div className='mx-4 flex justify-between items-center'>
              
              <div className='flex gap-5 items-center'>
                <h1>{data.mal_id}</h1>
                <h1>-</h1>
                <div className='flex flex-col'>
                  <Link href={data.url} className='text-primary'>
                    <div className='flex flex-col'>
                      <h1>{data.title}</h1>
                      <h1>{data.title_japanese}</h1>
                    </div>
                  </Link>
                  <h1 className='text-gray-500 mt-1'>{aired}</h1>
                </div>
              </div>

              <div className='flex gap-2'>
                <Star size={24} className='text-primary'/>
                <h1>{data.score} / 5</h1>
              </div>

            </div>
          </div>
        )
      }))}
    </div>
  )
}

export default EpisodeCard
