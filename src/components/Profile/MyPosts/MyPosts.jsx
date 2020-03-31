import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";





const MyPosts = (props) => {
    let postElement = props.posts.map ((posts) => <Post message = {posts.message} likes = {posts.likes}/>)


    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost();
    };


let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
};



    return (
    <div>
        My posts
        <div>
            new post
        </div>
        <div>
            <textarea onChange={onPostChange} ref = {newPostElement} value={props.newPostText}/>
            <button onClick={onAddPost}>Add post</button>
        </div>
        <div>
            {postElement}
        </div>
    </div>
    )
};



export default MyPosts;