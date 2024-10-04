"use client"

import { FileSearch } from '@phosphor-icons/react'
import { useRouter } from 'next/navigation'
import React from 'react'

const notFound = () => {

  const router = useRouter();
  return (
    <>
      <div className='flex flex-col justify-center items-center h-screen gap-2'>
        <div className="flex items-center text-primary text-3xl font-bold">
          <FileSearch size={32} />
          PAGE NOT FOUND
        </div>
      <button onClick={() => router.back()} className="p-2 bg-primary rounded">Back</button>
      </div>
    </>
  )
}

export default notFound
