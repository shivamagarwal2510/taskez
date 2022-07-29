
import Navbar from './Components/Navbar';
import searchIcon from './images/searchButton.svg';
import {Route, Routes} from "react-router-dom";
import Projects from './Components/Projects/Projects';
import Signup from './Components/Signup';
import Login from './Components/Login';
import PrivateRoute from './routes/PrivateRoute';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/sign-up" element={<Signup/>}/>
        <Route path="/log-in" element={<Login/>}/>
        <Route element={<PrivateRoute/>}>
          <Route path='/' element={<Navbar/>}>
            <Route path= "projects" element={<Projects/>}/>
          </Route>
        </Route>
        
      </Routes>
      
      
    </div>
  );
}

export default App;
