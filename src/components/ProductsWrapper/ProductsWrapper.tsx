import Image from 'next/image';
import Card from '../Card/Card';
import Badge from '../Badge/Badge';
import priceTransformer from '@/utils/priceTransformer';
import styles from './ProductsWrapper.module.css';

export interface Product {
  id: number;
  product_name: string;
  description: string;
  type: string;
  price: number;
  stock: number;
  status: string;
  notes: string;
}
const ProductsWrapper = ({ products }: Product[]) => {
  console.log('🚀 ~ ProductsWrapper ~ products:', products);
  return (
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
          Una deliciosa chocotorta hecha con capas de galletitas de chocolate,
          dulce de leche y queso crema. Un clásico argentino que enamora con
          cada bocado.
        </p>
      </div>
    </Card>
  );
};

export default ProductsWrapper;
