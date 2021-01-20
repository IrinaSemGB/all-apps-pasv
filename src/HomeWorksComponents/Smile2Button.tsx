import React, {useState} from "react";
import smile2 from "./images/smile2.png";

function Smile2Button() {

    const [counter, setCounter] = useState(0);

    const onClickButton2 = () => {
        setCounter(counter + 1);
    }

    return <button onClick={onClickButton2}>
        <img src={smile2} alt="Smile2" height={50}/>
        <div>{counter}</div>
    </button>
}

export default Smile2Button;