import React from 'react';
import style from './Post.module.css'


const Post = (props) => {
  return  (
          <div className={style.item} >
            <img src="https://whatsism.com/uploads/posts/2018-07/1530544023_n6fgwzftnvg.jpg" alt=""/>
            {props.message}
            <div>
              <span>like</span>
            </div>
          </div>
                   
          
  )
}

export default Post;