import React, {useState} from "react";
import smile5 from "./images/smile5.png"

function Smile5Button() {

    const [counter, setCounter] = useState(0);

    const onClickButton5 = () => {
        setCounter(counter + 1);
    }

    return <button onClick={onClickButton5}>
        <img src={smile5} alt="Smile5" height={50}/>
        <div>{counter}</div>
    </button>
}

export default Smile5Button;