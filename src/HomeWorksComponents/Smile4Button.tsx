import React, {useState} from "react";
import smile4 from "./images/smile4.png";

function Smile4Button() {

    const [counter, setCounter] = useState(0);

    const onClickButton4 = () => {
        setCounter(counter + 1);
    }

    return <button onClick={onClickButton4}>
        <img src={smile4} alt="Smile4" height={50}/>
        <div>{counter}</div>
    </button>
}

export default Smile4Button;