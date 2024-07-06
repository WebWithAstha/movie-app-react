import React from 'react'

const TopNav = () => {
  return (
    <div className='w-full text-[#417b78] '>
        <div className="flex items-center px-20 py-6 gap-4">
        <i class="text-xl fa-solid fa-magnifying-glass"></i>
            <input className='bg-transparent border-b py-1 px-1 outline-none w-96 border-[#406e77]' type="text" placeholder='Search anything..' />
            <i class="text-[#ffcc00] fa-solid fa-eraser"></i>
        </div>
    </div>
  )
}

export default TopNav