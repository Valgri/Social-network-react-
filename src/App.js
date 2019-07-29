import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import Profile from './components/profile/profile';
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";

const App = (props) => {




  return (
          <div className="app-wrapper">
              <Header/>
              <Navigation/>
              <div className="app-wrapper-content">
                  <Route path='/dialogs' render={() => <Dialogs state={props.state.dialogsPage}/>}/>
                  <Route path='/profile' render={() => <Profile state={props.state.profilePage}
                  addPost = {props.addPost}/>}/>
              </div>
          </div>

  );

}

export default App;
