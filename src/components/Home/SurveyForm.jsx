import React, { useState } from 'react';

const data = [
  {
    title: "This is a Survey",
    description: "This is a Survey This is a Survey This is a Survey This is a Survey This is a Survey This is a Survey",
    img : "../../../public/linkden.jpg",
    questions: [
      {
        id: 1,
        qs: "do you love souhail",
        options: [
          {
            id: 1,
            option: "yes",
            count: 0
          },
          {
            id: 2,
            option: "no",
            count: 0
          }
        ]
      },
      {
        id: 2,
        qs: "do you love cat",
        options: [
          {
            id: 1,
            option: "yes",
            count: 0
          },
          {
            id: 2,
            option: "no",
            count: 0
          }
        ]
      },
      {
        id: 3,
        qs: "do you love tea",
        options: [
          {
            id: 1,
            option: "yes",
            count: 0
          },
          {
            id: 2,
            option: "no",
            count: 0
          },
          {
            id: 3,
            option: "maybe",
            count: 0
          }
        ]
      }
    ]
  }
];

function SurveyForm() {
  const [answers, setAnswers] = useState({});

  const handleOptionChange = (questionId, optionId) => {
    setAnswers(prevAnswers => ({
      ...prevAnswers,
      [questionId]: optionId
    }));
  };

  const handleSubmit = () => {
    console.log("Selected Answers:", answers);
  };

  return (
    <div>
      <h1>Survey Form</h1>
         {/* image */}
      <img src={data[0].img} alt="image" width={'400px'} height={'1000px'}/>
      <h2>{data[0].title}</h2>
      <h3>{data[0].description}</h3>
      {data[0].questions.map(question => (
        <div key={question.id}>
          <h4>{question.qs}</h4>
          <div>
            {question.options.map(option => (
              <div key={option.id}>
                <input
                  type="radio"
                  name={`question_${question.id}`}
                  value={option.option}
                  onChange={() => handleOptionChange(question.id, option.id)}
                  checked={answers[question.id] === option.id}
                />
                <label>{option.option}</label>
              </div>
            ))}
          </div>
        </div>
      ))}
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default SurveyForm;
