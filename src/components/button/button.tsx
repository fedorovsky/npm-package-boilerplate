import * as React from 'react';
import styles from './button.module.css';

export interface ButtonProps extends React.PropsWithChildren {
  size?: 'small' | 'medium' | 'large';
}

export const Button = ({ children, size }: ButtonProps) => {
  const handleClick = () => {
    console.log('Button clicked');
    console.log('size:', size);
  };

  return (
    <button className={styles.button} onClick={handleClick}>
      {children}
    </button>
  );
};
