import React, { useState } from 'react';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import Clock from 'react-digital-clock';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';

const App = () =>{
 
    const[num, setNum] = useState(0);

    const incNum = () =>{
        setNum(num+1);
    };

    const decNum = () =>{
        if(num > 0){
            setNum(num-1);
        }else{
            alert("zero is last word")
            setNum(0);
        }
      
    };

  
       
      
   
    return(
       
        <>
        <div className="main-div">
        <CountdownCircleTimer
          isPlaying
          duration={10}
          colors={[
            ['#004777', 0.33],
            ['#F7B801', 0.33],
            ['#A30000', 0.33],
          ]}
        >
          {({ remainingTime }) => remainingTime}
        </CountdownCircleTimer>
        <Clock/>
            <div className="center-div">
                <h1 className="head1">{num}</h1>
                <div className="btn-div">
                <Tooltip title="Add">
                <Button  onClick={incNum}><AddIcon/></Button>
                </Tooltip>
                <Tooltip title="Delete">
                <Button  onClick={decNum}><RemoveIcon/></Button>
                </Tooltip>
                </div>
            </div>
        </div>
        </>
    );
};

export default App;