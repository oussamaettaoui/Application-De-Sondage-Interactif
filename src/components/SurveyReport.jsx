import React, { useEffect, useState } from 'react';
import { useFetch } from '../hooks/useFetch';
import { useParams } from 'react-router-dom';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import '../styles/survey-report.scss';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function SurveyReport() {
  const { data, loading } = useFetch();
  const [filteredData, setFilteredData] = useState({});
  const { id } = useParams();

  useEffect(() => {
    if (!loading && data.length > 0) {
      const fdata = data.find(dt => dt.id === id);
      setFilteredData(fdata);
    }
  }, [data, loading, id]);

  const calculatePercentages = (options) => {
    const totalVotes = options.reduce((acc, option) => acc + option.count, 0);
    return options.map(option => ({
      ...option,
      percentage: totalVotes ? ((option.count / totalVotes) * 100).toFixed(2) : 0 // Handling division by zero
    }));
  };

  const renderChart = (options) => {
    const labels = options.map(option => option.op);
    const percentages = options.map(option => option.percentage);

    const data = {
      labels,
      datasets: [
        {
          label: 'Percentage',
          data: percentages,
          backgroundColor: 'rgba(153, 102, 255, 0.6)',
        },
      ],
    };

    const optionsConfig = {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Votes and Percentages',
        },
      },
    };

    return <Bar data={data} options={optionsConfig} />;
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

      {filteredData.questions && filteredData.questions.map((question, index) => (
        <section key={index}>
          <h2>{question.qs}</h2>
          <div className="question-content">
            {renderChart(calculatePercentages(question.options))}
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