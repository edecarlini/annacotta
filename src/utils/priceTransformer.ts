interface PriceTransformerProps {
  price: number;
  language?: string;
  currency?: string;
}

const priceTransformer = ({
  price,
  language = 'es-AR',
  currency = 'ARS',
}: PriceTransformerProps): string => {
  return new Intl.NumberFormat(language, {
    style: 'currency',
    currency: currency,
  }).format(price);
};

export default priceTransformer;
