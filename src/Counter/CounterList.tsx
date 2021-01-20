import React, {useState} from "react";
import CounterListItem from "./CounterListItem";

interface ICount {
    id: number;
    count: number;
    edit: boolean;
}

export default function CounterList() {

    const [counters, setCounters] = useState<ICount[]>([
        {id: 1, count: 0, edit: false},
        {id: 2, count: 0, edit: false},
        {id: 3, count: 0, edit: false},
    ]);

    let numberInput: any = React.createRef();
    let newCount = 0;

    function addCounters() {
        setCounters( [...counters, { id: Math.random(), count: Number(newCount), edit: false }] );
    }

    function minusOne(id: number) {
        setCounters( counters.map(el => el.id === id ? {...el, count: el.count - 1} : el) );
    }

    function plusOne(id: number) {
        setCounters( counters.map(el => el.id === id ? {...el, count: el.count + 1} : el) );
    }

    function minusTwo(id: number) {
        setCounters( counters.map(el => el.id === id ? {...el, count: el.count - 2} : el) );
    }

    function plusTwo(id: number) {
        setCounters( counters.map(el => el.id === id ? {...el, count: el.count + 2} : el) );
    }

    function minusThree(id: number) {
        setCounters( counters.map(el => el.id === id ? {...el, count: el.count - 3} : el) );
    }

    function plusThree(id: number) {
        setCounters( counters.map(el => el.id === id ? {...el, count: el.count + 3} : el) );
    }

    function minusFour(id: number) {
        setCounters( counters.map(el => el.id === id ? {...el, count: el.count - 4} : el) );
    }

    function plusFour(id: number) {
        setCounters( counters.map(el => el.id === id ? {...el, count: el.count + 4} : el) );
    }

    function minusFive(id: number) {
        setCounters( counters.map(el => el.id === id ? {...el, count: el.count - 5} : el) );
    }

    function plusFive(id: number) {
        setCounters( counters.map(el => el.id === id ? {...el, count: el.count + 5} : el) );
    }

    function valueForNewCounter() {
        newCount = numberInput.current.value;
    }

    function edit(id: number, newStatus: boolean) {
        setCounters( counters.map(el => el.id === id ? {...el, edit: newStatus} : el) );
    }

    const ok = (taskID: number, newValue: number) => {
        setCounters(counters.map(el => el.id === taskID ? {...el, count: newValue} : el));
    };

    function deleteCounter(id: number) {
        setCounters( counters.filter(el => el.id !== id) );
    }

    return (

        <div>
            <button id={'addButton'} onClick={ () => addCounters() }>Add+</button>
            <input id={'counterInput'} type="number" onInput={valueForNewCounter} ref={numberInput}/>
            <ul>
                {counters.map( (el) =>
                    <CounterListItem
                        el={el}
                        minusOne={minusOne}
                        minusTwo={minusTwo}
                        minusThree={minusThree}
                        minusFour={minusFour}
                        minusFive={minusFive}
                        plusOne={plusOne}
                        plusTwo={plusTwo}
                        plusThree={plusThree}
                        plusFour={plusFour}
                        plusFive={plusFive}
                        edit={edit}
                        ok={ok}
                        deleteCounter={deleteCounter}
                    />
                )}
            </ul>
        </div>
    );
}