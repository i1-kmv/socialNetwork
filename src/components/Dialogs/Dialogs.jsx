import React from "react";
import s from './Dialogs.module.css'
import Message from "./Message/Message";
import DialogsItem from "./DialogItem/DialogsItem";
import {sendMessageCreator, updateNewMessgeBodyCreator} from "../../redux/state";




const Dialogs = (props) => {

    let state = props.store.getState().dialogsPage;

    let dialogElements = state.dialogs.map ( dialog => <DialogsItem name={dialog.name} id={dialog.id}/>)
    let messagesElement =state.messages.map (m => <Message message={m.message } />)
    let newMessageBody = state.newMessageBody;
    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator())
    }

    let onNewMessageChange = (e) => {
       let body = e.target.value;
       props.store.dispatch(updateNewMessgeBodyCreator(body))
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElement}</div>
                <div>
                    <div><textarea value={newMessageBody}
                                   onChange={onNewMessageChange}
                                   placeholder='Enter your message'></textarea></div>
                    <div><button onClick={onSendMessageClick}>Send</button></div>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;