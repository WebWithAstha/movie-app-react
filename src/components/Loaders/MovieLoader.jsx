import React from 'react'

const MovieLoader = () => {
    return (
        <div className='animate-pulse w-full h-screen overflow-hidden'>
            <div className="py-10 px-10 flex items-center justify-between">
                <div className="w-40 h-8 bg-zinc-300/[.2]"></div>
                <div className="w-56 h-8 bg-zinc-300/[.2]"></div>
            </div>
            <div className="flex w-full px-10 gap-10">
                <div className="bg-zinc-300/[.2] h-[80vh] w-[25vw]"></div>
                <div className="lf flex-1 pr-40">
                    <div className="w-1/2 h-8 bg-zinc-300/[.2]"></div>
                    <div className="w-1/5 mt-4 h-4 bg-zinc-300/[.2]"></div>
                    <div className="w-full mt-4 h-4 bg-zinc-300/[.2]"></div>
                    <div className="w-full mt-2 h-4 bg-zinc-300/[.2]"></div>
                    <div className="w-full mt-2 h-4 bg-zinc-300/[.2]"></div>
                    <div className="w-1/3 mt-2 h-4 bg-zinc-300/[.2]"></div>
                    <div className="w-1/6 mt-2 h-12 bg-zinc-300/[.2]"></div>
                    <div className="w-1/6 h-4 mt-4 bg-zinc-300/[.2]"></div>
                    <div className="flex mt-3 gap-4">
                        <div className="w-16 h-16 bg-zinc-300/[.2]"></div>
                        <div className="w-16 h-16 bg-zinc-300/[.2]"></div>
                        <div className="w-16 h-16 bg-zinc-300/[.2]"></div>
                    </div>
                    <div className="w-1/6 h-4 mt-4 bg-zinc-300/[.2]"></div>
                    <div className="flex mt-3 gap-4">
                        <div className="w-32 h-32 bg-zinc-300/[.2]"></div>
                        <div className="w-32 h-32 bg-zinc-300/[.2]"></div>
                        <div className="w-32 h-32 bg-zinc-300/[.2]"></div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default MovieLoader