import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Task from "./Task";

interface ITask {
    id: number,
    name: string,
    description: string,
    status: string,
    priority: number
}

interface IProps {
    status: string,
    statuses: string[],
    priorities: number[],
    tasks: ITask[],
    left: (id: number) => void,
    right: (id: number) => void,
    priorityDown: (priority: number, currentPriority: number) => void,
    priorityUp: (priority: number, currentPriority: number) => void,
    createNewTask: (task: ITask) => void,
    modalAdd: boolean,
    setModalAdd: (b: boolean) => void,
    updateTask: (task: ITask) => void,
    deleteTask: (id: number) => void
}

export default function Column(props: IProps) {

    const { status, tasks } = props;

    return (
        <div className="col-sm">
            <h3>{status}</h3>

            {tasks
                .filter(el => el.status === status)
                .map(el =>
                    <Task key={el.id}
                          task={el}
                          priorities={props.priorities}
                          statuses={props.statuses}
                          left={props.left}
                          right={props.right}
                          priorityDown={props.priorityDown}
                          priorityUp={props.priorityUp}
                          createNewTask={props.createNewTask}
                          modalAdd={props.modalAdd}
                          setModalAdd={props.setModalAdd}
                          updateTask={props.updateTask}
                          deleteTask={props.deleteTask}
                    />
                )
            }
        </div>
    );
}