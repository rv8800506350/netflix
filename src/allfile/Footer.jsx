import React from "react";



const Footer = () =>{
    const year =new Date().getFullYear();
    return(
        <>
           <div className="footer">
           <p className="text-center">Copyright © {year}</p>
           </div>
        </>
    );
}

export default Footer;