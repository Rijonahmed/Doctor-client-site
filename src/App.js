
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Appointment from './Pages/Appointment/Appointment';
import ContactUs from './Pages/ContactUs/ContactUs';
import Home from './Pages/Home/Home';
import LogIn from './Pages/LonIn/LogIn';
import Reviews from './Pages/Reviews/Reviews';
import Navber from './Pages/Shared/Navber/Navber';

function App() {
  return (
    <div>
      <Navber></Navber>
      <Routes>

        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/appointment' element={<Appointment></Appointment>}></Route>
        <Route path='/reviews' element={<Reviews></Reviews>}></Route>
        <Route path='/contactus' element={<ContactUs></ContactUs>}></Route>
        <Route path='/login' element={<LogIn></LogIn>}></Route>

      </Routes>



    </div>
  );
}



export default App;
