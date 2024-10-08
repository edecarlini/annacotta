import { FC, ButtonHTMLAttributes, ReactNode } from 'react';
import styles from './Button.module.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

const Button: FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <button {...props} className={styles.btn_custom}>
      {children}
    </button>
  );
};

export default Button;
