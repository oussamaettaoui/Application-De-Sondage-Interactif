import React, { useEffect, useRef, useState } from 'react';
import { useFetch } from '../hooks/useFetch';
import { useParams } from 'react-router-dom';

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

  return (
    <>
    <div style={{marginTop: "6rem"}} className="">
      <h1>I am the survey</h1>
      <div>{filteredData.title}</div>
      <div>{filteredData.description}</div>
      
    </div>
      
    </>
  );
}

export default SurveyReport;