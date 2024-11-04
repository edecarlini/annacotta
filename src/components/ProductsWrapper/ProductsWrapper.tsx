import Products from '../Products/Products';

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

interface ProductsWrapperProps {
  products: Product[];
}

const ProductsWrapper = ({ products }: ProductsWrapperProps) => {
  console.log('🚀 ~ ProductsWrapper ~ products:', products);
  return <Products products={products} />;
};

export default ProductsWrapper;
