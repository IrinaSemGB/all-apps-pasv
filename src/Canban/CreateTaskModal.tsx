import React, {useState} from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Badge } from 'reactstrap';

interface ITask {
    id: number,
    name: string,
    description: string,
    status: string,
    priority: number
}

interface IProps {
    createNewTask: (newTask: ITask) => void,
    modalAdd: boolean,
    setModalAdd: (b: boolean) => void,
    priorities: number[],
    statuses: string[]
}

export default function CreateTaskModal(props: IProps) {

    const { modalAdd, setModalAdd, statuses, priorities } = props;
    const toggleAdd = () => setModalAdd(!modalAdd);

    const initialNewTask: ITask = {
        id: Math.random(),
        name: 'Specify the name of the task',
        description: 'Add task description',
        status: statuses[0],
        priority: 3,
    };

    const [name, setName] = useState(initialNewTask.name);
    const [description, setDescription] = useState(initialNewTask.description);
    const [priority, setPriority] = useState<number>(initialNewTask.priority);
    const [status, setStatus] = useState(initialNewTask.status);

    function createTask() {
        const newTask: ITask = {id: Math.random(), name: name, description: description, status: status, priority: priority};
        props.createNewTask(newTask);
        toggleAdd();
    }

    function setNewPriority(newPriority: () => number) {
        setPriority(newPriority);
    }

    return (
        <div>
            <Modal isOpen={modalAdd}>
                <ModalHeader> Add New Task </ModalHeader>
                <ModalBody>

                    <label htmlFor="exampleFormControlSelect2"><h4><Badge color="link"> Name </Badge></h4></label>
                    <input value={name}
                           onChange={(event) => setName(event.target.value)}
                           className="form-control"
                           type="text"/>

                    <label htmlFor="exampleFormControlSelect2"><h4><Badge color="link"> Description </Badge></h4></label>
                    <input value={description}
                           onChange={(event) => setDescription(event.target.value)}
                           className="form-control"
                           type="text"/>

                    <label htmlFor="exampleFormControlSelect2"><h4><Badge color="link"> Status </Badge></h4></label>
                    <select value={status}
                            onChange={(event) => setStatus(event.target.value)}
                            className="form-control">
                        {statuses.map((el, index) => <option key={index} value={el}> {el} </option>)}
                    </select>

                    <label htmlFor="exampleFormControlSelect2"><h4><Badge color="link"> Priority </Badge></h4></label>
                    <select value={priority}
                            onChange={event => (() => setNewPriority(() => Number(event.target.value)))}
                            className="form-control">
                        {priorities.map((el, index) => <option key={index}>{el}</option>)}
                    </select>

                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={createTask}> Create </Button>{' '}
                    <Button color="secondary" onClick={toggleAdd}> Cancel </Button>
                </ModalFooter>
            </Modal>
        </div>
    );

}