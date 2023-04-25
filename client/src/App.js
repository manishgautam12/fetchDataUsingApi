import { useEffect } from 'react';
import './App.css';
import Home from "./components/Home" 
import {Routes, Route,useNavigate} from "react-router-dom";

function App() {
  const navigate=useNavigate()
  
  useEffect(()=>{
    navigate("/api1");
  },[])

  return (
    <div className="App">
      <Routes>
        <Route path="/:id" element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;
