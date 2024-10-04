import Header from '@/Components/Dashboard/Header'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Page = () => {
    return (
        <section className="mt-4 px-4">
            <Header title={"Koleksiku"}/>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <Link href="/" className="border-2 border-primary relative">
                    <Image src="" alt="" width={350} height={350} className="w-full" />
                    <div className="w-full flex justify-center items-center bg-primary h-16 absolute bottom-0">
                        <h5 className="text-xl text-center">Judul anime</h5>
                    </div>
                </Link>
                <Link href="/" className="border-2 border-primary relative">
                    <Image src="" alt="" width={350} height={350} className="w-full" />
                    <div className="w-full flex justify-center items-center bg-primary h-16 absolute bottom-0">
                        <h5 className="text-xl text-center">Judul anime</h5>
                    </div>
                </Link>
                <Link href="/" className="border-2 border-primary relative">
                    <Image src="" alt="" width={350} height={350} className="w-full" />
                    <div className="w-full flex justify-center items-center bg-primary h-16 absolute bottom-0">
                        <h5 className="text-xl text-center">Judul anime</h5>
                    </div>
                </Link>
                <Link href="/" className="border-2 border-primary relative">
                    <Image src="" alt="" width={350} height={350} className="w-full" />
                    <div className="w-full flex justify-center items-center bg-primary h-16 absolute bottom-0">
                        <h5 className="text-xl text-center">Judul anime</h5>
                    </div>
                </Link>
                <Link href="/" className="border-2 border-primary relative">
                    <Image src="" alt="" width={350} height={350} className="w-full" />
                    <div className="w-full flex justify-center items-center bg-primary h-16 absolute bottom-0">
                        <h5 className="text-xl text-center">Judul anime</h5>
                    </div>
                </Link>
            </div>
        </section>
    )
}

export default Page
