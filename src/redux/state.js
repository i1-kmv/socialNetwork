const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';


const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';



let store = {
    _state: {
        profilePage: {
            posts:[
                {id: 1, message: 'Im beagle', likes:15},
                {id: 2, message: "i love people",likes:23}
            ],
            newPostText: 'it-kamasutra.com'
        },
        dialogsPage:{
            dialogs:[
                {id: 1, name: 'Dimych'},
                {id: 2, name: "Andrey"},
                {id: 3, name: "Sveta"},
                {id: 4, name: "Sasha"},
                {id: 5, name: "Viktor"},
                {id: 6, name: "Valera"}
            ],
            messages:[
                {id: 1, message: 'Hi'},
                {id: 2, message: "Hi"},
                {id: 3, message: "Hi"},
                {id: 4, message: "Hi"},
                {id: 5, message: "Hi"},
                {id: 6, message: "Hi"}
            ],
            newMessageBody: ""
        }
    },
    getState() {
        return this._state;
    },
    _callSubscriber ()  {
        console.log('state change')
    },
    subscribe (observer) {
        this._callSubscriber=observer;
    },
    dispatch(action) {
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE-NEW-MESSAGE-BODY') {
            this._state.dialogsPage.newMessageBody = action.body;
            this._callSubscriber(this._state);
        } else if (action.type === 'SEND-MESSAGE') {
            let body = this._state.dialogsPage.newMessageBody;
            this._state.dialogsPage.newMessageBody = '';
            this._state.dialogsPage.messages.push({id: 6, message: body});
            this._callSubscriber(this._state);
        }
    }
};
export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text });

export const sendMessageCreator = () => ({ type: SEND_MESSAGE });
export const updateNewMessgeBodyCreator = (text) => ({ type: UPDATE_NEW_MESSAGE_BODY, body: text });

let rerenderEntireTree = () => {
    console.log('state change')
};

export default store;
window.store = store;