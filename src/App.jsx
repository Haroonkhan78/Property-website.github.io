import React from 'react';
import "../node_modules/bootstrap-4-required/src/css/bootstrap.css";
import "../node_modules/bootstrap-4-required/src/js/bootstrap.js"
import {Routes, Route}  from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';
import About from './About';
import Service from './Service';
import Navbar from './Navbar';
import  Footer from './Footer';



const App = () =>{

    return(
        <>
         <Navbar/>
         <Routes>
             <Route exact path="/" element={<Home/>}/>
             <Route exact path="/contact" element={<Contact/>}/>
             <Route exact path="/about" element={<About/>}/>
             <Route exact path="/sevice" element={<Service/>}/>
         </Routes>
         <Footer/>
         
        </>
    );

};

export default App;




