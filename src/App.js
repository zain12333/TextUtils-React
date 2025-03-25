import './App.css';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';



function App() {
  return (
   <>

  <Navbar aboutText="ABOUT"/>
  {/* // this is write in component folder and his file contain Navbar name (written in content)  and aslo this is used 
  // of props there */}
  <div  className="container">
  <TextForm   heading ="Enter the Text to Analysis" />
  </div>
  

  
   </>
  );
}

export default App;
