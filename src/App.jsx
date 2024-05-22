import Routes from "./Routes/Routing";
import NavBar from "./components/NavBar";
import { HashRouter } from "react-router-dom";
import { ContextProvider } from "./context/ContextProvider";

function App() {
  return (
    <HashRouter>
      <ContextProvider>
        <NavBar/>
        <Routes/>
      </ContextProvider>
    </HashRouter>
  )
}

export default App