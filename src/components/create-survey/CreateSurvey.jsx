import React, { useRef, useState } from 'react'
import InputBox from './InputBox'
import QuestionBox from './QuestionBox';
import AddQuestion from './AddQuestion';

function CreateSurvey() {
  const [questionBox, setQuestionBox] = useState([<QuestionBox/>]);
  const [option,setOption] = useState('')
  const [options,setOptions] = useState([])
  const [maxMsg,setMaxMsg] = useState(false);
  const title = useRef()
  const description = useRef()
  const addQuestionBox=()=>{
    setQuestionBox([...questionBox,<QuestionBox/>])
  }
  const addOption = ()=>{
    const optionObj = {
      id : Date.now(),
      option : option.trim(),
      count : 0
    }
    if(options.length === 4) return;
    options.push(optionObj)
    setOption('')
  }
  const removeOption = (id)=>{
    const filteredOptions = options.filter(e=>e.id !== id)
    setOptions(filteredOptions)
  }
  const handleSubmit = (e)=>{
    e.preventDefault()
    const survey = {
      title : title.current.value

    }
    console.log(title.current.value);
  }
  return (
    <div>
      <div>CreateSurvey</div>
      <div className="container min-vh-100 d-flex justify-content-center align-items-center ">
        <form onSubmit={''}>
          <div className="row row-l">
              <input name='title' className="form-control mb-4" placeholder="Input box" type="text" ref={title} />
              <textarea name ='description' className="form-control mb-4" placeholder="Textarea" rows="4" ref={description}></textarea>
              {questionBox.map((e,i)=>{
                return (
                  <div key={i}>{e}</div>
                )
              })}
              <AddQuestion addQuestionBox={addQuestionBox}/>
          </div>
        </form>
      </div>
      {/* <InputBox option={option} removeOption={removeOption} addOption={addOption} setOption={setOption} options={options}/> */}
    </div>
  )
}

export default CreateSurvey