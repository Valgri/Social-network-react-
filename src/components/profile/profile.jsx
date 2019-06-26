import React from 'react';
import style from './profile.module.css';
import MyPosts from './MyPosts/MyPosts'


const Profile = () => {
  return  (
            <div className={style.content}>
                <div>
                  <img src="https://healinglab.org/wp-content/uploads/2016/08/header-abstract-neural-network-1200x200.jpg" alt="" />
                </div>
                <div> ava + description</div>
               <MyPosts/>
          </div>
  )
}

export default Profile;