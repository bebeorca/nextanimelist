"use client"
import { XCircle } from '@phosphor-icons/react'
import React, { useState } from 'react'
import YouTube from 'react-youtube'

const VideoPlayer = ({ videoId }) => {

    const [isOpen, setIsOpen] = useState(true)

    const handleTrailerVideo = () => {
        setIsOpen((prevState) => !prevState)
    }

    const options = {
        width: "300",
        height: "250"
    }

    const Player = () => {
        return (
            <div className='fixed bottom-2 right-2'>
                <button
                    onClick={handleTrailerVideo}
                    className='text-white float-right p-2'>
                    <XCircle size={32} />
                </button>
                <YouTube
                    videoId={videoId}
                    onReady={(event) => event.target.playVideo()}
                    opts={options}
                />
            </div>
        )
    }

    const ButtonPlayer = () => {
        return (
            <button
                onClick={handleTrailerVideo}
                className='fixed bottom-5 right-5 w-32 bg-primary text-dark text-xl'>
                Tonton trailer
            </button>
        )
    }

    return isOpen ? <Player /> : <ButtonPlayer />
}

export default VideoPlayer
