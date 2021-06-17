import React, { useState } from "react";
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';



const CreateNote = (props) =>{

    const[expend,setExpend] = useState(false);

    const expendIt = () =>{
        setExpend(true);
    };

    const backNormal = () =>{
        setExpend(true);
    };

    const [note,setNote] = useState ({
        title:"",
        content:"",
    });

    
    const inputEvent = (event) =>{
        const {name,value} = event.target;

        setNote((prevData) => {
            return {
                ...prevData,
                [name]: value,
            };
        });
    };

    const addEvent = () => {
        props.passNote(note);
        setNote({
            title:"",
            content:"",
        })
    };



    return(
        <>
           <div className="main-note" onDoubleClick={backNormal}>

           {expend?
                <input type="text" placeholder="title" value={note.title} onChange={inputEvent} name="title" />
           : null}

           <textarea rows="4" column="" placeholder="write a note..." name="content" 
           value={note.content} onChange={inputEvent} onClick={expendIt}></textarea>

            {expend?
            <Button onClick={addEvent}><AddIcon className="addbtn" /></Button>
           : null}

           </div>
        </>
    );
}

export default CreateNote;