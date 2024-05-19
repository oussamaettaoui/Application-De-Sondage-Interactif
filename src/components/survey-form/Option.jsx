import React from 'react'
import '../../styles/option.scss'
import { SURVEY_FORM_ACTIONS } from './SurveyForm'
function Option(props) {
    const {qsId,dispatch,option} = props
    return (
        <div className='OptionWrapper'>
            <input
                className="InputOption"
                name={`question_${qsId}`}
                type="radio"
                id = {option.id}
                value={option.id}
                onChange={()=>dispatch({type : SURVEY_FORM_ACTIONS.HANDLE_OPTION_CHANGE , payload : {qsId , opId : option.id}})}
            />
            <label htmlFor={option.id} className="OptionBox" >
                <div className="option">
                    <span className="circle"></span>
                    <span className="subject">{option.op}</span>
                </div>
            </label>
        </div>
    )
}

export default Option