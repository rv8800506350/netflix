import React from "react";
import Button from '@material-ui/core/Button';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';



const Note = (props) =>{
const deleteNote = () =>{
    props.deleteItem(props.id);
};

    return(
        <>
           <div className="note">
           <h1>{props.title}</h1>
           <p>{props.content}</p>
           <Button className="btn" onClick={deleteNote}>
              <DeleteOutlineIcon className="delbtn"/>
           </Button>
           </div>
        </>
    );
}

export default Note;