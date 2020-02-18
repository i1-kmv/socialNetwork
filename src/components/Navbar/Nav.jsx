import React from "react";
import s from './Nav.module.css'


const Nav = () => {
    return  <nav className={s.nav}>
        <div>
            <a href='/profile'>Profile</a>
        </div>
        <div>
            <a href='/dialogs'>Message</a>
        </div>
        <div>
            <a href='/news'>News</a>
        </div>
        <div>
            <a href='/musik'>Music</a>
        </div>
        <div>
            <a href='/settings'>Settings</a>
        </div>
    </nav>
}

export default Nav;