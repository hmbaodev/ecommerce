import { Product } from "../types";
import ProductCard from "./ProductCard";

interface ProductCarouselProps {
  products: Product[];
  className: string;
}

const ProductCarousel: React.FC<ProductCarouselProps> = ({
  products,
  className,
}) => {
  return (
    <div className={className}>
      {products.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  );
};

export default ProductCarousel;
