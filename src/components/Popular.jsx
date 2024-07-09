import React, { useEffect, useState } from 'react'
import TopNav from './partials/TopNav'
import DropDown from './partials/DropDown'
import axios from '../utils/axios'
import VerticalCards from './partials/VerticalCards'
import InfiniteScroll from 'react-infinite-scroll-component'
import MainLoader from './partials/MainLoader'
import { Link } from 'react-router-dom'


const Popular = () => {

  const [category, setcategory] = useState('movie')
  const [popular, setpopular] = useState([])
  const [page, setpage] = useState(1)
  const [hasMore, sethasMore] = useState(true)


    const getPopular = async () => { 
        try {
          
          const { data } = await axios.get(`/${category}/popular?page=${page}`)
          if(data.results.length > 0){
            setpage(page+1)
            setpopular(prevState=>[...prevState,...data.results])
          }else{
            sethasMore(false)
          }
        } catch (error) {
          console.log(error)
        }
      }
      
      const refreshHandler = ()=>{
        if(popular.length===0){
          getPopular()
        }else{
          setpage(1)
          setpopular([])
          getPopular()
        }
      }
      
      
      
      useEffect(()=>{
        refreshHandler()
      },[category])


    return ( popular.length>0?
        <div className='w-full min-h-screen bg-gradient-to-r from-[#2a374b] via-[#406e77] to-[#417b78]'>
            <div className="px-8 py-4 flex items-center justify-between">
                <div className="flex items-center text-[#417b78]">
                  <Link to="/">
                <i className="fa-solid fa-arrow-left-long mr-6 text-2xl cursor-pointer hover:text-[#fc0] duration-300"></i>
                  </Link>
                <h1 className=' text-xl uppercase font-bold flex items-center gap-1 text-nowrap'>Popular <span className='text-xs italic opacity-75'>({category})</span></h1>
                    <TopNav />
                </div>
                <div className="flex items-center gap-4">

                <DropDown title="Category" options={["tv", "movie"]} func={(e)=>setcategory(e.target.value)} />
                </div>

            </div>
            <InfiniteScroll
            dataLength={popular.length}
            next={getPopular}
            hasMore={hasMore}
            loader={
              <div className="flex flex-row gap-2 w-full justify-center h-40 items-center bg-gradient-to-r from-[#2a374b] via-[#406e77] to-[#417b78]">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#2a374b] via-[#406e77] to-[#417b78] shadow-xl animate-bounce [animation-delay:.7s]"></div>
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#2a374b] via-[#406e77] to-[#417b78] shadow-xl animate-bounce [animation-delay:.3s]"></div>
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#2a374b] via-[#406e77] to-[#417b78] shadow-xl animate-bounce [animation-delay:.7s]"></div>
            </div>
            }
            >

                <VerticalCards data={popular} title={category} />
            </InfiniteScroll>

        </div>
    : <MainLoader/>

  )
}

export default Popular