import React, {useState} from "react";
import List from "./List";

interface ITask {
    id: number;
    name: string;
    done: boolean;
    edit: boolean;
    del: boolean;
}

export default function ToDoList() {

    const [task, setTask] = useState<ITask>({id: 1, name: 'To do homework', done: false, edit: false, del: false});
    const [list, setList] = useState<ITask[]>([]);

    function clear() {
        setTask({...task, name: ''});
    }

    function add(taskID: number, taskName: string) {
        if (list.every(el => el.id !== taskID) && taskName.length !== 0) {
            const newTask = {
                id: Math.random(),
                name: taskName,
                done: false,
                edit: false,
                del: false,
            };
            setList([...list, newTask]);
        }
    }

    return (
        <div>

            <input type="text" value={task.name} onChange={event => setTask({id: Math.random(), name: event.target.value, done: false, edit: false, del: false})}/>
            <button onClick={() => add(task.id, task.name)}>Add task</button>
            <button onClick={clear}>Clear</button>

            <List list={list} setList={setList}/>
        </div>
    );
}