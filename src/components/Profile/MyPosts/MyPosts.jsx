import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";





const MyPosts = (props) => {
    let postElement = props.posts.map ((posts) => <Post message = {posts.message} likes = {posts.likes}/>)


    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch( addPostActionCreator());
    };


let onPostChange = () => {
    let text = newPostElement.current.value;
        let action =  updateNewPostTextActionCreator(text);
        props.dispatch(action);
};



    return (
    <div>
        My posts
        <div>
            new post
        </div>
        <div>
            <textarea onChange={onPostChange} ref = {newPostElement} value={props.newPostText}/>
            <button onClick={addPost}>Add post</button>
        </div>
        <div>
            {postElement}
        </div>
    </div>
    )
};



export default MyPosts;