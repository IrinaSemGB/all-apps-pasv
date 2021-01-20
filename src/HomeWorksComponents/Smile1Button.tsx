import React, {useState} from "react";
import Smile1 from "./images/Smile1.png"


function Smile1Button() {

    const [counter, setCounter] = useState(0);

    const onClickButton1 = () => {
        setCounter(counter + 1);
    }

    return <button onClick={onClickButton1}>
        <img src={Smile1} alt="Smile1" width={50} height={50}/>
        <div>{counter}</div>
    </button>
}

export default Smile1Button;