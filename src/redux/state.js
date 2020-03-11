let rerenderEntireTree = () => {
    console.log('state change')
}



let state = {
    profilePage: {
        posts:[
            {id: 1, message: 'Im beagle', likes:15},
            {id: 2, message: "i love people",likes:23}
        ],
        newPostText: 'it'
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
}

window.state = state

export const addPost = () => {
    let newPost = {
        id:5,
        message: state.profilePage.newPostText,
        likesCount: 0
    };

    state.profilePage.posts.push(newPost);
    rerenderEntireTree(state);
}

export const updateNewPostText = (newText) => {
    state.profilePage.newPostText= newText;
    rerenderEntireTree(state);
}

export const subscribe = (observer) => {
    rerenderEntireTree=observer;
}


export default state;