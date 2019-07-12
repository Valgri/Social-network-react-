import React from 'react';
import style from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Messages/Messages';



const Dialogs = (props) => {

    let dialogs = [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Danil'},
        {id: 3, name: 'Vitaliy'},
        {id: 4, name: 'Yana'}
    ]
    let messages = [
        {id: 1, message: 'Hello'},
        {id: 2, message: 'Whats up'},
    ];

    let dialogsElements = dialogs.map(d =>  <DialogItem name={d.name} id={d.id}/> );
    let MessagesElements = messages.map( m =>   <Message message={m.message}/> );

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={style.messages}>
                {MessagesElements}
            </div>
        </div>

    )
}

export default  Dialogs;