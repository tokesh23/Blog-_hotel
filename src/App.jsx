import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './layout/Header';
import Index from './Index';
import Footer from './layout/Footer.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './About.jsx';
import Login from "./Login.jsx"
import Contact from './Contact.jsx';
 
const App = () => {
  return (
    <div>
       <Router>
      <Header />
      <Routes> 
          
         <Route path="/header" element={<Header/>} />
         <Route path="/about" element={<About/>} />
         <Route path="/home" element={<Index/>} />
         <Route path='/login' element ={<Login/>}/>
         <Route path='/contact' element ={<Contact/>}/>

          
      </Routes>
   
    </Router> 
   
  

    </div>
  );
};

export default App;
