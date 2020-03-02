import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";

let MyPosts;
MyPosts = () => {
    let postData = [
        {id: 1, message: 'Im beagle', likes:15},
        {id: 2, message: "i love people",likes:23},
    ]

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
            <Post message = {postData[0].message} likes = {postData[0].likes}/>
            <Post message = {postData[1].message} likes = {postData[1].likes}/>
        </div>
    </div>

};



export default MyPosts;