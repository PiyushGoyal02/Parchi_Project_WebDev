import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './Components/HomePage';
import FindDoctorNearyou from './Components/FindDoctorNearYou';
import Login from './Components/Login-Signup/Login';

function App() {
  return (
    <div>
      {/* <HomePage/> */}
      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/FindDoctor' element={<FindDoctorNearyou/>}></Route>
        <Route path='/LoginSignup' element={<Login/>}></Route>
      </Routes>
    </div>
  )
}

export default App;
