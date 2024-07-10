import React from 'react'

const HorizontalCards = ({ data, imgWid,imgHei ,rounded}) => {
    console.log(imgWid,imgHei)
    return (data ?
            <div className="flex gap-4 items-center overflow-x-auto py-4 cursor-pointer">
                {data.map((t, i) => (

                    <div key={i} style={{
                        backgroundImage: `
        linear-gradient(to bottom,transparent,black),
        url(https://image.tmdb.org/t/p/original/${t.backdrop_path || t.profile_path || t.poster_path})
        `,
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        width:`${imgWid}rem`,
                        height:`${imgHei}rem`,
                        objectFit:"cover"
                    }}
                        className={`trend-box max-h-48 max-w-64 shrink-0 p-4 ${rounded?'rounded-lg':''} cursor-pointer hover:-mt-4 duration-300 shadow flex flex-col justify-end bg-gradient-to-tr from-[#2e3a4d] via-[#4a7e88] to-[#35605d]`}>

                        <h1 className='text-xl font-semibold leading-tight'>{t.name || t.title}</h1>
                        
                        </div>
                ))}
                    </div>
            : "no data")
}

            export default HorizontalCards