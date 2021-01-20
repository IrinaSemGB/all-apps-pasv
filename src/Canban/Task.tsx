import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.css';
import DeleteTaskModal from "./DeleteTaskModal";
import UpdateTaskModal from "./UpdateTaskModal";
import CreateTaskModal from "./CreateTaskModal";

interface ITask {
    id: number,
    name: string,
    description: string,
    status: string,
    priority: number
}

interface IProps {
    task: ITask,
    priorities: number[],
    statuses: string[],
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

export default function Task(props: IProps) {

    const { task } = props;

    const [modal, setModal] = useState<boolean>(false);
    const toggle = () => setModal(!modal);

    const [modalDel, setModalDel] = useState<boolean>(false);
    const toggleDel = () => setModalDel(!modalDel);

    return (
        <div className="card border-primary">
            <span className={`border border-info`}>

                <div className="card-body">
                    <div className="card-title"><h6><strong>{task.name}</strong></h6></div>
                    <p className="card-text">{task.description}</p>
                </div>

                <ul className="list-group list-group-flush">

                    <li className="list-group-item">
                        <div>priority:{' '}
                            <button type="button" className="btn btn-link text-dark"  onClick={() => props.priorityDown(task.id, task.priority)}> - </button>
                            <strong>{task.priority}</strong>
                            <button type="button" className="btn btn-link text-dark" onClick={() => props.priorityUp(task.id, task.priority)}> + </button>
                        </div>
                    </li>


                    <li className="list-group-item">
                        <div className="btn-group">
                            <button onClick={toggle} type="button" className="btn btn-outline-secondary"> Update </button>
                            <UpdateTaskModal modal={modal}
                                             setModal={setModal}
                                             priorities={props.priorities}
                                             statuses={props.statuses}
                                             task={task}
                                             updateTask={props.updateTask}
                            />
                            <button onClick={toggleDel} type="button" className="btn btn btn-outline-secondary"> Delete </button>
                            <DeleteTaskModal modalDel={modalDel}
                                             setModalDel={setModalDel}
                                             task={task}
                                             deleteTask={props.deleteTask}
                            />
                            <CreateTaskModal createNewTask={props.createNewTask}
                                             modalAdd={props.modalAdd}
                                             setModalAdd={props.setModalAdd}
                                             priorities={props.priorities}
                                             statuses={props.statuses}/>
                        </div>
                    </li>


                    <li className="list-group-item">
                        <div className="card-body">
                            {task.status !== 'Todo' && <button type="button" className="btn btn-link" onClick={() => props.left(task.id)}> Left </button>}
                            {task.status !== 'Done' && <button type="button" className="btn btn-link" onClick={() => props.right(task.id)}> Right </button>}
                        </div>
                    </li>
                </ul>

            </span>
        </div>
    );
}