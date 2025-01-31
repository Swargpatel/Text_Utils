// import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';



function App() {

  const [mode, setmode] = useState('light');
  const toggleMode = () =>{
    if(mode === 'light')
    {
      setmode('dark');
      document.body.style.backgroundColor = '#030a3b';
      // document.body.style.color = 'white';
      
    }
    else{
      setmode('light');
      document.body.style.backgroundColor = 'white';
      // document.body.style.color = 'black';

    }
  }
  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
      <div className="container my-3">

      <TextForm heading="Enter the text to analyze" mode={mode} />
      {/* <About/> */}
      </div>
    
    </>
  );
}

export default App;
