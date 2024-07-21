import React from 'react'
import { Link } from 'react-router-dom'

const VerticalCards = ({ data, title }) => {

    return (
        <div className='w-full h-max grid sm:grid-cols-4 gap-8 bg-gradient-to-r from-[#2a374b] via-[#406e77] to-[#417b78] text-white px-8 overflow-y-hidden'>
            {data.map((t, i) => (
                <Link key={i} to={`/${t.media_type || title}/details/${t.id}`}>


                    <div key={i} style={{
                        backgroundImage: `
                    linear-gradient(to bottom,transparent,black),
                    url(https://image.tmdb.org/t/p/original/${t.backdrop_path || t.profile_path || t.poster_path})
                    `,
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                    }}
                        className="trend-box relative w-full h-72 cursor-pointer hover:-mt-4 duration-300 shadow-lg p-6 flex flex-col justify-end bg-gradient-to-tr from-[#2e3a4d] via-[#4a7e88] to-[#35605d]">
                        <h4 className='bg-[#2e3a4d]/[.8] w-max mb-1 text-xs px-3 py-1 uppercase'>{t.original_language}</h4>
                        {t.vote_average ?
                            <h5 className='absolute right-4 w-12 h-12 flex items-center justify-center rounded-full text-black text-sm shadow-lg font-bold bg-[#fc0]'>{(t.vote_average * 10).toFixed()}%</h5>
                            : ''}
                        <h1 className='text-xl font-bold w-[78%]'>{t.name || t.title}</h1>
                    </div>


                </Link>

            ))}


        </div>
    )
}

export default VerticalCards