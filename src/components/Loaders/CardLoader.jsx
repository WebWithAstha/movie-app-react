import React from 'react'

const CardLoader = () => {
  return (
    <div className='w-full h-screen animate-pulse overflow-hidden'>
        <div className="py-10 px-10 flex items-center justify-between">
          <div className="w-40 h-8 bg-zinc-300/[.2]"></div>
          <div className="w-56 h-8 bg-zinc-300/[.2]"></div>

        </div>
        <div className='w-full h-max grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8  px-8 overflow-y-hidden'>

          <div className="h-72 shrink-0 bg-zinc-400/[.2]"></div>
          <div className="h-72 shrink-0 bg-zinc-400/[.2]"></div>
          <div className="h-72 shrink-0 bg-zinc-400/[.2]"></div>
          <div className="h-72 shrink-0 bg-zinc-400/[.2]"></div>
          <div className="h-72 shrink-0 bg-zinc-400/[.2]"></div>
          <div className="h-72 shrink-0 bg-zinc-400/[.2]"></div>
          <div className="h-72 shrink-0 bg-zinc-400/[.2]"></div>
          <div className="h-72 shrink-0 bg-zinc-400/[.2]"></div>
          <div className="h-72 shrink-0 bg-zinc-400/[.2]"></div>
          <div className="h-72 shrink-0 bg-zinc-400/[.2]"></div>
          <div className="h-72 shrink-0 bg-zinc-400/[.2]"></div>
          <div className="h-72 shrink-0 bg-zinc-400/[.2]"></div>
        </div>

    </div>
  )
}

export default CardLoader