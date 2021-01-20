import React from "react";

interface ILinks {
    link: string,
    title: string,
    id: string
}

interface IProps {
    footerMenuItems: ILinks[]
}

export default function FooterMenu(props: IProps) {
    return <ul id={'ulFooterMenu'}>
        {props.footerMenuItems.map(el => <li id={'liFooterMenu'} key={el.id}><a href={el.link}>{el.title}</a></li>)}
    </ul>
}