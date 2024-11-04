import Image from 'next/image';
import styles from './Header.module.css';

const Header = () => {
  return (
    <nav className={styles.navbar}>
      <Image
        // src='/assets/anna-cotta-primary.svg'
        src={'/assets/anna-cotta-secondary.svg'}
        alt='anna cotta'
        width={160}
        height={60}
        style={{
          cursor: 'pointer',
        }}
      />
      {/* <div className={styles.navigation}>
        <Link href={'#'}>
          <Button>Productos</Button>
        </Link>
        <Link href={'#'}>
          <Button>Contacto</Button>
        </Link>
      </div> */}
    </nav>
  );
};

export default Header;
