import React, { useState } from 'react'
import { IoIosCloseCircle } from "react-icons/io";


function InputBox(props) {
    const {option,options,setOption,addOption,removeOption} = props
    const [isEnabled,setIsEnabled] = useState(false)
  return (
    <div className='w-full pt-3 h-screen bg-black flex gap-5 items-center flex-col'>
        <div className='card h-max  FlexBetween px-4 py-2'>
            <input className='bg-transparent outline-none px-2 py-1 text-sm flex-1 caret-green-600' type="text" placeholder='Add Option' value={option} onChange={e=>setOption(e.target.value.trimStart())}/>
            <button className='text-sm text-green-600 disabled:text-gray-300 disabled:cursor-not-allowed' onClick={addOption}>+ Add</button>
        </div>
        <div className='card flex flex-wrap gap-3 w-96 h-max py-3 px-5   text-sm'>
            {options.map((option,i)=>{
                return (
                    <div key={i} className='option'>
                        {option.option}
                        <IoIosCloseCircle onClick={()=>removeOption(option.id)} className='closeIcon hover:cursor-pointer hover:text-green-700' />
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default InputBox