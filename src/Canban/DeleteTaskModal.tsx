import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

interface ITask {
    id: number,
    name: string,
    description: string,
    status: string,
    priority: number
}

interface IProps {
    modalDel: boolean,
    setModalDel: (b: boolean) => void,
    task: ITask,
    deleteTask: (id: number) => void
}

export default function DeleteTaskModal(props: IProps) {

    const { modalDel, setModalDel, task } = props;
    const toggleDel = () => setModalDel(!modalDel);

    return (
        <div>
            <Modal isOpen={modalDel}>
                <ModalHeader>{task.name}</ModalHeader>
                <ModalBody>
                    Are you sure you want to delete this task?
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={() => props.deleteTask(task.id)}> Delete </Button>{' '}
                    <Button color="secondary" onClick={toggleDel}> Cancel </Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}