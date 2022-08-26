import React from 'react';
import front from "../src/images/img6.jpg";
import Common from './Common';



const About = () =>{

    return(
        <>

           <Common
                
                name="Weclome to dream house"
                imgsrc={front}
                visit="/contact"
                btnname="Contact us"
           /> 
           
        </>
    );

};

export default About;

