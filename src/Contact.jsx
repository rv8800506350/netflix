import React, { useState } from "react";

const Contact = () =>{

    const[data,setData]= useState ({
        fullName:"",
        fone:"",
        email:"",
        massage:"",
    })

    const inputEvent = (event) =>{
        const {name, value} = event.target;
        setData((preVal) =>{
            return {
                ...preVal,
                [name]: value,
            };
        });
    };

    const fromSubmit = (e) =>{
       e.preventDefault();
       alert(
           `My name is ${data.fullName}. My mobile number is ${data.fone}.
           My email id is ${data.email} & My massge is ${data.massage}.`
       );
    };
    
    return(
        <>
            <div className="my-5">
               <h1 className="text-center">Contact Us</h1>
           </div>
           <div className="container-fluid contact_div">
            <div className="row">
                 <div className="col-10 mx-auto">
                     <form onSubmit={fromSubmit}>
                         <div class="mb-3">
                            <label for="exampleFormControlInput1" className="form-label">Full Name</label>
                            <input type="text" className="form-control" id="exampleFormControlInput1"
                            name="fullName" value={data.fullName} onChange={inputEvent} placeholder="Type Your Name"/>
                          </div>
                          <div class="mb-3">
                            <label for="exampleFormControlInput1" className="form-label">Mobile Number</label>
                            <input type="number" className="form-control" id="exampleFormControlInput1"
                            name="fone" value={data.fone} onChange={inputEvent} placeholder="Type Your Number"/>
                          </div>
                          <div class="mb-3">
                            <label for="exampleFormControlInput1" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="exampleFormControlInput1"
                            name="email" value={data.email} onChange={inputEvent} placeholder="Type Your Email"/>
                          </div>
                         <div className="mb-3">
                            <label for="exampleFormControlTextarea1" className="form-label">Massage</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"
                            name="massage" value={data.massage} onChange={inputEvent}></textarea>
                        </div>
                        <div className="col-auto">
                        <button type="submit" class="btn btn-outline-primary">Confirm identity</button>
                        </div>
                     </form>
                 </div>
            </div>
        </div>
        </>
    );
}

export default Contact;