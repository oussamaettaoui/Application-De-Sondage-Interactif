import React, { useContext } from 'react'
import '../../styles/add-question.scss'
import { AppContext } from '../../context/ContextProvider'
import { CREATE_SURVEY_ACTIONS } from '../../hooks/useCreateSurvey'

function AddQuestion() {
  const {useCreateSurveyDispatch} = useContext(AppContext)
  return (
    <div className='AddQuestionBtnWrapper'>
        <button type="button" onClick ={()=>useCreateSurveyDispatch({type : CREATE_SURVEY_ACTIONS.ADD_QUESTION})} className="AddQuestionButton">Add Question</button> 
    </div>
  )
}

export default AddQuestion