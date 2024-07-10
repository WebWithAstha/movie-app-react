import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { asyncLoadMovie } from '../../store/actions/movieAction'
import { Link, Outlet, useLocation, useNavigate, useParams } from 'react-router-dom'

import { resetMovie } from '../../store/actions/movieAction'
import MainLoader from './MainLoader'
import HorizontalCards from './HorizontalCards'

const MovieDetails = () => {
  const dispatch = useDispatch()
  const {pathname} = useLocation()
  const navigate = useNavigate()
  const { id } = useParams()
  const { info } = useSelector(store => store.movieReducer)
  useEffect(() => {
    dispatch(asyncLoadMovie(id))
    return () => dispatch(resetMovie())
  }, [])
  return (info ?
    <div className='px-10 relative w-full min-h-screen'
      style={{
        backgroundImage: `
        linear-gradient(to bottom,black,transparent,black),
        url(https://image.tmdb.org/t/p/original/${info.dets.backdrop_path || info.dets.profile_path || info.dets.poster_path})
        `,
        backgroundPosition: "center top",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}

    >

      <nav className='w-full px-10 py-8 flex items-center justify-between gap-6 text-[#6ac2bd]'>
        <Link onClick={e=>navigate(-1)}>
          <i className="fa-solid fa-arrow-left-long mr-6 text-2xl  cursor-pointer hover:text-[#fc0] duration-300"></i>
        </Link>

        {
          info.extIds ?
        <div className="flex items-center gap-6">
          <a target='_blank' href={`https://www.wikidata.org/wiki/${info.extIds.wikidata_id}?language=en-US`}>
            <i className="fa-brands fa-wikipedia-w mr-6 text-xl cursor-pointer hover:text-[#fc0] duration-300"></i>
          </a> 
          <a target='_blank' href={`https://www.imdb.com/title/${info.extIds.imdb_id}`}>
            I<i className="fa-brands fa-mdb mr-6 text-xl cursor-pointer hover:text-[#fc0] duration-300"></i>
          </a> 
          <a target='_blank' href={`https://www.instagram.com/${info.extIds.instagram_id}`}>
            <i className="fa-brands fa-square-instagram mr-6 text-xl cursor-pointer hover:text-[#fc0] duration-300"></i>
          </a> 
          <a target='_blank' href={`https://x.com/${info.extIds.twitter_id}`}>
            <i className="fa-brands fa-twitter mr-6 text-xl cursor-pointer hover:text-[#fc0] duration-300"></i>
          </a> 
          <a target='_blank' href={`https://www.facebook.com/${info.extIds.twitter_id}`}>
            <i className="fa-brands fa-facebook-f mr-6 text-xl cursor-pointer hover:text-[#fc0] duration-300"></i>
          </a> 
          </div>
          :''
        }
        
      
      </nav>

      <div className="wrap backdrop-blur-md text-[#6ac2bd] px-10">

        <div className="w-full flex">

          <img className="h-[90vh] object-cover object-top" src={`https://image.tmdb.org/t/p/original/${info.dets.poster_path}`} alt="" />
          <div className="content w-[60%] p-10">

            <h1 className="text-white text-5xl font-bold mb-4">{info.dets.title}</h1>
            <div className="flex gap-2 items-center">
              Genre
              {
                info.dets.genres.map(g => <span key={g.id} className="text-sm text-white"> {"|  "} {g.name} </span>)
              }
            </div>
            <p className="text-lg w-[80%] text-white mt-2 leading-tight mb-2">{info.dets.overview}</p>
            <div className="btn">
              <button onClick={e=>navigate(`${pathname}/trailer/${"12"}`)} className='px-12 py-3 my-2 text-xl uppercase bg-gradient-to-r bg-[length:300%_300%] hover:bg-right duration-300 from-[#2e3a4d] via-[#4a7e88] to-[#35605d] w-max'>Watch</button>
            </div>
            <div className="flex gap-6">

              {
                info.watchProviders &&
                  info.watchProviders.flatrate ?
                  <div className=''>


                    <h1 className='mb-2 text-lg font-bold uppercase'>Providers</h1>
                    <div className="flex gap-4 flex-wrap mt-2">

                      {info.watchProviders.flatrate.map(p =>
                        <img key={p.id} className="w-16 cursor-pointer rounded-lg object-cover object-top" src={`https://image.tmdb.org/t/p/original/${p.logo_path}`} alt="" />
                      )}
                    </div>
                  </div>
                  : ''
              }
              {
                info.watchProviders &&
                  info.watchProviders.buy ?
                  <div>
                    <h1 className='mb-2 text-lg font-bold uppercase'>Buy At</h1>
                    <div className="flex gap-4 flex-wrap mt-2">

                      {info.watchProviders.buy.map((p, i) =>
                        <img key={i} className="w-16 cursor-pointer rounded-lg object-cover object-top" src={`https://image.tmdb.org/t/p/original/${p.logo_path}`} alt="" />
                      )}
                    </div>
                  </div>
                  : ''
              }
            </div>
            <div className="mt-6"></div>
            <h1 className=' text-lg font-bold uppercase'>Casts</h1>

            <HorizontalCards data={info.cast} rounded={true} imgWid={10} imgHei={10} />


          </div>

        </div>
        <h1 className='mt-6 text-2xl'>Recommended movies</h1>

        <HorizontalCards data={info.similar} rounded={false} imgWid={14} imgHei={10} />
      </div>

      <Outlet/>

    </div>
    : <MainLoader />
  )


}

export default MovieDetails