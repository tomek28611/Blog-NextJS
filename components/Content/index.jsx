import React from 'react';
import cl from 'classnames';
import styles from './index.module.scss';


const Content = ({
    children,
    className
}) => {
  return (
    <div className={cl(className, styles.content)}>
        {children}
    </div>
  )
}

export default Content;