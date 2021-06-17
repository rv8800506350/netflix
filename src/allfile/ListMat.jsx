import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import { useState } from 'react';
const ListMat = (props) =>{
     
   const [line, setLine] = useState(false);
   
   const cutIt = () =>{
       setLine(true);
   };

    return(
   
        <div className="todo">
         <span onClick={cutIt}><DeleteIcon className="fa-times" /></span>
         <li style={{  textDecoration: line ? "line-through" : "none"}}> {props.text} </li>
        </div>
    
    );
};

export default ListMat;