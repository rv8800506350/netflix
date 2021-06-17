import React from "react";

const SearchResult = (props) =>{
    const img = `https://source.unsplash.com/400x300/?${props.name}`;
    return(
        <>
           <div className="img1">
                <img src={img} alt="img" />
           </div>
        </>
    );
}

export default SearchResult;