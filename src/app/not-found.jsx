"use client"

import { FileSearch } from '@phosphor-icons/react'
import React from 'react'

const notFound = () => {
  return (
    <div className='text-primary flex justify-center items-center h-screen text-3xl font-bold'>
        <>
            <FileSearch size={32}/>
            PAGE NOT FOUND
        </>
    </div>
  )
}

export default notFound
