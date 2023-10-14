import Header from "./Components/Header";
import HomePage from "./Components/HomePage";
import AboutStore from "./Components/AboutStore";
import "./style/App.scss";
import "./style/reset.scss";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <HomePage></HomePage>
      <AboutStore />
    </div>
  );
}

export default App;
