import React from 'react';
import './profile.css'


const Profile = () => {
  return  (
            <div className='content'>
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
                <div className="posts">
                    <div className='item' >Post 1</div>
                    <div className='item' > Post 2</div>
                </div> 
          </div>
  )
}

export default Profile;