import React from 'react';
import cl from 'classnames';
import styles from './index.module.scss';


const PostGrid = ({

    className
}) => {
  return (
    <div className={cl(className, styles.postGrid)}>
            PostGrid
    </div>
  )
}

export default PostGrid;