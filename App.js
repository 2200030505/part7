
import './App.css';
import Home from './Components/Home';
import About from './Components/About';
import {  Route, Routes } from 'react-router-dom';


function App() {
  return (
    
    
    <Routes>
      <Route path="/" element= {<Home/>}></Route>
      <Route path="About" element={<About/>}></Route>
    </Routes>
      
  );
}

export default App;
