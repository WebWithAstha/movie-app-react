import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, Outlet, useLocation, useNavigate, useParams } from 'react-router-dom'

import MainLoader from './MainLoader'
import HorizontalCards from './HorizontalCards'
import { asyncLoadPerson, resetPerson } from '../../store/actions/personAction'
import PersonLoader from '../Loaders/PersonLoader'

const PersonDetails = () => {
  const dispatch = useDispatch()
  const { pathname } = useLocation()
  const navigate = useNavigate()

  const { id } = useParams()
  const { info } = useSelector(store => store.personReducer)
  useEffect(() => {
    dispatch(asyncLoadPerson(id))
    return () => dispatch(resetPerson())
  }, [id])


  console.log(info && info)

  return (info ?
    <>
      <nav className='w-full px-10 py-8 flex items-center justify-between gap-6 text-[#6ac2bd]'>
        <Link onClick={e => navigate(-1)}>
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
            : ''
        }


      </nav>
      <div className='px-10 relative w-full h-max  min-h-40 bg-emerald-800/[0]'>

        <div className="w-full items-center justify-center flex gap-10">
          <div className="img shadow-lg shrink-0 h-96 mb-10 rounded-lg overflow-hidden">
            <img className='h-full object-contain' src={`https://image.tmdb.org/t/p/original/${info.dets.profile_path}`} alt="" />
          </div>
          <div className="dets w-[40vw]">
            <div className="top">

              <h1 className='text-5xl font-semibold my-2 text-[#6ac2bd]'>{info.dets.name}</h1>
              <div className="flex justify-between items-center mt-4 py-2">
                <h4 className="text-lg text-[#2a374b] font-semibold uppercase">Famous for</h4>
                <span className="text-md font-semibold text-[#fc0] italic  ">{info.dets.known_for_department}</span>
              </div>
              <hr className='h-2 border-0 bg-[#417b78]' />
              <div className="flex justify-between items-center py-2">
                <h4 className="text-lg text-[#2a374b] font-semibold uppercase">Date of Birth</h4>
                <span className="text-md font-semibold text-[#fc0] italic  ">{info.dets.birthday}</span>
              </div>
              <hr className='h-2 border-0 bg-[#417b78]' />
              {info.dets.deathday ?
                <>
                  <div className="flex justify-between items-center py-2">
                    <h4 className="text-lg text-[#2a374b] font-semibold uppercase">Date of Death</h4>
                    <span className="text-md font-semibold text-[#fc0] italic  ">{info.dets.deathday}</span>
                  </div>
                  <hr className='h-2 border-0 bg-[#417b78]' />
                </>
                : ''
              }
              <div className="flex justify-between items-center py-2">
                <h4 className="text-lg text-[#2a374b] font-semibold uppercase">Birth Place</h4>
                <span className="text-md font-semibold text-[#fc0] italic  ">{info.dets.place_of_birth}</span>
              </div>
              <hr className='h-2 border-0 bg-[#417b78]' />

            </div>

          </div>
        </div>

        <h4 className=' text-[#6ac2bd]/[.5] font-semibold text-xl mb-2 uppercase'>Biography</h4>
        <p className='text-lg mb-4 '>{info.dets.biography.slice(0,340)} <span className='text-blue-600 font-normal'>. . . more</span> </p>

        <h4 className=' text-[#6ac2bd]/[.5] font-semibold text-xl mb-2 uppercase'>Know For</h4>
        <HorizontalCards data={info.allCredits} />


      </div>
    </>
    : <PersonLoader />
  )


}

export default PersonDetails