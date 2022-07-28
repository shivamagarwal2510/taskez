
import Navbar from './Components/Navbar';
import searchIcon from './images/searchButton.svg';
import {Route, Routes} from "react-router-dom";
import Projects from './Components/Projects/Projects';
import Signup from './Components/Signup';
import Login from './Components/Login';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Navbar/>}>
        <Route path= "projects" element={<Projects/>}/>
        </Route>
        <Route path="/sign-up" element={<Signup/>}/>
        <Route path="/log-in" element={<Login/>}/>
      </Routes>
      
      
    </div>
  );
}

export default App;
