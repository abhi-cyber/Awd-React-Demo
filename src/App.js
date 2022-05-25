import { useState } from 'react';
import './App.css';
import Navbar from './Components/navbar';
import Tutill from './Components/Tutill';

function App() {
  const [mode,setMode] = useState({
    color: "black",
    backgroundColor: "white",
    transition: "none"
  });
  const [light, setLight] = useState('light')
  const toggleMode = () => {
    if(light === 'light'){
      setMode({
        color: "white",
        backgroundColor: "black",
    transition: "none"
  })
      setLight('dark')
    }
    else{
      setMode({
        color: "black",
        backgroundColor: "white",
    transition: "none"
  })
      setLight('light')
    }
  }
  return (
    <>
    
    <Navbar text = {light} styles={mode} func = {toggleMode} title = "Chitkara University" />
    <div className="container" >
	    <Tutill />
    </div>
    
    
    </>
  );
};

export default App;  