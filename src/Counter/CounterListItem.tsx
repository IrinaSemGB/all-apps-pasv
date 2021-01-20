import React, {useState} from "react";
import RedCross from "../HomeWorksComponents/images/redCross.png";

interface ICount {
    id: number;
    count: number;
    edit: boolean;
}

interface IProps {
    el: ICount;
    minusOne: (id: number) => void;
    minusTwo: (id: number) => void;
    minusThree: (id: number) => void;
    minusFour: (id: number) => void;
    minusFive: (id: number) => void;
    plusOne: (id: number) => void;
    plusTwo: (id: number) => void;
    plusThree: (id: number) => void;
    plusFour: (id: number) => void;
    plusFive: (id: number) => void;
    edit: (id: number, newStatus: boolean) => void;
    ok: (taskID: number, newValue: number) => void;
    deleteCounter: (id: number) => void;
}

export default function CounterListItem(props: IProps) {

    const {el} = props;

    const [inputValue, setInputValue] = useState<number>(Number());

    const okButton = (taskID: number) => {
        props.ok(taskID, inputValue);
        setInputValue(Number());
    };

    return (

                <li key={el.id}>
                    {!el.edit && <button onClick={() => props.edit(el.id, true)}>edit</button>}
                    {el.edit && <input type="number" value={inputValue} onChange={e => setInputValue(Number(e.target.value))}/>}
                    {el.edit && <button onClick={() => okButton(el.id)}>ok</button>}
                    {el.edit && <button onClick={() => props.edit(el.id, false)}>cancel</button>}

                    <button id={'b15'} onClick={() => props.minusFive(el.id)}>-5</button>
                    <button id={'b14'} onClick={() => props.minusFour(el.id)}>-4</button>
                    <button id={'b13'} onClick={() => props.minusThree(el.id)}>-3</button>
                    <button id={'b12'} onClick={() => props.minusTwo(el.id)}>-2</button>
                    <button id={'b11'} onClick={() => props.minusOne(el.id)}>-1</button>
                    <span id='spanCounter'>{el.count}</span>
                    <button id={'b11'} onClick={() => props.plusOne(el.id)}>+1</button>
                    <button id={'b12'} onClick={() => props.plusTwo(el.id)}>+2</button>
                    <button id={'b13'} onClick={() => props.plusThree(el.id)}>+3</button>
                    <button id={'b14'} onClick={() => props.plusFour(el.id)}>+4</button>
                    <button id={'b15'} onClick={() => props.plusFive(el.id)}>+5</button>

                    <button id={'deleteButton'} onClick={() => props.deleteCounter(el.id)}><img src={RedCross} alt="Delete" height={10}/></button>
                </li>
    );
}