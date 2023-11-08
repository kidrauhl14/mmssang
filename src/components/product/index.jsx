import { Link } from 'react-router-dom';
import './index.scss';

export default function Product({product}) {
  return (
    <Link to={`/product/${product.id}`} className='product__link'>
      <div key={product.id} className="category__product">
        <div className="category__product-wrapper">
          <img src={product.image} alt={product.title} />
          <div className="wrapper">
            <div className="product__title">{product.title}</div>
            <div className="product__price">
              {"$"}
              {product.price}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
