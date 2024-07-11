import React from 'react'

const DropDown = ({title,options,func}) => {
  return (
    <select onChange={func} className='bg-transparent uppercase outline-none border-2 text-[#fc0] border-[#fc0]/[.3] px-4 py-1 cursor-pointer' name="" id="">
        <option value="0">{title}</option>
        {options.map((o,i)=>(
            <option className='bg-transparent uppercase' key={i} value={o}>{o}</option>
        ))}
    </select>
  )
}

export default DropDown