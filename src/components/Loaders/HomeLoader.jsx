import React from 'react'

const HomeLoader = () => {
  return (
    <div className='w-full h-screen flex text-white'>
      <div className='w-72 bg-[#2a374b] py-20 px-6 overflow-hidden h-full border-r text-[#417b78] border-[#406e77]'>
        <div className="h-4 bg-zinc-300/[.2] w-20 mb-4"></div>

        <div className="animate-pulse w-full py-6 mb-2">
          <div className="w-full h-4 bg-zinc-300/[.2]"></div>
        </div>
        <div className="animate-pulse w-full py-6 mb-2">
          <div className="w-full h-4 bg-zinc-300/[.2]"></div>
        </div>
        <div className="animate-pulse w-full py-6 mb-2">
          <div className="w-full h-4 bg-zinc-300/[.2]"></div>
        </div>
        <div className="animate-pulse w-full py-6 mb-2">
          <div className="w-full h-4 bg-zinc-300/[.2]"></div>
        </div>
        <div className="h-4 bg-zinc-300/[.2] w-20 mb-4"></div>
        <div className="animate-pulse w-full py-6 mb-4">
          <div className="w-full h-4 bg-zinc-300/[.2]"></div>
        </div>
        <div className="animate-pulse w-full py-6 mb-4">
          <div className="w-full h-4 bg-zinc-300/[.2]"></div>
        </div>

      </div>
      <div className='flex-1 h-full px-8 bg-gradient-to-r overflow-x-hidden from-[#2a374b] via-[#406e77] to-[#417b78]'>
        <div className="py-10"></div>
        <div className="animate-pulse w-full h-[50vh] bg-zinc-400/[.2]"></div>
        <div className="flex w-full gap-4 mt-10">
          <div className="w-64 h-48 shrink-0 bg-zinc-400/[.2]"></div>
          <div className="w-64 h-48 shrink-0 bg-zinc-400/[.2]"></div>
          <div className="w-64 h-48 shrink-0 bg-zinc-400/[.2]"></div>
          <div className="w-64 h-48 shrink-0 bg-zinc-400/[.2]"></div>
          <div className="w-64 h-48 shrink-0 bg-zinc-400/[.2]"></div>
        </div>
      </div>

    </div>
  )
}

export default HomeLoader