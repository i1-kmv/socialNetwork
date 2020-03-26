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
            ]
        }
    },
    getState() {
        return this._state;
    },
    _callSubscriber ()  {
        console.log('state change')
    },
    addPost ()  {
        let newPost = {
            id:5,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },
    updateNewPostText (newText) {
        this._state.profilePage.newPostText= newText;
        this._callSubscriber(this._state);
    },
    subscribe (observer) {
        this._callSubscriber=observer;
    }
}


let rerenderEntireTree = () => {
    console.log('state change')
}

export default store;
window.store = store