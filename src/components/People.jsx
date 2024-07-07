import React, { useEffect, useState } from 'react'
import TopNav from './partials/TopNav'
import DropDown from './partials/DropDown'
import axios from '../utils/axios'
import VerticalCards from './partials/VerticalCards'
import InfiniteScroll from 'react-infinite-scroll-component'
import MainLoader from './partials/MainLoader'
import { Link } from 'react-router-dom'


const People = () => {

  const [people, setpeople] = useState([])
  const [page, setpage] = useState(1)
  const [hasMore, sethasMore] = useState(true)


    const getPeople = async () => { 
        try {
          
          const { data } = await axios.get(`/person/popular?page=${page}`)
          if(data.results.length > 0){
            setpage(page+1)
            setpeople(prevState=>[...prevState,...data.results])
          }else{
            sethasMore(false)
          }
        } catch (error) {
          console.log(error)
        }
      }
      
      
      const refreshHandler = ()=>{
        if(people.length===0){
          getPeople()
        }else{
          setpage(1)
          setpeople([])
          getPeople()
        }
      }
      
      
      
      useEffect(()=>{
        refreshHandler()
      },[])


    return ( people.length>0?
        <div className='w-full min-h-screen bg-gradient-to-r from-[#2a374b] via-[#406e77] to-[#417b78]'>
            <div className="px-8 py-4 flex items-center justify-between">
                <div className="flex items-center text-[#417b78]">
                  <Link to="/">
                <i className="fa-solid fa-arrow-left-long mr-6 text-2xl cursor-pointer hover:text-[#fc0] duration-300"></i>
                  </Link>
                <h1 className=' text-xl uppercase font-bold'>People</h1>
                    <TopNav />
                </div>
               

            </div>
            <InfiniteScroll
            dataLength={people.length}
            next={getPeople}
            hasMore={hasMore}
            loader={
              <div className="flex flex-row gap-2 w-full justify-center h-40 items-center bg-gradient-to-r from-[#2a374b] via-[#406e77] to-[#417b78]">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#2a374b] via-[#406e77] to-[#417b78] shadow-xl animate-bounce [animation-delay:.7s]"></div>
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#2a374b] via-[#406e77] to-[#417b78] shadow-xl animate-bounce [animation-delay:.3s]"></div>
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#2a374b] via-[#406e77] to-[#417b78] shadow-xl animate-bounce [animation-delay:.7s]"></div>
            </div>
            }
            >

                <VerticalCards data={people} />
            </InfiniteScroll>

        </div>
    : <MainLoader/>

  )
}

export default People