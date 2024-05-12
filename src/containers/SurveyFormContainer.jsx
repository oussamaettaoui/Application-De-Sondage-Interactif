import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import SurveyForm from '../components/survey-form/SurveyForm'
import {demo} from '../data/data'

function SurveyFormContainer() {
  const {id} = useParams()
  const [surveys,setSurveys] = useState(demo)
  const [survey,setSurvey] = useState(surveys.find(p=>p.id === (Number(id))))
  //
  const [showSurvey, setShowSurvey] = useState(true);
  const [currentQIndex, setCurrentQIndex] = useState(0);
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
  const [answers, setAnswers] = useState({});
  //
  const handleOptionChange = (questionId, optionId) => {
    setSurvey(prev=>{
      return {...prev, questions : prev.questions.map((question)=>{
        if(question.id === questionId){
          return {...question,options : question.options.map((option)=>{
            if(option.id === optionId){
              return {...option , count : option.count + 1 }
            }else return option
          })}
        }else return question
      })}
    })
    console.log(survey)
  };
  const handleSubmit = () => {
    
  };
  return (
    <SurveyForm showSurvey={showSurvey} handleSubmit={handleSubmit} handleNext={handleNext} handleBack={handleBack} isLastQuestion={isLastQuestion} currentQIndex={currentQIndex} setShowSurvey={setShowSurvey} survey={survey} handleOptionChange={handleOptionChange} answers={answers} />
  )
}

export default SurveyFormContainer