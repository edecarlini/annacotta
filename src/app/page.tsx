import Products from '@/components/Products/Products';
import parseTsvToJson from '@/utils/parseTsvToJson';
import styles from './page.module.css';
import Footer from '@/components/Footer/Footer';

export default async function Home() {
  const API_URL = `${process.env.NEXT_PUBLIC_API_URL}`;
  const data = await fetch(API_URL)
    .then((response) => {
      return response.text();
    })
    .then((data) => {
      const parsedJson = parseTsvToJson(data);
      return parsedJson;
    })
    .catch((error) => {
      console.error(error);
      return [];
    });

  return (
    <>
      <div className={styles.page}>
        <main className={styles.main}>
          <Products products={data} />
        </main>
        <Footer />
      </div>
    </>
  );
}
