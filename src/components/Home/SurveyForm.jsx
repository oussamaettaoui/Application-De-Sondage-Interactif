import React, { useState } from 'react';
import './SurveyForm.css';

//data : 
import { data } from '../../data/data';
import Questions from './Questions';




//component survey form : 
function SurveyForm() {
  //useState for answers
  const [answers, setAnswers] = useState({});
  const [survey, setSurvey] = useState(data);
  

  //handel switch radio btn :
  const handleOptionChange = (questionId, optionId) => {
    setAnswers(prevAnswers => ({
      ...prevAnswers,
      [questionId]: optionId
    }));
  };


  //handel submit : 
  const handleSubmit = () => {
    console.log("Selected Answers:", answers);
  };


  //return Survey Form 
  return (
    <div className="container">
      <h1 className="title">Survey Form</h1>
      {/* first card title desc */}
      <div className="wrapper">
        <div className="infoSurvey">
          <h2 className="surveyTitle">{survey.title}</h2>
          <p className="surveyText">{survey.description}</p>
        <div className='imgContainer'><img src={survey.img} alt="image" className="surveyImg" /></div>
        </div>
      </div>
      {/* end --- */}


      {survey.questions.map((q,i)=>{
        return (
          <div key={i}><Questions handleOptionChange={handleOptionChange} answers={answers} question={q}/></div>
        )
      })}
      <button onClick={handleSubmit} className="submit">Submit</button>
    </div>
  );
}

export default SurveyForm;
