import React, {useState} from "react";
import RedCross from "../HomeWorksComponents/images/redCross.png";

interface ITask {
    id: number;
    name: string;
    done: boolean;
    edit: boolean;
    del: boolean;
}

interface IList {
    el: ITask;
    index: number;
    isFirst: boolean;
    isLast: boolean;
    save: (taskID: number, newName: string) => void;
    done: (taskID: number, newStatus: boolean) => void;
    moveUp: (index: number, direction: number) => void;
    edit: (taskID: number, newStatus: boolean) => void;
    del: (taskID: number, newStatus: boolean) => void;
    yes: (taskID: number) => void;
}

export default function ListItem(props: IList) {

    const {el, index, isFirst, isLast} = props;

    const [inputValue, setInputValue] = useState(el.name);

    const saveButton = (taskID: number) => {
        props.save(taskID, inputValue);
        setInputValue('');
    };

    return (
        <li key={el.id}>

            {(!el.del && !el.edit) && <button id={'deleteButton'} onClick={() => props.del(el.id, true)}><img src={RedCross} alt="Delete" height={10}/></button>}
            {el.del && <span id={'areUSure'}>Are you sure?</span>}
            {el.del && <button onClick={() => props.yes(el.id)}>yes</button>}
            {el.del && <button onClick={() => props.del(el.id, false)}>no</button>}

            {el.done ? <del id={'delTask'}>{el.name}</del> : el.name}
            {el.done ?
                <button id={'undoneButton'} onClick={() => props.done(el.id, false)}>Undone</button> :
                <button id={'doneButton'} onClick={() => props.done(el.id, true)}>Done</button>
            }
            {isFirst && <button onClick={() => props.moveUp(index, -1)}>↑</button>}
            {isLast && <button onClick={() => props.moveUp(index, 1)}>↓</button>}


            {(!el.edit && !el.del) && <button onClick={() => props.edit(el.id, true)}>edit</button>}
            {el.edit && <input value={inputValue} onChange={e => setInputValue(e.target.value)}/>}
            {el.edit && <button onClick={() => saveButton(el.id)}>save</button>}
            {el.edit && <button onClick={() => props.edit(el.id, false)}>cancel</button>}

        </li>
    );
}