import React, { useState } from 'react';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import ListMat from './ListMat';

const ToDo = () =>{
  
    const[item,setItem]=useState("");
    const[newItem,setNewItem]=useState([]);

    const itemEvent = (event)=>{
        setItem(event.target.value);
    };

    const listOfItem = () =>{
        setNewItem((preval) =>{
            return [...preval,item]
        });

        setItem(" ");
    };

    return(
        <>
        <div className="main-div">
            <div className="center-div">
                <br/>
                <h1>ToDo List</h1>
                <br/>
                 <input type="text" placeholder="Type an item" onChange={itemEvent} value={item} />
                 <button className="addbtn" onClick={listOfItem}><AddIcon/></button>

                 <ol className="ol">
                    
                     {
                        newItem.map((val,index) =>{
                          return (
                           <ListMat key={index} id={index} text={val} />
                          );
                         })}
                 </ol>
            </div>
        </div>

        </>
    );
};

export default ToDo;