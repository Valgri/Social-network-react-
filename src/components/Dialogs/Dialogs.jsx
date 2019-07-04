import React from 'react';
import style from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) =>{
    let path = '/dialogs/' + props.id;
    return (
        <div className={style.dialog + ' ' + style.active}>
            <NavLink to={path}> {props.name} </NavLink>
        </div>
    )
}

const Message = (props) =>{
    return (
        <div className={style.dialog}>
            {props.message}
        </div>
    )
}

const Dialogs = (props) => {

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                <DialogItem name='Grisha' id='1'/>
                <DialogItem name='Danil' id='2'/>
                <DialogItem name='Vitaliy' id='3'/>
                <DialogItem name='Yana' id='4'/>
            </div>
            <div className={style.messages}>
                <Message message='Hello'/>
                <Message message='Hi!'/>
            </div>
        </div>

    )
}

export default  Dialogs;