import React, {useState} from "react";
import smile6 from "./images/smile6.png"

function Smile6Button() {

    const [counter, setCounter] = useState(0);

    const onClickButton6 = () => {
        setCounter(counter + 1);
    }

    return <button onClick={onClickButton6}>
        <img src={smile6} alt="Smile6" height={50}/>
        <div>{counter}</div>
    </button>
}

export default Smile6Button;