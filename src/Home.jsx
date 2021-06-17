import React from "react";
import web from "../src/img/home.jpg"
import Common from './Common';

const Home = () =>{
    
    return(
        <>
            <Common name="I am Front-end Developer"
           imgsrc={web}
           visit="/services"
           btname="Get Start" />
        </>
    );
}

export default Home;