import s from "./Profile.module.css";
import React from "react";
import Preloader from "../Preloader/Preloader";

const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader/>
    } else {
        return <div className={s.content}>
            <div><img
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTA3_Po1WAynqwcS6GtqJ9Ay-XeEfjXkqBp7qcUh-4Y_4U-w64D'/>
            </div>
            <div>
                <img src={props.profile.photos.large}/>
                ava+discription
            </div>
        </div>
    }
}



export default ProfileInfo;