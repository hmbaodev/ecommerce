import { Product } from "../types";
import ProductCard from "./ProductCard";

interface ProductCarouselProps {
  products: Product[];
  className: string;
  limit?: number;
}

const ProductCarousel: React.FC<ProductCarouselProps> = ({
  products,
  className,
  limit,
}) => {
  const displayedProducts = limit ? products.slice(0, limit) : products;

  return (
    <div className={className}>
      {displayedProducts.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  );
};

export default ProductCarousel;
