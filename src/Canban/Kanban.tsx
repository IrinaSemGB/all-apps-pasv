import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.css';
import faker from 'faker';
import Column from "./Column";

interface ITask {
    id: number,
    name: string,
    description: string,
    status: string,
    priority: number
}

const statuses = ["Todo", "Progress", "Review", "Done"];
const priorities = [1, 2, 3];

const initialTasks = [
    {
        id: Math.random(),
        name: faker.random.words(3),
        description: faker.random.words(10),
        status: statuses[0],
        priority: 3
    },
    {
        id: Math.random(),
        name: faker.random.words(2),
        description: faker.random.words(10),
        status: statuses[1],
        priority: 3
    },
    {
        id: Math.random(),
        name: faker.random.words(3),
        description: faker.random.words(10),
        status: statuses[2],
        priority: 3
    },
    {
        id: Math.random(),
        name: faker.random.words(1),
        description: faker.random.words(10),
        status: statuses[3],
        priority: 3
    },
];

export default function Kanban() {

    const [tasks, setTasks] = useState<ITask[]>(initialTasks);

    const [modalAdd, setModalAdd] = useState<boolean>(false);
    const toggleAdd = () => setModalAdd(!modalAdd);

    function  previousStatus(currentStatus: string) {
        return statuses[statuses.indexOf(currentStatus) - 1];
    }

    function  nextStatus(currentStatus: string) {
        return statuses[statuses.indexOf(currentStatus) + 1];
    }

    function left(taskID: number) {
        const updatedTasks = tasks.map(el => el.id === taskID ? {...el, status: previousStatus(el.status)} : el);
        setTasks(updatedTasks);
    }

    function right(taskID: number) {
        const updatedTasks = tasks.map(el => el.id === taskID ? {...el, status: nextStatus(el.status)} : el);
        setTasks(updatedTasks);
    }

    function  previousPriority(currentPriority: number) {
        return priorities[priorities.indexOf(currentPriority) - 1];
    }

    function  nextPriority(currentPriority: number) {
        return priorities[priorities.indexOf(currentPriority) + 1];
    }

    function priorityDown(taskID: number, currentPriority: number) {
        const updatedTasks = tasks.map(el => el.id === taskID && currentPriority > Math.min(...priorities) ? {...el, priority: previousPriority(currentPriority)} : el);
        setTasks(updatedTasks);
    }

    function priorityUp(taskID: number, currentPriority: number) {
        const updatedTasks = tasks.map(el => el.id === taskID && currentPriority < Math.max(...priorities) ? {...el, priority: nextPriority(currentPriority)} : el);
        setTasks(updatedTasks);
    }

    function createNewTask(createdTask: ITask) {
        setTasks([...tasks, createdTask]);
    }

    function updateTask(updatedTask: ITask) {
        const updatedTasks = tasks.map(el => {
            if (el.id === updatedTask.id) return {...el, name: updatedTask.name,
                description: updatedTask.description,
                status: updatedTask.status,
                priority: updatedTask.priority};
            return el;
        })
        setTasks(updatedTasks);
    }

    function deleteTask(taskID: number) {
        const updatedTasks = tasks.filter(el => el.id !== taskID);
        setTasks(updatedTasks);
    }

    return (
        <div className="container">
            <button onClick={toggleAdd} type="button" className="btn btn-success btn-sm"> Create New Task </button>
            <hr/>

            <div className="row">
                {statuses.map((el, index) =>
                    <Column key={index}
                            status={el}
                            statuses={statuses}
                            priorities={priorities}
                            tasks={tasks}
                            left={left}
                            right={right}
                            priorityDown={priorityDown}
                            priorityUp={priorityUp}
                            createNewTask={createNewTask}
                            modalAdd={modalAdd}
                            setModalAdd={setModalAdd}
                            updateTask={updateTask}
                            deleteTask={deleteTask}
                    />)
                }
            </div>

        </div>
    );
}