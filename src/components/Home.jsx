import React from 'react'
import SideNav from './partials/SideNav'
import TopNav from './partials/TopNav'

const Home = () => {
  return (
    <div className='w-full h-screen bg-slate-800 flex text-white'>
      <SideNav/>
      <div className='flex-1 h-full px-8 bg-gradient-to-r from-[#2a374b] via-[#406e77] to-[#417b78]'>
        <TopNav/>
        <div className="trend-box w-full h-[50vh] bg-gradient-to-tr from-[#2e3a4d] via-[#4a7e88] to-[#35605d]"></div>
      </div>

    </div>
  )
}

export default Home