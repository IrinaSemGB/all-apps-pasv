import React from "react";
import ListItem from "./ListItem";

interface ITask {
    id: number;
    name: string;
    done: boolean;
    edit: boolean;
    del: boolean;
}

interface IList {
    list: ITask[];
    setList: (list: ITask[]) => void;
}

export default function List(props: IList) {

    const {list} = props;

    const done = (taskID: number, newStatus: boolean) => {
        const newList = list.map(el => el.id === taskID ? {...el, done: newStatus} : el);
        props.setList(newList);
    };

    const edit = (taskID: number, newStatus: boolean) => {
        const newList = list.map(el => el.id === taskID ? {...el, edit: newStatus} : el);
        props.setList(newList);
    };

    const save = (taskID: number, newName: string) => {
        const newList = list.map(el => el.id === taskID ? {...el, name: newName} : el);
        props.setList(newList);
    };

    const moveUp = (index: number, direction: number) => {
        const newList = [...list];
        const currentElement = newList[index];

        newList[index] = newList[index + direction];
        newList[index + direction] = currentElement;

        props.setList(newList);
    };

    const del = (taskID: number, newStatus: boolean) => {
        const newList = list.map(el => el.id === taskID ? {...el, del: newStatus} : el);
        props.setList(newList);
    };

    const yes = (taskID: number) => {
        const newList = list.filter(el => el.id !== taskID);
        props.setList(newList);
    };

    return (
        <ul id={'tasksUl'}>
            {list.map((el, index) =>
                <ListItem el={el}
                          index={index}
                          isFirst={index !== 0}
                          isLast={index !== list.length - 1}
                          save={save}
                          done={done}
                          moveUp={moveUp}
                          edit={edit}
                          del={del}
                          yes={yes}
                />
            )}
        </ul>
    );
}