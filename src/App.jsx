 import React from 'react'
 import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './layout/Header';
import Index from './Index';
 import  Footer from "./layout/Footer.jsx"


 
 const App = () => {
   return (
     <div>
      <Header/>
      <Index/>
      <Footer/>
     </div>
   )
 }
 
 export default App