import React from 'react';
import Card from './Netflix';
import Sdata from './Sdata';

const App =() => (

 <>
    <h1 className="heading-1">Top 6 Netflix Series</h1>

    {Sdata.map((val) =>{
       return(
    <Card
       key={val.id}
       imgsrc={val.imgsrc}
       title={val.title}
       sname={val.sname}
       link={val.link}
    />
    
       );
    }
    )}
     
 </>
);

export default App;

