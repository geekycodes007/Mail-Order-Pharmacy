import { Routes, Route } from "react-router-dom"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import GetAllDrugs from "./Component/GetAllDrugs";
import  Header  from "./Component/Header";
import  Homepage  from './Component/Homepage';
import  Login  from './Component/Login';
import GetDrugsId  from './Component/GetDrugsId';
import GetDrugsName from "./Component/GetDrugsName";
import Subscribe from "./Component/Subscribe";
import GetSubscriptions from "./Component/GetSubscriptions";
import Refill from "./Component/Refill";
import GetRefills from "./Component/GetRefills";



function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/home' element={<Homepage />} />
        <Route path='/getalldrugs' element={<GetAllDrugs />}/>
        <Route path='/getalldrugsbyid' element={<GetDrugsId />} />
        <Route path='/getalldrugsbyname' element={<GetDrugsName />} />
        <Route path='/subscribe' element={<Subscribe />} />
        <Route path='/getallsubs' element={<GetSubscriptions />} />
        <Route path='/refill/:prescriptionId' element={<Refill />} />
        <Route path='/getallrefills' element={<GetRefills />} />
      </Routes>

    </>
  );
}

export default App;
