import { useEffect } from "react";
import {useDispatch, useSelector} from 'react-redux';
import { fetchProductsByCategory } from "../../api/productAPI";
import { setCategoryProducts} from '../../features/products/productSlice';
import Product from '../../components/product/index';
import { useParams } from "react-router-dom";

export default function Category() {
  const {category} = useParams();
  const dispatch = useDispatch();
  const products = useSelector(state => state.products);

  useEffect(() => {
    fetchProductsByCategory(category).then(products => {
      dispatch(setCategoryProducts(products));
    })
  }, [category, dispatch]);
  
  return (
    <div>
      <h1>{category}</h1>
      {products.map(product => 
        <Product key={product.id} product={product}/>)}
    </div>
  )
}
