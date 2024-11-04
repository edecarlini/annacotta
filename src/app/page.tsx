import Footer from '@/components/Footer/Footer';
import ProductsWrapper from '@/components/ProductsWrapper/ProductsWrapper';
import api from '@/services/api.service';
import styles from './page.module.css';

export default async function Home() {
  const products = await api.products.fetch();

  return (
    <>
      <div className={styles.page}>
        <main className={styles.main}>
          <ProductsWrapper products={products} />
          {/* <Products products={data} /> */}
        </main>
        <Footer />
      </div>
    </>
  );
}
