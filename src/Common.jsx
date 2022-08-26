import React from 'react';
import { NavLink } from 'react-router-dom';




const Common = (props) =>{

    return(
        <>
            
            <section id="header" className="d-flex align-items-center">

            <div className="container-fluid ">
             <div className="row">
                 <div className="col-10 mx-auto">

                     <div className="row">
                         <div className="col-md-6 mt-5 order-2 pt-lg-0 order-lg-1 d-flex justify-content-center flex-column">
                              <h1>{props.name}<br/><strong className="head-brand">Haseeb khan</strong></h1>
                              <h2  className="my-3">Find a perfect home for your family</h2>
                              <div className="mt-3">
                                <NavLink to={props.visit} className="btn home-btn">{props.btnname}</NavLink>
                              </div>
                         </div>
                        <div className="col-lg-6 header-img order-1 order-lg-2 ">
                               <img src={props.imgsrc} className="img-fluid animated rounded" alt="header img"/>
                        </div>

                     </div>
                 </div>
             </div>  
             </div>           

            </section>

        </>
    );

};

export default Common;

