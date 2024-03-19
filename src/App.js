
import React from 'react'
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { useGlobalContext } from './globalcontext/Useglobalcontext';
import Landing from './pages/Landing';
import Payment from './pages/Payment';
import Profile from './pages/Profile';
import Doctors from './pages/Doctors';
import Navbar from './components/Navbar';
import Appointment from './pages/Appointment';
import Notfound from './pages/Notfound';
import Contactinfo from './pages/Contactinfo';
import Login from './pages/Login';
function App() {

  const {test}=useGlobalContext()
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<><Navbar/><Outlet/><Contactinfo/></>}>
      <Route path='/' element={<Landing/>}></Route>
      <Route path='payment' element={<Payment/>}></Route>
      <Route path='login' element={<Login/>}></Route>

      <Route path='profile' element={<Profile/>}></Route>
      <Route path='doctors' element={<Doctors/>}></Route>
      <Route path='appointment' element={<Appointment/>}></Route>
      <Route path='payment' element={<Payment/>}></Route>
      
      <Route path='*'  element={<Notfound/>}></Route>
      </Route>
      


    </Routes>
    </BrowserRouter>
  );
}

export default App;
