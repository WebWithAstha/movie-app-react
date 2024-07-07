import React from 'react'

const VerticalCards = ({ data }) => {
    return (
        <div className='w-full h-max grid grid-cols-4 gap-8 bg-gradient-to-r from-[#2a374b] via-[#406e77] to-[#417b78] text-white px-8 overflow-y-hidden'>
            {data.map((t, i) => (

                <div key={i} style={{
                    backgroundImage: `
      linear-gradient(to bottom,transparent,black),
      url(https://image.tmdb.org/t/p/original/${t.backdrop_path || t.profile_path || t.poster_path})
      `,
                    backgroundPosition: "center top",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                }}
                    className="trend-box w-full h-72 cursor-pointer hover:-mt-4 duration-300 shadow-lg p-6 flex flex-col justify-end bg-gradient-to-tr from-[#2e3a4d] via-[#4a7e88] to-[#35605d]">
                    <h4 className='bg-[#2e3a4d]/[.8] w-max mb-1 text-xs px-3 py-1 uppercase'>{t.original_language}</h4>
                    <h1 className='text-xl font-bold w-full'>{t.name || t.title}</h1>
                </div>



            ))}


        </div>
    )
}

export default VerticalCards