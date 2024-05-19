import React, { useEffect, useReducer } from 'react'
import Question from './Question'
import { useParams } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';
import '../../styles/SurveyForm.scss'
//
export const SURVEY_FORM_ACTIONS = {
  HANDLE_SET_SURVEY : 'HANDLE_SET_SURVEY',
  '' : '',
  '' : '',
  '' : '',
}
//
const SurveyFormReducer = (state , action)=>{
  switch(action.type){
      case SURVEY_FORM_ACTIONS.HANDLE_SET_SURVEY : 
          return {...state,survey : action.payload};
      default :
          throw new Error("Invalid Action");
  }
}
function SurveyForm() {
  const {data , isLoading} = useFetch();
  const {id} = useParams();
  const [state,dispatch] = useReducer(SurveyFormReducer , {survey : null });
  useEffect(() => {
    if (!isLoading && data.length > 0 && id) {
      const survey = data.find((s) => s.id === id);
      if (survey) {
        dispatch({ type: SURVEY_FORM_ACTIONS.HANDLE_SET_SURVEY, payload: survey });
      }
    }
  }, [data, isLoading, id]);
  const handleSubmit = ()=>{

  }
  return (
    <div className='SurveyFormContainer'>
      <h1 className='SurveyFormTitle'>Survey Form</h1>
      <div className='FormContainer'>
        {state.survey && state.survey.questions.map((question, i)=>{
          return (
              <Question qsId={question.id} question={question} dispatch={dispatch} />
          )
        })}
      <button onClick={handleSubmit}>Submit Answers</button>
      </div>
    </div>
  )
}

export default SurveyForm