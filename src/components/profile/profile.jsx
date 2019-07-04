import React from 'react';
import style from './profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";


const Profile = () => {
  return  (
      <div className={style.content}>
          <ProfileInfo/>
          <MyPosts/>
      </div>
  )
}

export default Profile;