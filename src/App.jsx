
import './App.scss';
import { Route, Routes } from 'react-router-dom';

import { Homepage } from './Components/HomePage/Homepage';
import Principal from './Pages/Principal/Principal';


function App() {
  return (

    <> 
     <div className="App">
    
    </div>
    <Routes>
      <Route path='/' element = {<Homepage/>} /> 
      <Route path='/main' element = {<Principal/>} /> 
    </Routes>
    </>
   
  );
}

export default App;
