"use client";
import React from 'react'
import { Star } from '@phosphor-icons/react'

const DetailCard = ({ status, season, year, rank, score, scored_by, episodes, genre }) => {

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    return (
        <div className='flex gap-2 text-white overflow-x-auto'>
            <div className='border-2 min-w-fit rounded-lg p-2 shadow text-lg flex items-center justify-center'>
                <p>{status ?? 'null'}</p>
            </div>
            <div className='border-2 min-w-fit rounded-lg p-2 shadow text-lg flex items-center justify-center'>
                <p>{capitalizeFirstLetter(season ?? '')} {year ?? 'null'}</p>
            </div>
            <div className='border-2 min-w-fit rounded-lg p-2 shadow text-lg flex items-center justify-center'>
                <p>Ranking #{rank ?? 'null'}</p>
            </div>
            <div className='border-2 min-w-fit rounded-lg p-2 shadow text-lg flex items-center justify-center gap-2'>
                <Star size={24} />
                <p>{score ?? 'null'} by {scored_by ?? 'null'} users</p>
            </div>
            <div className='border-2 min-w-fit rounded-lg p-2 shadow text-lg flex items-center justify-center'>
                <p>{episodes ?? 'null'} episodes</p>
            </div>
            {genre?.flatMap(item => {
                return (
                    <div className='border-2 min-w-fit rounded-lg p-2 shadow text-lg flex items-center justify-center'>
                        <p>{item.name}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default DetailCard
