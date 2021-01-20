import React, {useState} from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

interface ITask {
    id: number,
    name: string,
    description: string,
    status: string,
    priority: number
}

interface IProps {
    modal: boolean,
    setModal: (b: boolean) => void,
    priorities: number[],
    statuses: string[],
    task: ITask,
    updateTask: (updatedTask: { name: string; description: string; id: number; priority: number; status: string }) => void,
}

export default function UpdateTaskModal(props: IProps) {

    const { modal, setModal, task } = props;
    const toggle = () => setModal(!modal);

    const [newName, setNewName] = useState(task.name);
    const [newDescription, setNewDescription] = useState(task.description);
    const [newPriority, setNewPriority] = useState(task.priority);
    const [newStatus, setNewStatus] = useState(task.status);

    function saveButtonHandler() {
        const updatedTask = {id: task.id, name: newName, description: newDescription, status: newStatus, priority: newPriority};
        props.updateTask(updatedTask);
        toggle();
    }

    return (
        <div>
            <Modal isOpen={modal}>
                <ModalHeader> Update task </ModalHeader>
                <ModalBody>
                    <label htmlFor="exampleFormControlSelect2"> Name </label>
                    <input value={newName}
                           onChange={(event) => setNewName(event.target.value)}
                           className="form-control"
                           type="text"/>

                    <label htmlFor="exampleFormControlSelect2"> Description </label>
                    <input value={newDescription}
                           onChange={(event) => setNewDescription(event.target.value)}
                           className="form-control"
                           type="text"/>

                    <label htmlFor="exampleFormControlSelect2"> Status </label>
                    <select value={newStatus}
                            onChange={(event) => setNewStatus(event.target.value)}
                            className="form-control">
                        {props.statuses.map((el, index) => <option key={index} value={el}> {el} </option>)}
                    </select>

                    <label htmlFor="exampleFormControlSelect2"> Priority </label>
                    <select value={newPriority}
                            onChange={(event) => setNewPriority(Number(event.target.value))}
                            className="form-control">
                        {props.priorities.map((el, index) => <option key={index} value={el}>{el}</option>)}
                    </select>
                </ModalBody>

                <ModalFooter>
                    <Button color="primary" onClick={saveButtonHandler}> Save </Button>{' '}
                    <Button color="secondary" onClick={toggle}> Cancel </Button>
                </ModalFooter>

            </Modal>
        </div>
    );
}