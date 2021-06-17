import React, { useState } from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Header from "./Header";
import Footer from "./Footer";
import CreateNote from "./CreateNote";
import Note from "./Note";



const App = () =>{
    const [addItem, setAddItem] = useState([]);
  
    const addNote = (note) =>{
        // alert("i clicked");
        setAddItem((prevData) => {
            return[...prevData,note];
        });
    };

    const onDelete = (id) =>{
       setAddItem((oldDate)=>
         oldDate.filter((currDate, indx) =>{
               return indx !== id;
         })
       );
    };

    return(
        <>
           <Header/>
           <CreateNote  passNote={addNote}/>
           
           {
               addItem.map((val,index)=>{
                   return <Note
                       key={index}
                       id={index}
                       title={val.title}
                       content={val.content}
                       deleteItem ={onDelete}
                   />;
               })
           }
           <Footer/>
        </>
    );
}

export default App;