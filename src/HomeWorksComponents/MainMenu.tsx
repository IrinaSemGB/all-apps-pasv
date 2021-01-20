import React from "react";

interface ILinks {
    link: string,
    title: string,
    id: string
}

interface IProps {
    mainMenuItems: ILinks[]
}

export default function MainMenu(props: IProps) {
    return <ul id='ulMainMenu'>
        {props.mainMenuItems.map(el => <li id='liMainMenu' key={el.id}><a href={el.link}>{el.title}</a></li>)}
    </ul>
}