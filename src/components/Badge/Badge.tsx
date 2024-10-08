import React from 'react';
import styles from './Badge.module.css';

interface BadgeProps {
  text: string | React.ReactNode;
  variant?: 'default' | 'success' | 'error' | 'warning';
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
}

const Badge: React.FC<BadgeProps> = ({
  text,
  variant = 'default',
  position = 'top-right',
}) => {
  return (
    <span className={`${styles.badge} ${styles[variant]} ${styles[position]}`}>
      {text}
    </span>
  );
};

export default Badge;
