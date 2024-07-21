import React, { useEffect, useState } from 'react'
import TopNav from './partials/TopNav'
import DropDown from './partials/DropDown'
import axios from '../utils/axios'
import VerticalCards from './partials/VerticalCards'
import InfiniteScroll from 'react-infinite-scroll-component'
import { Link } from 'react-router-dom'
import CardLoader from './Loaders/CardLoader'


const Trending = () => {

  const [category, setcategory] = useState('all')
  const [duration, setduration] = useState('day')
  const [trendings, settrendings] = useState([])
  const [page, setpage] = useState(1)
  const [hasMore, sethasMore] = useState(true)


  const getTrending = async () => {
    try {

      const { data } = await axios.get(`/trending/${category}/${duration}?page=${page}`)
      if (data.results.length > 0) {
        setpage(page + 1)
        settrendings(prevState => [...prevState, ...data.results])
      } else {
        sethasMore(false)
      }
    } catch (error) {
      console.log(error)
    }
  }


  const refreshHandler = () => {
    if (trendings.length === 0) {
      getTrending()
    } else {
      setpage(1)
      settrendings([])
      getTrending()
    }
  }



  useEffect(() => {
    refreshHandler()
  }, [category, duration])


  return (trendings.length > 0 ?
    <div className='w-full min-h-screen bg-gradient-to-r from-[#2a374b] via-[#406e77] to-[#417b78]'>
      <div className="px-8 py-4 flex sm:flex-row flex-col sm:items-center justify-between">
        <div className="flex items-center text-[#417b78]">
          <Link to="/">
            <i className="fa-solid fa-arrow-left-long mr-2 sm:mr-6 sm:text-2xl cursor-pointer hover:text-[#fc0] duration-300"></i>
          </Link>
          <h1 className=' sm:text-xl text-sm uppercase font-bold flex sm:flex-row flex-col sm:items-center sm:gap-1 text-nowrap'>Trending  <span className='text-xs italic opacity-75'>({category})</span></h1>
          <TopNav />
        </div>
        <div className="flex items-center gap-4">

          <DropDown title="Category" options={["tv", "movie", "all"]} func={(e) => setcategory(e.target.value)} />
          <DropDown title="Duration" options={["day", "week"]} func={(e) => setduration(e.target.value)} />
        </div>

      </div>
      <InfiniteScroll
        dataLength={trendings.length}
        next={getTrending}
        hasMore={hasMore}
        loader={
          <div className="flex flex-row gap-2 w-full justify-center h-40 items-center bg-gradient-to-r from-[#2a374b] via-[#406e77] to-[#417b78]">
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#2a374b] via-[#406e77] to-[#417b78] shadow-xl animate-bounce [animation-delay:.7s]"></div>
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#2a374b] via-[#406e77] to-[#417b78] shadow-xl animate-bounce [animation-delay:.3s]"></div>
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#2a374b] via-[#406e77] to-[#417b78] shadow-xl animate-bounce [animation-delay:.7s]"></div>
          </div>
        }
      >

        <VerticalCards data={trendings} title={category} />
      </InfiniteScroll>

    </div>
    : <CardLoader/>

  )
}

export default Trending