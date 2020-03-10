import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";



const MyPosts = (props) => {


    let postElement = props.posts.map ((posts) => <Post message = {posts.message} likes = {posts.likes}/>)

    return (
    <div>
        My posts
        <div>
            new post
        </div>
        <div>
            <textarea></textarea>
            <button>Add post</button>
        </div>
        <div>
            {postElement}
        </div>
    </div>
    )
};



export default MyPosts;