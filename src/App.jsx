
import React from 'react';
import './App.css'
import {Routes,Route} from 'react-router-dom'
//import Right2no from "./components/Right2no.jsx";
import LandingPage from './components/frontpage';
import Copyright from './components/Copyright.jsx';
//import Trade from './components/trade.jsx';
import Design from './components/Design.jsx';

function App()
{
  return(
  <>
  <Button/>
  <NavigationBar/>
  <Routes>

    <Route path='/' element={<LandingPage />} />
        <Route path='/right2no' element={<Right2no />} />
        <Route path='/copyright' element={<Copyright />} />
        <Route path='/trade' element={<Trade />} />
        <Route path='/design' element={<Design />} />
    </Routes>
    
    
    </>
  )
}
export default App


