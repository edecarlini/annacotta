import Link from 'next/link';
import styles from './Footer.module.css';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className={styles['footer-container']}>
      <div className={styles['footer-container-extra']}>
        <h3>Redes sociales</h3>
        <Link href={'https://wa.me/5492615188639'} target='blank'>
          Whatsapp
        </Link>
        <Link
          href={'https://www.instagram.com/annacotta.pasteleria/'}
          target='blank'
        >
          Instagram
        </Link>
        <Link
          href={'https://www.facebook.com/annacotta.pasteleria/'}
          target='blank'
        >
          Facebook
        </Link>
      </div>
      <div className={styles['footer-container-image']}>
        <Image
          src='/assets/anna-cotta.svg'
          alt='anna cotta'
          width={320}
          height={120}
        />
      </div>
      <div className={styles['footer-container-social']}>
        <h3>Redes sociales</h3>
        <Link href={'https://wa.me/5492615188639'} target='blank'>
          Whatsapp
        </Link>
        <Link
          href={'https://www.instagram.com/annacotta.pasteleria/'}
          target='blank'
        >
          Instagram
        </Link>
        <Link
          href={'https://www.facebook.com/annacotta.pasteleria/'}
          target='blank'
        >
          Facebook
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
