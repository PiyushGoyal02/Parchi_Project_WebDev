import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './Components/HomePage';
import FindDoctorNearyou from './Components/FindDoctorNearYou';
import Login from './Components/Login-Signup/Login';
import DoctorsList from './Components/DoctorsList';
import BookInClinicAppointment from './Components/BookInClinicAppointment';
import CancelAppointment from './Components/CancelAppointment';

function App() {
  return (
    <div>
      {/* <HomePage/> */}
      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/FindDoctor' element={<FindDoctorNearyou/>}></Route>
        <Route path='/LoginSignup' element={<Login/>}></Route>
        <Route path='/doctorslist' element={<DoctorsList/>}></Route>
        <Route path='/boookinclinicappointment' element={<BookInClinicAppointment/>}></Route>
        <Route path='/cancelAppointment' element={<CancelAppointment/>}></Route>
      </Routes>
    </div>
  )
}

export default App;
