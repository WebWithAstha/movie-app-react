import React from 'react'
import ReactPlayer from 'react-player'
import { useSelector } from 'react-redux'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const Trailer = () => {
    const {pathname}= useLocation()
    const category = pathname.includes('movie') ? 'movie' :'tv'
    const ytVideo = useSelector(store=>store[`${category}Reducer`].info.video)
    const navigate = useNavigate()
    return (ytVideo?
        <div className='w-full h-screen fixed top-0 left-0 bg-black/[.8] text-5xl flex items-center justify-center text-white'>
            <Link onClick={e=>navigate(-1)} className='absolute top-4 left-20'>
          <i className="fa-solid fa-xmark mr-6 text-4xl  cursor-pointer hover:text-[#fc0] duration-300"></i>
        </Link>
        <ReactPlayer
        height={600}
        width={1000}
        url={`https://www.youtube.com/watch?v=${ytVideo.key}`}
        />
        </div>
:"No trailer"    
)
}

export default Trailer