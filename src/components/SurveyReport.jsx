import React, { useEffect, useRef, useState } from 'react';
import { useFetch } from '../hooks/useFetch';
import { useParams } from 'react-router-dom';

function SurveyReport() {


  const {data, loading} = useFetch();
  const [filteredData, setFilteredData] = useState(data);
  const {id} = useParams();
  console.log(data);
  return (
    <>
    {
      <h1> Report</h1>
    }
      

    </>
  );
}

export default SurveyReport; // Exporting SurveyReport component