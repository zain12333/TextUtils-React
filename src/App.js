import './App.css';
import About from './component/About';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';
import { useState } from 'react';
import Alert from './component/Alert';


function App() {

  const [mode , setMode]= useState('light');
  // so this is used for if light so navgation is light and dark so dark 
  
  

  // this is used for for Alert function there
  const [alert , setAlert]= useState('');  
 
  const showAlert =(message,type) =>{
    setAlert({
      msg :message,
      type : type,
    

  })
  // so this can enable the work on setAlert in 3 second 
  setTimeout(() => {
    setAlert(null);
        
  }, 1500);


}

  const toggleMode =() =>{
    if(mode=='light'){
      setMode('dark');
      document.body.style.backgroundColor ='gray';
      // so th showAlert are used for print message 
      showAlert("Dark Mode have been enabled","Success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor ='white';
      // so th showAlert are used for print message 
      showAlert("Light Mode have been enabled","Success");
    }

  }
  // this is used for gray and black ka last there

  // const toggleMode1 =() =>{
  //   if(mode=='light'){
  //     setMode('dark');
  //     document.body.style.backgroundColor ='blue';
  //     // so th showAlert are used for print message 
  //     showAlert("Dark Mode have been enabled","Success");
  //   }
  //   else{
  //     setMode('light');
  //     document.body.style.backgroundColor ='white';
  //     // so th showAlert are used for print message 
  //     showAlert("Light Mode have been enabled","Success");
  //   }

  // }
  // same is method sy hum another button ko manage kaya gya 



  return (
   <>

  <Navbar aboutText="ABOUT US" mode = {mode}  toggleMode={toggleMode}    />
  {/* // this is write in component folder and his file contain Navbar name (written in content)  and aslo this is used 
  // of props there */}
  <Alert   alert= {alert}/>
  {/* // is used for Alert  */}
  <div  className="container">
  <TextForm   showAlert={showAlert} heading ="Enter the Text to Analysis" />
  
  </div>
  {/* // is used for About */}
  <About />
  

  
   </>
  );
}

export default App;
