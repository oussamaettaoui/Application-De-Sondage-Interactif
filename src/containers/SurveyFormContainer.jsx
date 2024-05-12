import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import SurveyForm from '../components/survey-form/SurveyForm'
import {demo} from '../data/data'

function SurveyFormContainer() {
  const {id} = useParams()
  const [surveys,setSurveys] = useState(demo)
  const [survey,setSurvey] = useState(null)
  //
  const [showSurvey, setShowSurvey] = useState(true);
  const [currentQIndex, setCurrentQIndex] = useState(0);
  //
  useEffect(() => {
    const selectedSurvey = surveys.find(survey => survey.id === Number(id));
    setSurvey(selectedSurvey);
  }, [id, surveys]);
  //
  const handleNext = () => {
    setCurrentQIndex(prevIndex => prevIndex + 1);
  };
  const handleBack = () => {
    if (currentQIndex > 0) {
      setCurrentQIndex(prevIndex => prevIndex - 1);
    }
  };
  const isLastQuestion = currentQIndex === survey.questions.length - 1;
  //
  const handleOptionChange = (questionId, optionId) => {
    setSurvey(prev=>{
      const updatedQuestion = prev.questions.map((question)=>{
        if(question.id === questionId){
          const updatedOptions = question.options.map((option)=>{
            if(option.id === optionId){
              return {...option, count : option.count + 1}
            }else return option
          })
          return {...question, options : updatedOptions}
        }else return question
      })
      return {...prev,questions : updatedQuestion}
    })
  };
  console.log(survey)
  const handleSubmit = () => {
    
  };
  return (
    <SurveyForm showSurvey={showSurvey} handleSubmit={handleSubmit} handleNext={handleNext} handleBack={handleBack} isLastQuestion={isLastQuestion} currentQIndex={currentQIndex} setShowSurvey={setShowSurvey} survey={survey} handleOptionChange={handleOptionChange} />
  )
}

export default SurveyFormContainer