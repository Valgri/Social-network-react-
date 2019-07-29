import React from 'react';
import style from './profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";



const Profile = (props) => {
  return  (
      <div className={style.content}>
          <ProfileInfo/>
          <MyPosts posts={props.state.posts} addPost ={props.addPost}/>
      </div>
  )
}

export default Profile;