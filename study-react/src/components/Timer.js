import { useEffect, useState } from "react";

function Timer() {
    const [time, setTime] = useState(new Date());
    
    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => {
            clearInterval(timer);
        }
    }, [])
    
    return ( 
        <>{time.toLocaleTimeString()}</>
     );
}

export default Timer;