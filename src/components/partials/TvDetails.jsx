import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, Outlet, useLocation, useNavigate, useParams } from 'react-router-dom'
import HorizontalCards from './HorizontalCards'
import { asyncLoadTv, resetTv } from '../../store/actions/tvAction'
import MovieLoader from '../Loaders/MovieLoader'

const TvDetails = () => {
  const dispatch = useDispatch()
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const { id } = useParams()
  const { info } = useSelector(store => store.tvReducer)
  useEffect(() => {
    dispatch(asyncLoadTv(id))
    return () => dispatch(resetTv())
  }, [id])
  return (info ?
    <div className=' relative w-full min-h-screen overflow-x-hidden'
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
        <Link onClick={e => navigate(-1)}>
          <i className="fa-solid fa-arrow-left-long mr-6 text-2xl  cursor-pointer hover:text-[#fc0] duration-300"></i>
        </Link>

        {
          info.extIds ?
            <div className="flex items-center gap-2 sm:gap-6">
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
            : ''
        }


      </nav>

      <div className="wrap backdrop-blur-md text-[#6ac2bd] px-8 sm:px-10">

        <div className="w-full  flex sm:flex-row flex-col">

        <div className="img min-w-96  h-[70vh] sm:h-[80vh]">
          <img className=" h-[70vh] sm:h-[80vh] object-cover object-top" src={`https://image.tmdb.org/t/p/original/${info.dets.poster_path}`} alt="" />
        </div>
          <div className="content sm:w-[70%] sm:px-10">

            <h1 className="text-white text-3xl mt-4 md:mt-0 md:text-5xl font-bold mb-4">{info.dets.title || info.dets.name}</h1>
            <div className="flex gap-2 items-center">
              Genre
              {
                info.dets.genres.map(g => <span key={g.id} className="text-sm text-white"> {"|  "} {g.name} </span>)
              }
            </div>
            <p className="md:text-lg w-[100%] text-white mt-2 leading-tight mb-2">{info.dets.overview}</p>
            {
              info.video ?
                <div className="btn">
                  <button onClick={e => navigate(`${pathname}/trailer/${id}`)} className='px-12 py-3 my-2 text-xl uppercase bg-gradient-to-r bg-[length:300%_300%] hover:bg-right duration-300 from-[#2e3a4d] via-[#4a7e88] to-[#35605d] w-max'>Watch</button>
                </div>
                : ''
            }
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
            <h1 className=' text-lg font-bold mb-2 uppercase'>Casts</h1>
            <div className="flex gap-6 py-4 overflow-x-auto pb-2">
              {
                info.cast ?
                  info.cast.map((t, i) => (
                    <Link key={i} to={`/person/details/${t.id}`}>


                      <div style={{
                        backgroundImage: `
    linear-gradient(to bottom,transparent,black),
    url(https://image.tmdb.org/t/p/original/${t.backdrop_path || t.profile_path || t.poster_path})
    `,
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        objectFit: "cover"
                      }}
                        className={`trend-box shrink-0 p-4 w-36 h-36 rounded cursor-pointer hover:-mt-4 duration-300 shadow flex flex-col justify-end bg-gradient-to-tr from-[#2e3a4d] via-[#4a7e88] to-[#35605d]`}>

                        <h1 className='text-xl font-semibold leading-tight'>{t.name || t.title}</h1>

                      </div>
                    </Link>

                  ))
                  : 'no cast data available'
              }

            </div>

          </div>

        </div>

        <h1 className='mt-6 text-2xl'>Seasons</h1>

        <HorizontalCards data={info.dets.seasons} title={"tv"} />

        <h1 className='mt-6 text-2xl'>Similar stuff</h1>

        <HorizontalCards data={info.similar} title={"tv"} />
      </div>

      <Outlet />

    </div>
    : <MovieLoader />
  )


}

export default TvDetails