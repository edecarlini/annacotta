import { Product } from '@/components/ProductsWrapper/ProductsWrapper';
import { loadAbort } from '@/utils/loadAbort';
import axios from 'axios';
import Papa from 'papaparse';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

type Result = {
  data: Product[];
};

export const getProducts = () => {
  const controller = loadAbort();
  return {
    call: axios.get(`${API_URL}`, { signal: controller.signal }),
    controller,
  };
};

const api = {
  products: {
    fetch: async () => {
      const res = await fetch(`${API_URL}`);
      const data = await res.text();
      const parsed = await new Promise<Product[]>((resolve, reject) => {
        Papa.parse<Product>(data, {
          header: true,
          complete: (result: Result) => resolve(result.data),
          error: reject,
          delimiter: '\t', // Especifica el delimitador como tabulación
          skipEmptyLines: true, // Omitir líneas vacías
        });
      });

      return parsed;
    },
  },
};

export default api;
