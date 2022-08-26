import React from 'react';
import Cards from './Cards';
import Cdata from './Cdata'


const Service = () =>{

    return(
        <>

        <div>
            <h1 className="text-center">Our Services</h1>
        </div>
            
    <div className="container-fluid navbar-back">
         <div className="row">
        <div className="col-10 mx-auto">

               <div className="row">
                   {Cdata.map((val, ind)=>{
                       return <Cards
                           imgsrc = {val.imgsrc}
                           title = {val.title}
                       />
                   })}
                

               </div>
        </div>
    </div>  
    </div>            

        </>
    );

};

export default Service;