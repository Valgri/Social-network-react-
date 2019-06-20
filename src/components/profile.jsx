import React from 'react';
import style from './profile.module.css'


const Profile = () => {
  return  (
            <div className={style.content}>
                <div>
                  <img src="https://healinglab.org/wp-content/uploads/2016/08/header-abstract-neural-network-1200x200.jpg" alt="" />
                </div>
                <div> ava + description</div>
                <div>
                    My posts
                </div>
                <div>
                    New post
                </div>
                <div className={style.posts}>
                    <div className={style.item} >Post 1</div>
                    <div className={style.item} > Post 2</div>
                </div> 
          </div>
  )
}

export default Profile;