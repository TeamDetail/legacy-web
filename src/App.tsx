import { BrowserRouter } from "react-router-dom";
import Routes from "./components/Router";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </>
  );
}

export default App;
