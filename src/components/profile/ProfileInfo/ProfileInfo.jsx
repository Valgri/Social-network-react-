import React from 'react';
import style from './ProfileInfo.module.css';


const ProfileInfo = () => {
  return  (
         <div>
             <div>
                 <img
                     src="https://healinglab.org/wp-content/uploads/2016/08/header-abstract-neural-network-1200x200.jpg"
                     alt=""/>
             </div>
             <div className={style.description}>
                 ava + description
             </div>
         </div>
  )
}

export default ProfileInfo;