import React, { useState } from 'react';
import ToDolist from './ToDolist';


const App = () =>{

    const [itemlist,setItemList]  = useState("");
    const [Items,setItems] = useState([]);

    const itemEvent = (event) =>{
        setItemList(event.target.value);
    };

    const listOfItem = () =>{
        setItems((oldItems) =>{
            return [...oldItems,itemlist];
        });

        setItemList("");
    };

    const deleteItem = (id) => {
 
        setItems((oldItems) =>{
            return oldItems.filter((arrElem,index) =>{
                   return index !== id;
            });
        });
    };


    return(
        <>
          <div className="main-div">
              <div className="center-div">
                  <br/>
                  <h1>ToDo List</h1>
                  <br/>
                  <input type="text" placeholder="Add a item" onChange={itemEvent} value={itemlist} />
                  <button onClick={listOfItem} className="addbtn">+</button>
                  <ol className="ol">
                      
                     {
                         Items.map((itemval,index) =>{
                          return (
                           <ToDolist key={index} id={index} text={itemval} onSelect={deleteItem} />
                          );
                         })
                     }

                  </ol>
              </div>
          </div>
        </>
    ); 
}

export default App;