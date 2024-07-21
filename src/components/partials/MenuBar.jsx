import React, { useRef } from 'react'
import { Link } from 'react-router-dom'



const MenuBar = () => {

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
        <div className="flex justify-between  pt-4 items-center">
      
      <Link className='sm:hidden block' to="/">
       <div className="logo text-xl">
                <img className='w-8 hidden' src="https://cdn-icons-png.flaticon.com/512/6024/6024205.png" alt="" /> <span className='text-[#ffcc00]'>AL</span>DB
            </div>
      </Link>
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

export default MenuBar