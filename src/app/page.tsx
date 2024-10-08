import Card from '@/components/Card/Card';
import styles from './page.module.css';
import Image from 'next/image';
import Badge from '@/components/Badge/Badge';
import priceTransformer from '@/utils/priceTransformer';

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.grid}>
          <Card>
            <div className={styles.cardImage}>
              <Image
                src='/assets/chocotorta.png'
                alt='chocotorta'
                width={280}
                height={170}
              />
              <Badge
                text={priceTransformer({ price: 1200 })}
                variant='success'
                position='bottom-right'
              />
            </div>
            <div className={styles.cardContent}>
              <h1 className={styles.title}>Chocotorta</h1>
              <p className={styles.description}>
                Una deliciosa chocotorta hecha con capas de galletitas de
                chocolate, dulce de leche y queso crema. Un clásico argentino
                que enamora con cada bocado.
              </p>
            </div>
          </Card>
          <Card>
            <div className={styles.cardImage}>
              <Image
                src='/assets/cheesecake.png'
                alt='cheesecake'
                width={280}
                height={170}
              />
              <Badge
                text={priceTransformer({ price: 1500 })}
                variant='success'
                position='bottom-right'
              />
            </div>
            <div className={styles.cardContent}>
              <h1 className={styles.title}>Cheesecake</h1>
              <p className={styles.description}>
                Delicioso cheesecake de textura suave y cremosa, con un toque de
                vainilla y una base crujiente de galleta. Perfecto para los
                amantes de lo dulce.
              </p>
            </div>
          </Card>
          <Card>
            <div className={styles.cardImage}>
              <Image
                src='/assets/brownie.png'
                alt='brownie'
                width={280}
                height={170}
              />
              <Badge
                text={priceTransformer({ price: 1600 })}
                variant='success'
                position='bottom-right'
              />
            </div>
            <div className={styles.cardContent}>
              <h1 className={styles.title}>Brownie</h1>
              <p className={styles.description}>
                Brownie de chocolate intenso, húmedo y con trozos de nuez, ideal
                para acompañar con helado o disfrutar solo. Un placer para los
                chocoadictos.
              </p>
            </div>
          </Card>
        </div>
      </main>
      <footer className={styles.footer}>Footer</footer>
    </div>
  );
}
