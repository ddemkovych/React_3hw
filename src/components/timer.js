import React,{ useState, useEffect } from "react";

import "../App"


const TimerWrapper = () => {
    const [time, setTime] = useState(10);
    const [isActive, setIsActive] = useState(false);

    const  startTime =() =>{
        setIsActive(!isActive);
    }

    const  reset = () => {
        if(setTime(10),
           setIsActive(false)); 
     {document.getElementById("end").play()}             
}
    useEffect(() => {
        let interval; 
        if (isActive) {
            interval = setInterval(() => {
                if (time > 0 ) {
                    setTime(time -1 ) 
                  
                } else {
                    reset()
                }
            }, 1000);
        } else  {
            clearInterval(interval);
        }    
       
        return () => clearInterval(interval);
        }, [isActive, time]);      

    return (
        <div>
            <div className="timer">{time}</div>
            <div className="butt">
                <button onClick={startTime}>{isActive ? 'Pause' : 'Start'}</button>
                <button onClick={reset}>Reset</button>
            </div>
          <audio id="end" preload="auto" src="https://assets.coderrocketfuel.com/pomodoro-times-up.mp3" ></audio>
            <div className="timer-line" style={{width: `calc(${time} * (100% / ${useState(10)}))`}}></div>
        </div>
        
    );
}; 


export default TimerWrapper; 