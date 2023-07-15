import { useState } from "react";

const Counter = () =>{
    const [increament,setIncreament]=useState(0);
    const onInc = () =>{
    let a  = increament +5;
    setIncreament(a)

    }
    const onDec = () =>{
        let b = increament -3;
        if(increament <= 0)
            setIncreament(0)
        else
        setIncreament(b)
        

    }

    return(
        <div>
            <button onClick={onInc}>{increament}Increament</button>
            <button onClick={onDec}>{increament}Descreament</button>

        </div>
    )
}
export default Counter;