import React, {useState} from "react";
import FinishCard from "./FinishCard";

interface ICase {
    id: number;
    show: boolean;
    first: number;
    second: number;
    sign: string;
}

interface IAnswer {
    id: number,
    value: number,
}

interface IProps {
    caSe: ICase;
    setCase: (caSe: ICase) => void;
    caseGeneration: () => void;
}

let finishCardArray: string[] = [];
let counter: number = 1;
const counterMax: number = 6;
let showOkButton: boolean = true;

let correctAnswers: number = 0;


export default function Case(props: IProps) {

    const {caSe} = props;

    const [answer, setAnswer] = useState<IAnswer>({id: Number(), value: +'?'});

    let [res, setRes] = useState<string>('');


    function ok(caSeID: number, answerID: number) {

        let result: number = Number();
        if (caSe.sign === '+') {
            result = caSe.first + caSe.second;
        } else if (caSe.sign === '-') {
            result = caSe.first - caSe.second;
        } else if (caSe.sign === '*') {
            result = caSe.first * caSe.second;
        }

        if (caSeID === answerID && answer.value === result) {
            const emoji1 = String.fromCodePoint(0x1F44F);
            const emoji2 = String.fromCodePoint(0x1F340);
            res = `Good job! ${emoji1}${emoji1}${emoji1}`;
            setRes(res);
            finishCardArray.push(`${caSe.first} ${caSe.sign} ${caSe.second} = ${answer.value} --- ${emoji2}`);
            showOkButton = false;
            correctAnswers++;
        } else if (caSeID === answerID && answer.value !== result) {
            const emoji1 = String.fromCodePoint(0x1F614);
            const emoji2 = String.fromCodePoint(0x1F6A8);
            res = `${emoji1} the correct answer was ${result}`;
            setRes(res);
            finishCardArray.push(`${caSe.first} ${caSe.sign} ${caSe.second} ≠ ${answer.value} --- ${emoji2}`);
            showOkButton = false;
        }
    }

    function newCase() {
        showOkButton = true;
        props.caseGeneration();
        setAnswer({id: Number(), value: +'?'});
        setRes('');
        counter++;
    }

    return (
        <div>

            {counter < counterMax && <span id={'caseNumberLabel'}>-Case {counter}-</span>}

            {counter < counterMax &&
            <div>
                <label id={'caseValueLabel'}>{caSe.first}</label>
                <label id={'signLabel'}>{caSe.sign}</label>
                <label id={'caseValueLabel'}>{caSe.second}</label>
                <label id={'equalLabel'}>=</label>
                <input id={'answerInput'} type={"number"} value={Number(answer.value)}
                       onChange={e => setAnswer({id: caSe.id, value: Number(e.target.value)})}/>
                {showOkButton && <button id={'okButton'} onClick={() => ok(caSe.id, answer.id)}>ok</button>}
            </div>
            }

            {counter < counterMax &&
            <div>
                <div id={'resLabel'}>{res}</div>
                {res?.length !== 0 && <button id={'nextButton'} onClick={newCase}>Next</button>}
            </div>
            }

            {counter === counterMax && <FinishCard finishCardArray={finishCardArray}
                                                   correctAnswers={correctAnswers}
            />}

        </div>
    );
}