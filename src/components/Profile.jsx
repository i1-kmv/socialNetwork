import React from 'react';
import s from './Profile.module.css'

const Profile = () => {
    return <div className={s.content}>
            <div><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTA3_Po1WAynqwcS6GtqJ9Ay-XeEfjXkqBp7qcUh-4Y_4U-w64D'/></div>
        <div> ava+discription </div>
        <div>
            My post
            <div>
                new post
            </div>
            <div>
                post1
            </div>
            <div>
                post2
            </div>
        </div>
    </div>
};



export default Profile;