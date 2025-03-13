import { Link } from "react-router";

import { Product } from "../types";

interface ProductCardProps {
  product: Partial<Pick<Product, "id" | "name" | "price" | "image">>;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Link
      to={`/product/${product.id}`}
      className="cursor-pointer"
      key={product.id}
    >
      <div className="overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="transition ease-in-out hover:scale-110"
        />
      </div>
      <p className="text-16-primary-normal pt-3 pb-1">{product.name}</p>
      {product.price && (
        <span className="text-14-primary-medium">
          ${product.price.toFixed(2)}
        </span>
      )}
    </Link>
  );
};

export default ProductCard;
