
import Navbar from './Components/Navbar';
import searchIcon from './images/searchButton.svg';
import {Route, Routes} from "react-router-dom";
import Projects from './Components/Projects/Projects';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Projects/>
    </div>
  );
}

export default App;
