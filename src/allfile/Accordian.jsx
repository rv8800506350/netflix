import React, { useState } from 'react';
import {question} from './Qapi';
import MyAccordian from './MyAccordian';

const Accordian = () =>{
  
    const[data,setdata] = useState( question);

    return(
        <>
        <div className="main-div">
        <section className="center-div">
           <h1 className="head">React Question & Answer</h1>
           {
               data.map((currElem) =>{
                  const {id} = currElem;
                  return <MyAccordian key={id} {...currElem}/>
               })
           }

        </section>
        </div>s

        </>
    );
}

export default Accordian;