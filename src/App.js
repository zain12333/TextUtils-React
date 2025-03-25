import './App.css';
import About from './component/About';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';
import { useState } from 'react';


function App() {
  const [mode , setMode]= useState('light');
  // so this is used for if light so navgation is light and dark so dark 
  return (
   <>

  <Navbar aboutText="ABOUT US" mode = {mode}/>
  {/* // this is write in component folder and his file contain Navbar name (written in content)  and aslo this is used 
  // of props there */}
  <div  className="container">
  <TextForm   heading ="Enter the Text to Analysis" />
  
  </div>
  <About />
  

  
   </>
  );
}

export default App;
