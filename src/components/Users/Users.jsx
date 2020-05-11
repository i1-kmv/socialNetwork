import React from "react";
import styles from './Users.module.css'

const Users = (props) => {

    if (props.users.length === 0) {

        props.setUsers(
            [
                {
                    id: 1,
                    photoUrl: 'http://img.kupigolos.ru/parody/5ac489ca3b5dd.jpg?p=voice&s=54015779b5c485f8498fbe32554c0bb5',
                    follower: false,
                    fullName: 'Dmitry',
                    status: 'Im a boss',
                    location: {city: 'Minsk', country: 'Belarus'}
                },
                {
                    id: 2,
                    photoUrl: 'http://img.kupigolos.ru/parody/5ac489ca3b5dd.jpg?p=voice&s=54015779b5c485f8498fbe32554c0bb5',
                    follower: true,
                    fullName: 'Sasha',
                    status: 'Im a boss',
                    location: {city: 'Moscow', country: 'Russia'}
                },
                {
                    id: 3,
                    photoUrl: 'http://img.kupigolos.ru/parody/5ac489ca3b5dd.jpg?p=voice&s=54015779b5c485f8498fbe32554c0bb5',
                    follower: false,
                    fullName: 'Andrew',
                    status: 'Im a boss',
                    location: {city: 'Kiev', country: 'Ukraine'}
                }

            ]
        )
    }

    return (

        <div>
            {
                props.users.map(u => <div key={u.id}>
            <span>
                <div>
                    <img src={u.photoUrl} className={styles.userPhoto}/>
                </div>
                <div>
                     {u.follower ?  <button onClick={()=>{props.unfollow(u.id)}}> Unfollow </button>
                         :  <button onClick={()=>{props.follow(u.id)}}>Follow</button> }

                </div>
            </span>
                    <span>
                <span>
                    <div>{u.fullName}</div>
                    <div>{u.status}</div>
                </span>
                <span>
                    <div>{u.location.country}</div>
                    <div>{u.location.city}</div>
                </span>
            </span>
                </div>)
            }
        </div>
    )

};

export default Users;