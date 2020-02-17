import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";

let MyPosts;
MyPosts = () => {
    return <div>
        My posts
        <div>
            new post
        </div>
        <div>
            <textarea></textarea>
            <button>Add post</button>
        </div>
        <div>
            <Post />
        </div>
    </div>

};



export default MyPosts;