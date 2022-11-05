import React from 'react';
import cl from 'classnames';
import styles from './index.module.scss';


const Title = ({
    children,
    className
}) => {
  return (
    <div className={cl(className, styles.title)}>
           {children}
    </div>
  )
}

export default Title;