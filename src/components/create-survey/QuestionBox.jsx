import React, { useContext } from 'react'
import InputBox from './InputBox'
import { FaTrashCan } from "react-icons/fa6";
import '../../styles/question-box.scss'
import { AppContext } from '../../context/ContextProvider';
import { CREATE_SURVEY_ACTIONS } from '../../hooks/useCreateSurvey';

function QuestionBox(props) {
  const {question,qsIndex} = props;
  const {useCreateSurveyState,useCreateSurveyDispatch} = useContext(AppContext);

  return (
    <div className='QuestionBoxWrapper'>
      <h3 className="QuestionBoxTitle">Question Box</h3>
      <input type="text" value={question.qs} onChange={e=>useCreateSurveyDispatch({type : CREATE_SURVEY_ACTIONS.HANDLE_QUESTION , payload : {value : e.target.value, id : question.id}})} className='QuestionBoxInput' placeholder='Enter Your Question'/>
      <div className=''>
        <InputBox options={question.options} qsIndex={qsIndex} />
      </div>
      <div className='DeleteQuestionBox' onClick={()=>useCreateSurveyDispatch({type : CREATE_SURVEY_ACTIONS.DELETE_QUESTION, payload : question.id})}>
        <FaTrashCan className='DeleteIcon'/>
        <div className='DeleteText'>Delete Question</div>
      </div>
    </div>
  )
}

export default QuestionBox