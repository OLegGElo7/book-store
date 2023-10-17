import Header from "./Components/Header";
import "./style/App.scss";
import "./style/reset.scss";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./Components/AppRouter";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <AppRouter />
      </BrowserRouter>
    </div>
  );
}

export default App;
