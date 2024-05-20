import Routes from "./Routes/Routing";
import NavBar from "./components/NavBar";
import { BrowserRouter } from "react-router-dom";
import { ContextProvider } from "./context/ContextProvider";

function App() {
  return (
    <BrowserRouter>
      <ContextProvider>
        <NavBar/>
        <Routes/>
      </ContextProvider>
    </BrowserRouter>
  )
}

export default App