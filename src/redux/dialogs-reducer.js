const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
    dialogs: [
        {id: 1, name: 'Dimych'},
        {id: 2, name: "Andrey"},
        {id: 3, name: "Sveta"},
        {id: 4, name: "Sasha"},
        {id: 5, name: "Viktor"},
        {id: 6, name: "Valera"}
    ],
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: "Hi"},
        {id: 3, message: "Hi"},
        {id: 4, message: "Hi"},
        {id: 5, message: "Hi"},
        {id: 6, message: "Hi"}
    ],
    newMessageBody: ""
};

const dialogsReducer = (state = initialState , action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY: {
            let stateCopy = {...state};
            stateCopy.newMessageBody = action.body;
            return stateCopy;
        }
        case SEND_MESSAGE: {
            let stateCopy = {...state};
            stateCopy.messages = [...state.messages]
            let body = stateCopy.newMessageBody;
            stateCopy.messages.push({id: 7, message: body});
            stateCopy.newMessageBody = '';
            return stateCopy;
        }
        default:
            return state;
    }
}

export const sendMessageCreator = () => ({ type: SEND_MESSAGE });
export const updateNewMessageBodyCreator = (body) =>
    ({ type: UPDATE_NEW_MESSAGE_BODY, body: body });

export default dialogsReducer;