import React from 'react';
import cl from 'classnames';
import styles from './index.module.scss';


const Post = ({

    className
}) => {
  return (
    <div className={cl(className, styles.post)}>
            Post
    </div>
  )
}

export default Post;