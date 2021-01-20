import React from "react";

export default function Greeting(props: {name: string}) {
    return <strong>Hi, {props.name}!!!</strong>
}