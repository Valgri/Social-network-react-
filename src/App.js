import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import Profile from './components/profile/profile';
import Dialogs from "./components/Dialogs/Dialogs";

const App = () => {
  return (
    <div className="app-wrapper">
      <Header/>
      <Navigation/>

      <div className="app-wrapper-content">
          <Dialogs/>
          {/*<Profile/>*/}
      </div>

    </div>
  );
}

export default App;
