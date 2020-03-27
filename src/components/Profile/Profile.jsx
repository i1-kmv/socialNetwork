import React from 'react';
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import {updateNewPostText} from "../../redux/state";

const Profile = (props) => {


    return <div className={s.content}>
            <div><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTA3_Po1WAynqwcS6GtqJ9Ay-XeEfjXkqBp7qcUh-4Y_4U-w64D'/></div>
        <div> ava+discription </div>
        <MyPosts posts={props.profilePage.posts}
                 newPostText={props.profilePage.newPostText}
                 dispatch={props.dispatch}/>
    </div>
};



export default Profile;