import * as React from 'react';
import styles from './button.module.css';

export const Button = () => {
  const handleClick = () => {
    console.log('Button clicked');
  };

  return (
    <button className={styles.button} onClick={handleClick}>
      Click me!
    </button>
  );
};
