import Image from 'next/image';
import styles from './Header.module.css';
import Link from 'next/link';
import Button from '../Button/Button';

const Header = () => {
  return (
    <header className={styles.headerNav}>
      <Image
        src='/assets/anna-cotta.svg'
        alt='anna cotta'
        width={160}
        height={60}
        style={{
          cursor: 'pointer',
        }}
      />
      <div className={styles.navigation}>
        <Link href={'#'}>
          <Button>Productos</Button>
        </Link>
        <Link href={'#'}>
          <Button>Contacto</Button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
