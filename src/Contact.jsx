import React from 'react';



const Contact = () =>{

    return(
        <>
           <div className="my-4">
               <h1 className="text-center">Contact Us</h1>
           </div>


           <div className="container">
               <div className="row">
                   
                   <div className="col-md-6 col-10 mx-auto" >


                   <form>
  <div class="form-group">
    <label for="exampleFormControlInput1">Full Name</label>
    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Name"/>
  </div>

  <div class="form-group">
    <label for="exampleFormControlInput1">Phone</label>
    <input type="number" class="form-control" id="exampleFormControlInput1" placeholder="phone"/>
  </div>

  <div class="form-group">
    <label for="exampleFormControlInput1">Email address</label>
    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
  </div>
  
  
  <div class="form-group">
    <label for="exampleFormControlTextarea1">Example textarea</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>
</form>

<div className="col-12">
    <button className="btn btn-outline-primary" type="submit">Submit form</button>
</div>

                   </div>

               </div>
           </div>
      
        </>
    );

};

export default Contact;