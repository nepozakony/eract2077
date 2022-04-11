import React from "react";
import s from './Messages.module.css'
import {NavLink} from "react-router-dom";

function List({id, name}) {
    return (
        <div className={s.chatWith + ' ' + s.active}>
            <NavLink to={'/dialogs/' + id}>{name}</NavLink>
        </div>
    )
}

function Message({message}) {
    return (
        <div> {message}
        </div>
    )
}

const Messages = () => {
    let dialogsData = [
        {id: 1, name: 'Петя'},
        {id: 2, name: 'Оля'},
        {id: 3, name: 'Вася'},
        {id: 4, name: 'Антон'},
        {id: 5, name: 'Любовь'},
        {id: 6, name: 'Яна'},
    ]

    let ChatElements = dialogsData.map((d, id) => <List key={id} id={d.id} name={d.name}/>);

    let messagesData = [
        {id: 1, message: 'Привет!'},
        {id: 2, message: 'првет'},
        {id: 3, message: 'выаоллыа'},
        {id: 4, message: 'блабллабала'},
        {id: 5, message: 'аладц тцатцаца'},
        {id: 6, message: 'цацуалкалкул кулп ку'},
    ]

    let DialogsElements = messagesData.map((m, id) => <Message key={id} message={m.message}/>);

    return (
        <div className={s.page}>
            <div className={s.chatList}>
                {ChatElements}
            </div>

            <div className={s.dialog}>
                {DialogsElements}
            </div>
        </div>
    )
}


export default Messages