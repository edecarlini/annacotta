import { Product } from '@/components/ProductsWrapper/ProductsWrapper';

function tsvToJson(tsvString: string): Product[] {
  const lines = tsvString.split('\n');
  const headers = lines[0].split('\t');

  const jsonResult: Product[] = lines.slice(1).map((line) => {
    const values = line.split('\t');
    const jsonObject: Product = {
      id: parseInt(values[headers.indexOf('id')]) || 0,
      product_name: values[headers.indexOf('product_name')]?.trim() || '',
      description: values[headers.indexOf('description')]?.trim() || '',
      type: values[headers.indexOf('type')]?.trim() || '',
      price: parseFloat(values[headers.indexOf('price')]) || 0,
      stock: parseInt(values[headers.indexOf('stock')]) || 0,
      status: values[headers.indexOf('status')]?.trim() || '',
      notes: values[headers.indexOf('notes')]?.trim() || '',
    };
    return jsonObject;
  });

  return jsonResult;
}

export default tsvToJson;
