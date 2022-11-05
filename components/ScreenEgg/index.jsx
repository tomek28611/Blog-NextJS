import React from 'react';
import cl from 'classnames';
import styles from './index.module.scss';


const ScreenEgg = ({

    className
}) => {
  return (
    <div className={cl(className, styles.screenEgg)}>
          ScreenEgg  
    </div>
  )
}

export default ScreenEgg;