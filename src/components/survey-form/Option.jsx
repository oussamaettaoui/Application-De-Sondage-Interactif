import React from 'react'
import '../../styles/option.scss'
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
                onChange={() => handleOptionChange(question.id, option.id)}
            />
            <label htmlFor={option.id} class="OptionBox" >
                <div class="option">
                    <span class="circle"></span>
                    <span class="subject">{option.op}</span>
                </div>
            </label>
        </div>
    )
}

export default Option