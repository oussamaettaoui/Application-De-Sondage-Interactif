import React from 'react'

function Option(props) {
    const {handleOptionChange,question,option} = props
    console.log(option.id)
    console.log(question.id)
    return (
        <div>
            <label>
                <input
                    className="input"
                    name={`question_${question.id}`}
                    type="radio"
                    value={option.id}
                    onChange={() => handleOptionChange(question.id, option.id)}
                />
                <span>{option.op}</span>
            </label>
        </div>
    )
}

export default Option