import { loadAbort } from '@/utils/loadAbort';
import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const getProducts = () => {
  const controller = loadAbort();
  return {
    call: axios.get(`${API_URL}`, { signal: controller.signal }),
    controller,
  };
};
