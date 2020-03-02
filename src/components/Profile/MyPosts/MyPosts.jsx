import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";

let MyPosts;
MyPosts = () => {
    let postData = [
        {id: 1, message: 'Im beagle', likes:15},
        {id: 2, message: "i love people",likes:23},
    ]

    let postElement = postData.map ((p) => <Post message = {p.message} likes = {p.likes}/>)

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
            {postElement}
        </div>
    </div>

};



export default MyPosts;