import { CardProps } from './Card.interface';
import styles from './Card.module.css';

const Card = ({ children }: CardProps) => {
  return <div className={styles.card}>{children}</div>;
};

export default Card;
