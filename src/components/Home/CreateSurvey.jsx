import React, { useState } from 'react'
import InputBox from '../components/InputBox'

function CreateSurvey() {
  const [option,setOption] = useState('')
  const [options,setOptions] = useState([])
  const addOption = ()=>{
    const option = {
      id : Date.now(),
      option : option,
      count : 0
    }
    options.push(option)
    setOption('')
  }
  return (
    <div>
      <InputBox option={option} setOption={setOption} options={options}/>
    </div>
  )
}

export default CreateSurvey