
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import About from './components/About';
import React, {useState} from 'react';
import Alert from './components/Alert';

import {
  BrowserRouter as Router,
  
  Route,
  
  Routes
} from "react-router-dom";


function App() {

  const[mode, setMode] = useState('light');  // Whether dark mode is enabled or not.
  const [alert,setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
      document.title = 'TextUtils - Dark Mode';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      document.title = 'TextUtils - Light Mode';
    }
  }
  
  return (
    <>
    <Router>
    <Navbar mode = {mode} toggleMode = {toggleMode}/>
    <Alert alert = {alert}/>
    <div className="container my-3">
    <Routes>
        <Route exact path="/" element={<Textform heading = "Enter the text to analyze" mode = {mode} showAlert = {showAlert}/>} />
        <Route exact path="/about" element={<About mode = {mode}/>} />
        
      </Routes>
    </div>
    </Router>
    </>
   
  );
}



export default App;
