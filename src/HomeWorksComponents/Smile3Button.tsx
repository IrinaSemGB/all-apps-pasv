import React, {useState} from "react";
import smile3 from "./images/smile3.png"

function Smile3Button() {

    const [counter, setCounter] = useState(0);

    const onClickButton3 = () => {
        setCounter(counter + 1);
    }

    return <button onClick={onClickButton3}>
        <img src={smile3} alt="Smile3" height={50}/>
        <div>{counter}</div>
    </button>
}

export default Smile3Button;