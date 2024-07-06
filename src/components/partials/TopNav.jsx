import axios from '../../utils/axios'
import React, { useEffect, useState } from 'react'

const TopNav = () => {


  const [query, setquery] = useState('')
  const [searches, setsearches] = useState(null)

  const getSearches = async () => {
    const { data } = await axios.get(`/search/multi?query=${query?query:''}`)
    setsearches(data.results)
  }
  useEffect(() => { getSearches() }, [query])


  return (
    <div className='w-full text-[#417b78] relative px-20 py-6 flex items-center gap-2'>
      <i className="text-xl fa-solid fa-magnifying-glass"></i>
      <div className="relative flex items-center gap-4">
        <input onChange={(e) => setquery(e.target.value)} value={query} className='bg-transparent border-b py-1 px-1 outline-none w-96 border-[#406e77]' type="text" placeholder='Search anything..' />
        <button onClick={e => setquery('')} className=' px-2'>
          <i className="text-[#ffcc00] fa-solid fa-eraser"></i>
        </button>
        <div className="absolute top-full left-0 w-full h-max max-h-56 overflow-y-auto shadow-xl overflow-hidden bg-[#4c8a9b]">
          {searches && searches.length > 0 ? searches.map((s,i) => (

            <div key={i} className="w-full cursor-pointer group bg-gradient-to-r from-[#2a374b] via-[#416e7b] to-[#417b78] bg-[length:200%_200%] duration-300 hover:bg-right py-4 px-4 flex items-center gap-4 text-white">
              <div className="img w-12 h-10 bg-slate-800">
                <img className='w-full h-full object-cover' src={s.backdrop_path || s.profile_path ?`https://image.tmdb.org/t/p/original/${s.backdrop_path || s.profile_path}`:'https://cdn-icons-png.flaticon.com/512/15263/15263161.png'} alt="" />
              </div>
              <div className="">
                <h4 className='text-xs italic text-[#417b78] group-hover:text-[#2a374b]'>{s.media_type}</h4>
                <h2>{s.name || s.original_name || s.title}</h2>
              </div>
            </div>
          )):''}
        </div>
      </div>
    </div>
  )
}

export default TopNav