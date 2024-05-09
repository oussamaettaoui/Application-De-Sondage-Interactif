import React from 'react'

function InputBox(props) {
    const {option,setOption,addOption} = props
  return (
    <div className='w-full h-screen bg-[#eef1f8] grid place-items-center'>
        <div className='card FlexBetween'>
            <input type="text" placeholder='Add Option' value={option} onChange={e=>setOption(e.target.value.trimStart())}/>
            <button className='' onClick={addOption}>+ Add</button>
        </div>
    </div>
  )
}

export default InputBox