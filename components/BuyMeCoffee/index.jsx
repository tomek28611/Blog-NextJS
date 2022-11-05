import React from 'react';
import cl from 'classnames';
import styles from './index.module.scss';


const BuyMeCoffee = ({
    children,
    className
}) => {
  return (
    <div className={cl(className, styles.buyCoffee)}>
        BuyMeCoffee
    </div>
  )
}

export default BuyMeCoffee;