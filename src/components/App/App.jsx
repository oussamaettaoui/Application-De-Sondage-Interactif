import Routes from "../Routes/Routes";
import NavBar from "../Header/NavBar";
import { BrowserRouter } from "react-router-dom";
import { useState, useEffect } from "react";

function App() {
  const [surveys, setSurveys] = useState();
  const [] = useEffect(() => { 
    const getSurveys = async 
  }, []);


  return (
    <BrowserRouter>
      <NavBar/>
      <Routes/>
    </BrowserRouter>
  )
}

export default App
