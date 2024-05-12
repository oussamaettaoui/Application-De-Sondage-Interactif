import React from 'react'

function Option(props) {
    const {handleOptionChange,question,answers,option} = props
    return (
        <div>
            <label>
                <input
                    required
                    className="input"
                    type="radio"
                    value={option.op}
                    onChange={() => handleOptionChange(question.id, option.id)}
                    checked={answers[question.id] === option.id}
                />
                <span>{option.op}</span>
            </label>
        </div>
    )
}

export default Option