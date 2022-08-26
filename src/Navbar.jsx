import React from 'react';
import { NavLink } from 'react-router-dom';



const Navbar = () =>{
    return(<>

    <div className="container-fluid navbar-back">
        <div className="row">
        <div className="col-10 mx-auto">

         
   
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#">Dream House</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">

    <ul className="navbar-nav ml-auto mb-lg-0">
      <li className="nav-item active">
        <NavLink exact activeClassName="active" className="nav-link" to="/"  onlyActiveOnIndex>Home </NavLink>
      </li>
      <li className="nav-item active">
      <NavLink className="nav-link" menua to="/contact"  onlyActiveOnIndex>Contact</NavLink>
      </li>
      <li className="nav-item active">
      <NavLink className="nav-link" to="/about"  onlyActiveOnIndex>About</NavLink>
      </li>
      <li className="nav-item">
      <NavLink className="nav-link" to="/sevice"  onlyActiveOnIndex>Services</NavLink>
      </li>
    </ul>
   
  </div>
</nav>


        </div>
      </div>  
    </div>  


    </>);
}

export default Navbar;