import Routes from "../Routes/routes";
import NavBar from "../Header/NavBar";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes/>
    </BrowserRouter>
  )
}

export default App
