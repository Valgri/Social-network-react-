import React from 'react';
import style from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const Dialogs = (props) => {
    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                <div className={style.dialog + ' ' + style.active}>
                    <NavLink to='/dialogs/1'> Grisha</NavLink>
                </div>
                <div className={style.dialog}>
                    <NavLink to='/dialogs/2'>  Danil </NavLink>
                </div>
                <div className={style.dialog}>
                    <NavLink to='/dialogs/3'> Vitaliy </NavLink>
                </div>
                <div className={style.dialog}>
                    <NavLink to='/dialogs/4'> Yana </NavLink>
                </div>
            </div>
            <div className={style.messages}>
                <div className={style.dialog}>
                    Hello!
                </div>
                <div className={style.dialog}>
                    Hi!
                </div>
            </div>
        </div>

    )
}

export default  Dialogs;