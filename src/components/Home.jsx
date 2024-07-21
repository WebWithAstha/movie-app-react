import React, { useEffect, useState } from 'react'
import SideNav from './partials/SideNav'
import TopNav from './partials/TopNav'
import Header from './partials/Header'
import axios from '../utils/axios'
import HorizontalCards from './partials/HorizontalCards'
import DropDown from './partials/DropDown'
import HomeLoader from './Loaders/HomeLoader'
import { Link } from 'react-router-dom'

const Home = () => {

  const [poster, setposter] = useState(null)
  const [trendings, settrendings] = useState(null)
  const [category, setcategory] = useState('all')

  const getTrendingPoster = async () => {
    try {
      const { data } = await axios.get('/trending/all/day')
      const random = Math.floor(Math.random() * data.results.length)
      setposter(data.results[random])
    } catch (error) {
      console.log(error)
    }
  }

  const getTrending = async () => {
    try {
      const { data } = await axios.get(`/trending/${category}/day`)
      settrendings(data.results)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getTrending()
    !poster && getTrendingPoster()
  }, [category])

  return (trendings?
    <div className='w-full h-screen flex text-white'>
      <SideNav />
      <div className='flex-1 h-full px-8 bg-gradient-to-r overflow-x-hidden from-[#2a374b] via-[#406e77] to-[#417b78]'>
      <Link className='sm:hidden block mt-6' to="/">
       <div className="logo text-xl">
                <img className='w-8 hidden' src="https://cdn-icons-png.flaticon.com/512/6024/6024205.png" alt="" /> <span className='text-[#ffcc00]'>AL</span>DB
            </div>
      </Link>
        <TopNav />
        <Header poster={poster} />
        <div className='flex mt-8 px-1 justify-between items-center'>
        <h1 className=' text-lg uppercase'>Trending</h1>
        <DropDown title="Filter" options={["tv","movie","all"]} func={(e)=>setcategory(e.target.value)}/>
        </div>
        <HorizontalCards data={trendings} />
      </div>

    </div>
  :<HomeLoader/>)
}

export default Home