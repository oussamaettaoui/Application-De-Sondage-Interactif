import Routes from "../Routes/routes";
import HomePage from "../Home/HomePage";
import NavBar from "../Header/NavBar";

const App = () => {
  return (
    <>
      <NavBar />
      <HomePage />

      <Routes />
    </>
  );
};

export default App;
