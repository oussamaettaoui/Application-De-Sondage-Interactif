import React, { useState } from 'react'
import InputBox from '../components/InputBox'

function CreateSurvey() {
  const [option,setOption] = useState('')
  const [options,setOptions] = useState([])
  const addOption = ()=>{
    const optionObj = {
      id : Date.now(),
      option : option.trim(),
      count : 0
    }
    options.push(optionObj)
    setOption('')
  }
  return (
    <div>
      <InputBox option={option} addOption={addOption} setOption={setOption} options={options}/>
    </div>
  )
}

export default CreateSurvey