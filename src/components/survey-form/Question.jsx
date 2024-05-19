import React from 'react'
import Option from './Option'
import '../../styles/question.scss'

function Question(props) {
    const {question,qsId,dispatch} = props;
    return (
        <div className='QuestionContainer'>
            <h1 className='Question'>{question.qs}</h1>
            <div className=''>
                {question.options.map((option,i)=>{
                    return (
                        <div key={i}>
                            <Option dispatch={dispatch} qsId={qsId} option={option} />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Question