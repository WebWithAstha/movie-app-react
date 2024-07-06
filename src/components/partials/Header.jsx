import axios from '../../utils/axios'
import React, { useEffect, useState } from 'react'

const Header = ({ poster }) => {

  // const [poster, setposter] = useState(null)



  return (poster ?
    <div style={{
      backgroundImage: `
        linear-gradient(to bottom,transparent,black),
        url(https://image.tmdb.org/t/p/original/${poster.backdrop_path || poster.profile_path || poster.poster_path})
        `,
      backgroundPosition: "center top",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
    }}
      className="trend-box w-full h-[50vh] p-10 flex flex-col justify-end bg-gradient-to-tr from-[#2e3a4d] via-[#4a7e88] to-[#35605d]">
      <h1 className='text-4xl font-bold w-[60%]'>{poster.name || poster.title}</h1>
      <div className="flex items-center my-2 gap-2">
        <h4 className='bg-[#2e3a4d]/[.8] px-3 py-1 uppercase'>{poster.original_language}</h4>
        <h4 className='bg-[#2e3a4d]/[.8] px-3 py-1'>{poster.release_date}</h4>

      </div>
      <p className='w-[60%]'>{poster.overview.slice(0, 220) + '...'}</p>
      <button className='px-8 py-2 my-2 uppercase bg-gradient-to-r bg-[length:300%_300%] hover:bg-right duration-300 from-[#2e3a4d] via-[#4a7e88] to-[#35605d] w-max'>Watch</button>


    </div>
    : <div className='trend-box animate-pulse w-full h-[50vh] p-10 flex flex-col justify-end bg-gradient-to-tr from-[#2e3a4d] via-[#355f68] to-[#274a48]'></div>

  )
}

export default Header