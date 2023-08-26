import './App.css';
import About from './components/About';
import Home from './components/Home';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <Navbar /> 
        <Routes>
          <Route exact path="/home"  element={ <Home />}/>
          <Route exact path="/about"  element={<About/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
