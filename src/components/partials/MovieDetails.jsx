import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { asyncLoadMovie } from '../../store/actions/movieAction'
import { useParams } from 'react-router-dom'

import { resetMovie } from '../../store/actions/movieAction'
import MainLoader from './MainLoader'

const MovieDetails = () => {
  const dispatch = useDispatch()
  const { id } = useParams()
  const { info } = useSelector(store => store.movieReducer)
  console.log(info)
  useEffect(() => {
    dispatch(asyncLoadMovie(id))
  }, [])
  return (info ?
    <div className='p-10 w-full h-screen flex items-center justify-center'
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
      <div className="w-[70%] h-[90%] backdrop-blur-md text-[#6ac2bd] flex p-10">
        <img className="w-[40vw] object-cover object-top" src={`https://image.tmdb.org/t/p/original/${info.dets.poster_path}`} alt="" />
        <div className="content p-10">

          <h1 className="text-white text-5xl font-bold mb-4">{info.dets.title}</h1>
          <div className="flex gap-2 items-center">
            Genre 
            {
              info.dets.genres.map(g => <span key={g.id} className="text-sm text-white"> {"|  "} {g.name} </span>)
            }
          </div>
          <p className="text-lg w-[80%] text-white mt-2 leading-tight mb-2">{info.dets.overview}</p>
          <div className="btn">
            <button className='px-12 py-3 my-2 text-xl uppercase bg-gradient-to-r bg-[length:300%_300%] hover:bg-right duration-300 from-[#2e3a4d] via-[#4a7e88] to-[#35605d] w-max'>Watch</button>
          </div>
            {
              info.watchProviders &&
              info.watchProviders.flatrate ?
              <>
              
              <h1>Providers</h1>
          <div className="flex mt-4 gap-4">

              {info.watchProviders.flatrate.map(p =>
                <img key={p.id} className="w-16 cursor-pointer rounded-lg object-cover object-top" src={`https://image.tmdb.org/t/p/original/${p.logo_path}`} alt="" />
              )}
              </div>
              </>
              :''
            }
            {
              info.watchProviders &&
              info.watchProviders.buy ?
              <>
              
              <h1>Buy At</h1>
          <div className="flex mt-4 gap-4">

              {info.watchProviders.buy.map(p =>
                <img key={p.id} className="w-16 cursor-pointer rounded-lg object-cover object-top" src={`https://image.tmdb.org/t/p/original/${p.logo_path}`} alt="" />
              )}
              </div>
              </>
              :''
            }
          

        </div>

      </div>

      {/* <h1 className="text-8xl uppercase tracking-widest font-mono">Movie <br /> Details</h1> */}
      {/* <img src={`https://image.tmdb.org/t/p/original/${info.dets.poster_path}`} alt="" /> */}
    </div>
    : <MainLoader/>
  )


}

export default MovieDetails