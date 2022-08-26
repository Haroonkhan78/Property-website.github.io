import React from 'react';
import frontimg from "../src/images/img3.png";
import Common from './Common';



const Home = () =>{

    return(
        <>

           <Common
            name="Your Dream Home"
            imgsrc={frontimg}
            visit="/service"
            btnname="Get started"
           /> 
           
        </>
    );

};

export default Home;

