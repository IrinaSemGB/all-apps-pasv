import React from "react";

interface IProps {
    finishCardArray: string[];
    correctAnswers: number;
}

export default function FinishCard(props: IProps) {

    let {finishCardArray, correctAnswers} = props;
    const resultsPhrase = `You have ${correctAnswers} correct answers out of ${finishCardArray.length}`

    function startAgain() {
        document.location.reload();
    }

    return (
        <div>

            <h2 id={'resultsCardLabel'}>RESULTS CARD</h2>

            <ul>
                {finishCardArray.map(el => <li>{el}</li>)}
            </ul>

            <h3 id={'resultsPhrase'}>{resultsPhrase}</h3>
            <button id={'startAgainButton'} onClick={startAgain}>START again</button>

        </div>
    );
}