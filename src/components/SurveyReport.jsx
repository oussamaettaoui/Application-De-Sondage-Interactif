import React, { useEffect, useRef, useState } from 'react';
import { useFetch } from '../hooks/useFetch';
import { useParams } from 'react-router-dom';
import '../styles/survey-report.scss'

function SurveyReport() {
  const {data, loading} = useFetch();
  const [filteredData, setFilteredData] = useState({});
  const {id} = useParams();
  useEffect(() => {
    if (!loading && data.length > 0 ){
      const fdata = data.find(dt => dt.id === id);
      setFilteredData(fdata);
    }
  },[data, loading, id])
  //console.log("I am initial data :", data);
  console.log("I am the filtered data :", filteredData);
  /*const fdata = data.filter(data => data.id === id);
  setFilteredData(fdata)
  console.log(filteredData);*/
  const calculatePercentages = (options) => {
    const totalVotes = options.reduce((acc, option) => acc + option.count, 0);
    return options.map(option => ({
      ...option,
      percentage: totalVotes ? ((option.count / totalVotes) * 100).toFixed(2) : 0 // Handling division by zero
    }));
  };

  return (
    <div className="container">
      <header>
        <h1>{filteredData.title}</h1>
        <p>{filteredData.description}</p>
      </header>
      
      <section>
        <h2>Survey Overview</h2>
        <div className="question-content">
          <img src={filteredData.img} alt="Survey Overview" className="survey-image" />
        </div>
      </section>

      {filteredData.questions.map((question, index) => (
        <section key={index}>
          <h2>{question.qs}</h2>
          <div className="question-content">
            <ul>
              {calculatePercentages(question.options).map((option, idx) => (
                <li key={idx}>
                  {option.op}: {option.percentage}% ({option.count} votes)
                </li>
              ))}
            </ul>
          </div>
        </section>
      ))}
      
      <footer>
        <p>&copy; 2024 Survey Report. All rights reserved.</p>
      </footer>
    </div>
  );

};

export default SurveyReport;