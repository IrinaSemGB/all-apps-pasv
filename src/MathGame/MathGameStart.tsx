import React, {useState} from "react";
import Case from "./Case"

interface ICase {
    id: number;
    show: boolean;
    first: number;
    second: number;
    sign: string;
}

export default function MathGameStart() {

    const [caSe, setCase] = useState<ICase>({
        id: Number(),
        first: Number(),
        second: Number(),
        sign: String(),
        show: Boolean()
    });

    const signs = ['+', '-', '*']

    function caseGeneration() {
        const newCase: ICase = {
            id: Math.random(),
            show: true,
            first: Math.floor(Math.random() * 10),
            second: Math.floor(Math.random() * 10),
            sign: signs[Math.floor(Math.random() * signs.length)]
        }
        setCase(newCase);
    }

    return (
        <div className="App">

            <div id={'caseDiv'}>
                {!caSe.show &&
                <div>
                    <h2 id={'startAppeal'}>If you are ready press start</h2>
                    <button id={'startButton'} onClick={caseGeneration}>START</button>
                </div>
                }
                {caSe?.show && <Case caSe={caSe}
                                     setCase={setCase}
                                     caseGeneration={caseGeneration}/>}
            </div>

        </div>
    );
}