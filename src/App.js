import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header/Header";
import Nav from "./components/Navbar/Nav";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/News/News";
import Musik from "./components/Musik/Musik";
import Settings from "./components/Settings/Settings";
import {updateNewPostText} from "./redux/state";

const App = (props) => {




    return (

            <div className='app-wrapper'>
                <Header/>
                <Nav/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs' render={() => <Dialogs store = {props.store}  addPost={props.addPost} />}/>
                    <Route path='/profile' render={() => <Profile profilePage={props.state.profilePage} dispatch={props.dispatch} />}/>
                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/musik' render={() => <Musik/>}/>
                    <Route path='/settings' render={() => <Settings/>}/>

                </div>
            </div>

    );
}

export default App;
