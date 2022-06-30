import React from "react";
import './App.css';
import UserPage from "./container/UserPage";
import { BrowserRouter as Router, Routes,Switch, Route,Navigate } from "react-router-dom"
// import { Navigate } from "react-router-dom";
function App() {
  // const userName=prompt("enter the github username");
  return (
     
     
      <Router>
     <Routes>
      <Route path= "/" element={<UserPage/>}/>
      <Route path="*" element={<UserPage/>} />
      {/* <Route path=":id" element={<Navigate replace to="${useName}"/>} /> */}
        
      {/* <Redirect to ={'/akkySrivastava'}/> */}
     </Routes>

     </Router>
    
  
  );
}
export default App;
