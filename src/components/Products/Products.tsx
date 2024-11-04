import Image from 'next/image';
import Card from '../Card/Card';
import Badge from '../Badge/Badge';
import priceTransformer from '@/utils/priceTransformer';
import styles from './Products.module.css';

interface ProductProps {
  products: Product[];
}

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
const Products = ({ products }: ProductProps) => {
  return (
    <section className={styles['products-container']}>
      {products?.map(({ id, product_name, description, price }) => {
        return (
          <Card key={id}>
            <div className={styles['product-card-image']}>
              <Image
                src={`/assets/${product_name.toLowerCase()}.png`}
                alt={``}
                width={280}
                height={170}
                style={{ objectFit: 'cover' }}
              />
              <Badge
                text={priceTransformer({ price: price })}
                variant='success'
                position='bottom-right'
              />
            </div>
            <div className={styles['product-card-content']}>
              <h1 className={styles['product-card-content-title']}>
                {product_name}
              </h1>
              <p className={styles['product-card-content-description']}>
                {description}
              </p>
            </div>
          </Card>
        );
      })}
    </section>
  );
};

export default Products;
