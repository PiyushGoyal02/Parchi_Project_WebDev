import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './Components/HomePage';
import FindDoctorNearyou from './Components/FindDoctorNearYou';
import Login from './Components/Login-Signup/Login';
import DoctorsList from './Components/DoctorsList';
import BookInClinicAppointment from './Components/BookInClinicAppointment';
import CancelAppointment from './Components/CancelAppointment';
import AfterSearchButtonClickInFindDrNearYouMobilePhone from './Components/AfterSearchButtonClickInFindDrNearYouMobilePhone';
import TimeSlots from './Components/TimeSlots';
import WhyWeCancelAppointment from './Components/WhyWeCancelAppointment';
import Cancellation from './Components/Cancellation';


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
        <Route path='/afterclicksearchbuttoninfindoctors' element={<AfterSearchButtonClickInFindDrNearYouMobilePhone/>}></Route>
        <Route path='/timeslots' element={<TimeSlots/>}></Route>
        <Route path='/whywecancelappointment' element={<WhyWeCancelAppointment/>}></Route>
        <Route path='/cancel' element={<Cancellation/>}></Route>
      </Routes>
    </div>
  )
}

export default App;
