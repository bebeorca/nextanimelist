import React, { useState } from 'react'

const Synopsis = ({ synopsis }) => {

    const [isShow, setIsShow] = useState(true)
    const handleSynopsis = () => {
        setIsShow((prevState) => !prevState)
    }

    const SynopsisComp = () => {
        return (
            <div>
                <button onClick={handleSynopsis} className="w-fit mt-2 px-4 py-2 bg-accent text-white rounded md:hidden">Hide Synopsis</button>
                <p id="moreText" className='text-lg text-justify text-white text-ellipsis'>{synopsis}</p>
            </div>
        )
    }

    const ButtonAct = () => {
        return (
            <button 
            className='mt-2 px-4 py-2 bg-accent text-white rounded w-fit' 
            onClick={handleSynopsis}>Show Synopsis</button>
        )

    }

    return isShow ? <SynopsisComp /> : <ButtonAct />
}

export default Synopsis
