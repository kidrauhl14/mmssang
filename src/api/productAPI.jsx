import axios from 'axios';

export const fetchProducts = () => {
    return axios.get('https://fakestoreapi.com/products')
    .then(response => {
        return response.data;
    })
    .catch(error => {
        console.error('상품 정보를 가져오는 중에 에러 발생', error);
    });
};