import React from 'react'
import { Link } from 'react-router-dom'

const SideNav = () => {
    return (
        <div className='w-72 sm:block hidden bg-[#2a374b] overflow-hidden h-full border-r text-[#417b78] border-[#406e77]'>
            <div className="logo w-full px-10 py-10 text-2xl">
                <img className='inline-block w-8 -mt-2' src="https://cdn-icons-png.flaticon.com/512/6024/6024205.png" alt="" /> <span className='text-[#ffcc00]'>AL</span>DB
            </div>
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
    )
}

export default SideNav