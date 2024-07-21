import { Link } from 'react-router-dom'
import axios from '../../utils/axios'
import React, { useEffect, useRef, useState } from 'react'

const TopNav = () => {


  const [query, setquery] = useState('')
  const [searches, setsearches] = useState(null)

  const getSearches = async () => {
    const { data } = await axios.get(`/search/multi?query=${query ? query : ''}`)
    setsearches(data.results)
  }
  useEffect(() => { getSearches() }, [query])


  const menuRef = useRef(null)

  const menubarToggle = (state) => {
    if(state){
      menuRef.current.style.right = '0%'
      menuRef.current.style.transform = 'translateX(0%)'
    }else{
      menuRef.current.style.transform = 'translateX(100%)'

    }


  }


  return (
    <div className='w-full text-[#417b78] relative sm:px-20 py-6 flex justify-between items-center gap-2'>
      
      <div className="flex items-center gap-2">
        <i className="text-xl fa-solid fa-magnifying-glass"></i>
        <div className="relative flex items-center gap-4">
          <input onChange={(e) => setquery(e.target.value)} value={query} className='bg-transparent border-b py-1 px-1 outline-none w-28 sm:w-96 border-[#406e77]' type="text" placeholder='Search anything..' />
          <button onClick={e => setquery('')} className=' px-2'>
            <i className="text-[#ffcc00] fa-solid fa-eraser"></i>
          </button>
          <div className="absolute z-[99] top-full left-0 w-full h-max max-h-56 overflow-y-auto shadow-xl overflow-hidden bg-[#4c8a9b]">
            {searches && searches.length > 0 ? searches.map((s, i) => (
              <Link key={i} to={`/${s.media_type}/details/${s.id}`}>


                <div key={i} className="w-full cursor-pointer group bg-gradient-to-r from-[#2a374b] via-[#416e7b] to-[#417b78] bg-[length:200%_200%] duration-300 hover:bg-right py-4 px-4 flex items-center gap-4 text-white">
                  <div className="img w-12 h-10 bg-slate-800">
                    <img className='w-full h-full object-cover' src={s.backdrop_path || s.profile_path ? `https://image.tmdb.org/t/p/original/${s.backdrop_path || s.profile_path}` : 'https://cdn-icons-png.flaticon.com/512/15263/15263161.png'} alt="" />
                  </div>
                  <div className="">
                    <h4 className='text-xs italic text-[#417b78] group-hover:text-[#2a374b]'>{s.media_type}</h4>
                    <h2>{s.name || s.original_name || s.title}</h2>
                  </div>
                </div>
              </Link>
            )) : ''}
          </div>
        </div>
      </div>
      <i onClick={e=>menubarToggle(true)} className="fa-solid fa-bars text-[#fc0] sm:hidden block"></i>
      <div ref={menuRef} id="menubar" className='w-[80%] transition-all duration-150 translate-x-full fixed bg-[#417b78] z-[9999] pt-10 text-[#2b3a4d] h-full right-0 top-0'>
      <i onClick={e=>menubarToggle(false)} className="fa-solid fa-xmark text-[#fc0] w-max ml-auto text-2xl absolute right-8 top-4"></i>
      <div className="">
                <h1 className='px-10 p-4 uppercase font-medium'>New Feeds</h1>
                <Link to="/trending">
                <div className="flex items-center gap-4 w-full px-10 cursor-pointer p-4 duration-300 hover:bg-[#406e77] hover:text-[#2a374b]">
                    <i className="text-xl fa-solid fa-fire"></i>
                    <h4 className='text-md uppercase'>Trending</h4>
                </div>
                </Link>
                <Link to="/popular">
                <div className="flex items-center gap-4 w-full px-10 cursor-pointer p-4 duration-300 hover:bg-[#406e77] hover:text-[#2a374b]">
                    <i className="text-xl fa-solid fa-wand-magic-sparkles"></i>
                    <h4 className='text-md uppercase'>Popular</h4>
                </div>
                </Link>
                <Link to="/movies">
                <div className="flex items-center gap-4 w-full px-10 cursor-pointer p-4 duration-300 hover:bg-[#406e77] hover:text-[#2a374b]">
                    <i className="text-xl fa-solid fa-film"></i>
                    <h4 className='text-md uppercase'>Movies</h4>
                </div>
                </Link>
                <Link to="tvshows">
                <div className="flex items-center gap-4 w-full px-10 cursor-pointer p-4 duration-300 hover:bg-[#406e77] hover:text-[#2a374b]">
                    <i className="text-xl fa-solid fa-tv"></i>
                    <h4 className='text-md uppercase'>Tv Shows</h4>
                </div>
                </Link>
                <Link to="/people">
                <div className="flex items-center gap-4 w-full px-10 cursor-pointer p-4 duration-300 hover:bg-[#406e77] hover:text-[#2a374b]">
                    <i className="text-xl fa-solid fa-users"></i>
                    <h4 className='text-md uppercase'>People</h4>
                </div>
                </Link>
            </div>
            <div className="mt-2">
                <h1 className='px-10 p-4 uppercase font-medium'>Our Info</h1>
                <div className="flex items-center gap-4 w-full px-10 cursor-pointer p-4 duration-300 hover:bg-[#406e77] hover:text-[#2a374b]">
                <i className="fa-solid fa-phone"></i>
                <h4 className='text-md uppercase'>About Us</h4>
                </div>
                <div className="flex items-center gap-4 w-full px-10 cursor-pointer p-4 duration-300 hover:bg-[#406e77] hover:text-[#2a374b]">
                <i className="fa-solid fa-circle-info"></i>
                    <h4 className='text-md uppercase'>Contact</h4>
                </div>

            </div>
      </div>
    </div>
  )
}

export default TopNav