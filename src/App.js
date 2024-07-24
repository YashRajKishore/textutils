
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
// import About from './Components/About';
import { useState } from 'react';
import Alert from './Components/Alert';

// import {
//   Route,
//   Routes,
//   BrowserRouter
// } from "react-router-dom"

//just for the sake of github deployment we are getting rid of react router coz it doesnt work in github

function App() {
  const [mode, setMode] = useState('light');

  const [alert, setAlert] = useState({
    msg: '',
    type: ''
  });

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      showAlert("Dark mode has been enabled", "success")
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode has been enabled", "success")
    }
  }



  return (
    <>
      {/* <BrowserRouter> */}

        <Navbar title="TextUtils" about="About-Us" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container">
        <TextForm heading="Set text to analyze" mode={mode} />
          {/* <Routes> */}
            
            {/* <Route path="/" element={<TextForm heading="Set text to analyze" mode={mode} />}> */}
              
            {/* </Route> */}

            {/* <Route path="/about" element={<About/>}>  */}
              
            {/* </Route> */}

          {/* </Routes> */}
        </div>

      {/* </BrowserRouter> */}
    </>
  );
}

export default App;
// cd textutils
// npm start