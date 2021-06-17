import React from 'react';

const ToDolist = (props) =>{
     
   


    return(
    <>
        <div className="todo">
        <i className="fa fa-times" area-hidden="true" 
        onClick={() =>{
           props.onSelect(props.id);
        }}/>
         <li> {props.text} </li>
        </div>
    </>
    );
};

export default ToDolist;






