import NavBar from "../Header/NavBar";
import { BrowserRouter } from "react-router-dom";
import { useState, useEffect } from "react";
import {collection, getDocs} from "@firebase/firestore"
import { db } from "../../firebase-config";
import Routing from "../Routes/routing";
import { data } from "autoprefixer";

function App() {
  const [surveys, setSurveys] = useState([]);
  const surveyCollection = collection(db, "survey");
  useEffect(() => {
    const getSurveys = async () => {
      const data = await getDocs(surveyCollection);
      setSurveys(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getSurveys();
  }, []);

  return (
    <>
    <BrowserRouter>

      <NavBar/>
      <Routes/>

      {/* <NavBar/> */}
      <SurveyForm/>
      {/* <Routes/> */}

    </BrowserRouter>
    </>
  )
}

export default App
