import React, {useState} from "react";
import smile7 from "./images/smile7.png"

function Smile7Button() {

    const [counter, setCounter] = useState(0);

    const onClickButton7 = () => {
        setCounter(counter + 1);
    }

    return <button onClick={onClickButton7}>
        <img src={smile7} alt="Smile7" height={50}/>
        <div>{counter}</div>
    </button>
}

export default Smile7Button;