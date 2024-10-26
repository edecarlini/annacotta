import ProductsWrapper from '@/components/ProductsWrapper/ProductsWrapper';
import styles from './page.module.css';
import { getProducts } from '@/services/api.service';

export default function Home() {
  const data = getProducts();
  console.log('🚀 ~ Home ~ data:', data);
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.grid}>
          <ProductsWrapper products={data} />
        </div>
      </main>
      <footer className={styles.footer}>Footer</footer>
    </div>
  );
}
