
import './App.scss';
import { Route, Routes } from 'react-router-dom';

import { Homepage } from './Components/HomePage/Homepage';
import Principal from './Pages/Principal/Principal';
import { MySelf } from './Components/MySelf/MySelf';
import Education from './Components/Education/Education';
import Skills from './Components/Skills/Skills';
import Projects from './Components/Projects/Projects';


function App() {
  return (

    <> 
     <div className="App">
    
    </div>
    <Routes>
      <Route path='/' element = {<Homepage/>} /> 
      <Route path='/main' element = {<Principal/>} /> 
      <Route path='/about' element = {<MySelf/>} /> 
      <Route path='/education' element = {<Education/>} /> 
      <Route path='/skills' element = {<Skills/>} /> 
      <Route path='/projects' element = {<Projects/>} /> 
    </Routes>
    </>
   
  );
}

export default App;
