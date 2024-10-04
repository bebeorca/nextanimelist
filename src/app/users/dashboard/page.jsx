import { authUserSession } from '@/libs/auth-libs'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Page = async () => {
    const user = await authUserSession()

    return (
        <div className='text-white flex flex-col justify-center items-center gap-8 mt-8'>
            <Image src={user.image} width={230} height={0} alt={user.name}
                className='rounded-full'
            />
            <div className='flex flex-col items-center'>
                <h1 className='text-2xl'>{user.name}</h1>
                <h1 className=''>{user.email}</h1>
                <div className="py-8 gap-2 flex flex-wrap">
                    <Link href="/users/dashboard/collection" className="bg-secondary p-2 rounded">Koleksiku</Link>
                    <Link href="/users/dashboard/comments" className="bg-secondary p-2 rounded">Komentarku</Link>
                </div>
            </div>
            <Link href="/api/auth/signout" className="fixed bottom-8 right-8 p-2 bg-primary text-dark rounded min-w-fit">Sign Out</Link>
        </div>
    )
}

export default Page
