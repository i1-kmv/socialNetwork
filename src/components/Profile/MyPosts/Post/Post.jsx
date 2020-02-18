import React from 'react';
import s from './Post.module.css'

let Post;
Post = (props) => {
    return <div>
        <img className={s.images} src = "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT9MvvCu2uZUeq_EYdsKE132cebunludxEJniucd8ejNSIp3TWP"/>
        {props.message}
        <div><span> likes {props.likes}</span></div>
        </div>
};



export default Post;