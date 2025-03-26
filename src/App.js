import './App.css';
import About from './component/About';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';
import { useState } from 'react';
import Alert from './component/Alert';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
// is used for web page one click and get result move other page 

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);  

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'gray';
      showAlert("Dark Mode has been enabled", "Success");
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enabled", "Success");
    }
  };

  return (
    <Router>
      <Navbar aboutText="ABOUT US" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container">
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/" element={<TextForm showAlert={showAlert} heading="Enter the Text to Analyze" />} />
        </Routes>
      </div>
    </Router>
    // Router used for  one click and move next page 
  );
}

export default App;
