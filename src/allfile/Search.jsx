import React, { useState } from "react";
import SearchResult from "./SearchResult";

const Search = () =>{
    const [img,setimg] = useState("");

    const inputEvent = (event) =>{
        const data = event.target.value;
        setimg(data);
    };
    return(
        <>
        <div className="searchbar">
           <input type="type" placeholder="Search anything"
           value={img}
           onChange={inputEvent}
            />
            {img === "" ? null : <SearchResult name={img}/>}
        </div>
        

        </>
    );
}

export default Search;