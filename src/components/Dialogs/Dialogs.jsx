import React from "react";
import s from './Dialogs.module.css'
import Message from "./Message/Message";
import DialogsItem from "./DialogItem/DialogsItem";




const Dialogs = (props) => {


    let dialogElements = props.state.dialogs.map ( dialog => <DialogsItem name={dialog.name} id={dialog.id}/>)




    let messagesElement = props.state.messages.map (m => <Message message={m.message } />)
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                {messagesElement}
            </div>
        </div>
    );
}

export default Dialogs;