import React from 'react'

const MainLoader = () => {
  return (
    <div class="flex flex-row gap-2 w-full justify-center h-screen items-center bg-gradient-to-r from-[#2a374b] via-[#406e77] to-[#417b78]">
              <div class="w-8 h-8 rounded-full bg-gradient-to-r from-[#2a374b] via-[#406e77] to-[#417b78] shadow-xl animate-bounce [animation-delay:.7s]"></div>
              <div class="w-8 h-8 rounded-full bg-gradient-to-r from-[#2a374b] via-[#406e77] to-[#417b78] shadow-xl animate-bounce [animation-delay:.3s]"></div>
              <div class="w-8 h-8 rounded-full bg-gradient-to-r from-[#2a374b] via-[#406e77] to-[#417b78] shadow-xl animate-bounce [animation-delay:.7s]"></div>
            </div>
  )
}

export default MainLoader