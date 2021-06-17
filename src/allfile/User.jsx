import React from "react";
import { useParams , useLocation ,useHistory } from 'react-router-dom';

const User = () =>{
    const {fname,lname } = useParams();

    const location = useLocation();
    const history = useHistory();
    
    return(
        <>
           <h1>Hi , this {fname} {lname} page</h1>
           <p>My current location is {location.pathname}</p>
           {
               location.pathname === `/User/raghav/singh` ? 
               (<button onClick={() => history.push("/")} >homePages</button>) : null
           }
        </>
    );
}

export default User;