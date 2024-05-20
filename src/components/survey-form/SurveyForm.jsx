import React, { useEffect, useReducer, useState } from 'react'
import Question from './Question'
import { useParams } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';
import '../../styles/SurveyForm.scss'
import Loading from '../Loading';
//
export const SURVEY_FORM_ACTIONS = {
  HANDLE_SET_SURVEY : 'HANDLE_SET_SURVEY',
  HANDLE_OPTION_CHANGE : 'HANDLE_OPTION_CHANGE',
  HANDLE_GENDER_CHANGE : 'HANDLE_GENDER_CHANGE',
}
//
const SurveyFormReducer = (state , action)=>{
  switch(action.type){
      case SURVEY_FORM_ACTIONS.HANDLE_SET_SURVEY : 
          return {...state,survey : action.payload};
      case SURVEY_FORM_ACTIONS.HANDLE_OPTION_CHANGE:
        console.log({...state,temp : action.payload.opId, survey : {...state.survey , questions : state.survey.questions.map(question=>{
          if(question.id === action.payload.qsId){
            return {...question , options : question.options.map(option=>{
              if(option.id === action.payload.opId){
                return {...option, count : option.count +1}
              }else if(option.id === state.temp) {
                return {...option, count : option.count -1}
              }return option
            })}
          }return question;
        })}});
        return {...state,temp : action.payload.opId, survey : {...state.survey , questions : state.survey.questions.map(question=>{
          if(question.id === action.payload.qsId){
            return {...question , options : question.options.map(option=>{
              if(option.id === action.payload.opId){
                return {...option, count : option.count +1}
              }else if(option.id === state.temp) {
                return {...option, count : option.count -1}
              }return option
            })}
          }return question;
        })}}
      case SURVEY_FORM_ACTIONS.HANDLE_GENDER_CHANGE :
        return {...state , survey : {...state.survey , totalCount : state.survey.totalCount + 1,maleCount :  action.payload === 'male' ? state.survey.maleCount + 1 : state.survey.maleCount , femaleCount : action.payload === 'female' ? state.survey.femaleCount+1 : state.survey.femaleCount}}
      default :
          throw new Error("Invalid Action");
  }
}
function SurveyForm() {
  const [gender,setGender] = useState();
  const {data , isLoading} = useFetch();
  const {id} = useParams();
  const [state,dispatch] = useReducer(SurveyFormReducer , {temp : 0,survey : null });
  console.log(state.survey);
  useEffect(() => {
    if (!isLoading && data.length > 0 && id) {
      const survey = data.find((s) => s.id === id);
      if (survey) {
        dispatch({ type: SURVEY_FORM_ACTIONS.HANDLE_SET_SURVEY, payload: survey });
      }
    }
  }, [data, isLoading, id]);
  const handleGender = (e)=>{
    setGender(e.target.value);
  }
  const handleSubmit = ()=>{
    dispatch({type : SURVEY_FORM_ACTIONS.HANDLE_GENDER_CHANGE , payload : gender})
    console.log('Submitted Survey:', state.survey);
  }
  return (
    <div className='SurveyFormContainer'>
      <h1 className='SurveyFormTitle'>Survey Form</h1>
      {!isLoading ? <div className='FormContainer'>
      <div className='GenderWrapper'>
      <label htmlFor="gender">Select your gender : </label>
        <div className='RadioGroup'>
          <input type="radio" className='RadioInput' value='male' id='male' name='gender' onChange={handleGender}/>
          <label className="RadioLabel" htmlFor="male">
            <span className="RadioInnerCircle"></span>
            Male
          </label>
          <input type="radio" className='RadioInput' value='female' id='female' name='gender' onChange={handleGender}/>
          <label className="RadioLabel" htmlFor="female">
            <span className="RadioInnerCircle"></span>
            Female
          </label>
          
        </div>
      </div>
        {state.survey && state.survey.questions.map((question, i)=>{
          return (
              <Question key={i} qsId={question.id} question={question} dispatch={dispatch} />
          )
        })}
      <button className='SubmitBtn' onClick={handleSubmit}>Submit Answers</button>
      </div> : <Loading/>}
    </div>
  )
}

export default SurveyForm