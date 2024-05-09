import Routes from "../Routes/routes";
import NavBar from "../Header/NavBar";
import { BrowserRouter } from "react-router-dom";
import SurveyForm from "../Home/SurveyForm"

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <SurveyForm/>
      <Routes/>
    </BrowserRouter>
  )
}

export default App
