import './index.scss';

export default function Product({product}) {
  return (
    <div key={product.id} className="category__product">
      <img src={product.image} alt={product.title} />
      <div className="wrapper">
        <div className="product__title">{product.title}</div>
        <div className="product__price">
          {"$"}
          {product.price}
        </div>
      </div>
    </div>
  );
}
