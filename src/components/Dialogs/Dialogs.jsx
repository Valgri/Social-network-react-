import React from 'react';
import style from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Messages/Messages';



const Dialogs = (props) => {



    let dialogsElements = props.state.dialogs.map(d =>  <DialogItem name={d.name} id={d.id}/> );
    let MessagesElements = props.state.messages.map( m =>   <Message message={m.message}/> );

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