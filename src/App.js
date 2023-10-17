import Header from "./Components/Header";
import HomePage from "./pages/HomePage";
import AboutStore from "./pages/AboutStore";
import "./style/App.scss";
import "./style/reset.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/About" element={<AboutStore />}></Route>
          <Route path="/Home" element={<HomePage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
