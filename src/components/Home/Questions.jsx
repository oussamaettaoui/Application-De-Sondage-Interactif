import React from 'react'

function Questions(props) {
    const {question,answers,handleOptionChange} = props
  return (
    <div className="card">
          <div className="card-body">
            <h4 className="card-title">{question.qs}</h4>
            <div className="options">
              {question.options.map(option => (
                <div key={option.id}>
                   <label>
                  <input
                    type="radio"
                    name={`question_${question.id}`}
                    value={option.option}
                    onChange={() => handleOptionChange(question.id, option.id)}
                    checked={answers[question.id] === option.id}
                  />
                  <span>{option.option}</span>
                 </label>
                </div>
              ))}
            </div>
          </div>
        </div>
  )
}

export default Questions