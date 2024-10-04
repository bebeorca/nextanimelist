"use client";
import React from 'react';
import { BookmarkSimple } from '@phosphor-icons/react';

const HeaderTitle = ({ mal_id, user_email, title }) => {

    const handleCollection = async (event) => {
        event.preventDefault();

        const data = { mal_id, user_email };

        const response = await fetch("/api/v1/collection", {
            method: "POST",
            body: JSON.stringify(data)
        })

        const collection = await response.json()
        console.log("TES", collection)
    }

    return (
        <div className='pt-4 flex justify-between items-center'>
            <h3 className='text-primary font-bold text-4xl'>{title}</h3>
            <button onClick={handleCollection}>
                <BookmarkSimple size={32} />
            </button>
        </div>
    )
}

export default HeaderTitle
