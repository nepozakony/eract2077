import React from "react";
import s from './Messages.module.css'
import {NavLink} from "react-router-dom";

function List(props) {
    return (
        <div className={s.chatWith + ' ' + s.active}>
            <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
        </div>
    )
}

function Message(props) {
    return (
        <div> {props.message}
        </div>
    )
}

const Messages = (props) => {


    let dialogsData = [
        {id: 1, name: 'Петя'},
        {id: 2, name: 'Оля'},
        {id: 3, name: 'Вася'},
        {id: 4, name: 'Антон'},
        {id: 5, name: 'Любовь'},
        {id: 6, name: 'Яна'},
    ]

    let ChatElements = dialogsData.map(d => <dialogsData {d.name} {d.id} />);


    let messagesData = [
        {id 1 message: 'Привет!'},
        {id 2 message: 'првет'},
        {id 3 message: 'выаоллыа'},
        {id 4 message: 'блабллабала'},
        {id 5 message: 'аладц тцатцаца'},
        {id 6 message: 'цацуалкалкул кулп ку'},
    ]

    let DialogsElements = messagesData.map(m => <messagesData {m.message} />);

    return (
        <div className={s.page}>
            <div className={s.chatList}>
                {ChatElements} тут должен быть список контактов
            </div>

            <div className={s.dialog}>
                {DialogsElements} а тут сообщения
            </div>
        </div>
    )
}


export default Messages