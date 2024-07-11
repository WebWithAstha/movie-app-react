import React from 'react'

const PersonLoader = () => {
    return (
        <div className='w-full h-screen overflow-hidden px-10'>
            <div className="py-10 flex items-center justify-between">
                <div className="w-40 h-8 bg-zinc-300/[.2]"></div>
                <div className="w-56 h-8 bg-zinc-300/[.2]"></div>
            </div>
            <div className="flex w-full mb-10 justify-center gap-10 items-center">
                <div className="h-96 w-64 bg-zinc-300/[.2]"></div>
                <div className="lf w-[28vw]">
                        <div className="w-full h-4 mb-4 bg-zinc-300/[.2]"></div>
                        <div className="w-full h-4 mb-4 bg-zinc-300/[.2]"></div>
                        <div className="w-full h-4 mb-4 bg-zinc-300/[.2]"></div>
                   
                    
                </div>

            </div>
            <div className="w-full mt-4 h-4 bg-zinc-300/[.2]"></div>
            <div className="w-full mt-2 h-4 bg-zinc-300/[.2]"></div>
            <div className="w-full mt-2 h-4 bg-zinc-300/[.2]"></div>
            <div className="w-1/3 mt-2 h-4 bg-zinc-300/[.2]"></div>

            <div className="w-1/6 h-4 mt-4 bg-zinc-300/[.2]"></div>
            <div className="flex w-full gap-4 mt-10">
                <div className="w-64 h-48 shrink-0 bg-zinc-400/[.2]"></div>
                <div className="w-64 h-48 shrink-0 bg-zinc-400/[.2]"></div>
                <div className="w-64 h-48 shrink-0 bg-zinc-400/[.2]"></div>
                <div className="w-64 h-48 shrink-0 bg-zinc-400/[.2]"></div>
                <div className="w-64 h-48 shrink-0 bg-zinc-400/[.2]"></div>
                <div className="w-64 h-48 shrink-0 bg-zinc-400/[.2]"></div>
            </div>

        </div>
    )
}

export default PersonLoader