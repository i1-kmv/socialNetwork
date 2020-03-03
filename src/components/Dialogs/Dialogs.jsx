import React from "react";
import s from './Dialogs.module.css'
import Message from "./Message/Message";
import DialogsItem from "./DialogItem/DialogsItem";




const Dialogs = (props) => {

    let dialogs = [
        {id: 1, name: 'Dimych'},
        {id: 2, name: "Andrey"},
        {id: 3, name: "Sveta"},
        {id: 4, name: "Sasha"},
        {id: 5, name: "Viktor"},
        {id: 6, name: "Valera"}
        ]

    let dialogElements = dialogs.map ( dialog => <DialogsItem name={dialog.name} id={dialog.id}/>)



    let messages = [
        {id: 1, message: 'Hi'},
        {id: 2, message: "Hi"},
        {id: 3, message: "Hi"},
        {id: 4, message: "Hi"},
        {id: 5, message: "Hi"},
        {id: 6, message: "Hi"}
    ]

    let messagesElement = messages.map (m => <Message message={m.message } />)
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