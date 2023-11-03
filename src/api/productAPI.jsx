import axios from 'axios';

// 메인페이지(HomePage)에서 사용
const fetchAllProducts = async () => {
    try{
        const response = await axios.get('https://fakestoreapi.com/products');
        return response.data;

    } catch(error){
        console.error("Error fetching all products:", error);
        throw error;
    }
};

// 카테고리별 페이지에서 사용
const fetchProductsByCategory = async (category) => {
    try{
        const response =  await axios.get('https://fakestoreapi.com/products/category/${category}');
        return response.data;

    } catch(error) {
        console.error('Error fetching ${category} products:', error);
        throw error;
    }
}

// 상품 상세페이지에서 사용
const fetchProductById = async(productId) => {
    try {
        const response = await axios.get('https://fakestoreapi.com/products/${productId}');
        return response.data;
    } catch(error) {
        console.error('Error fetching product ${productId} details:', error);
    }
}

export {fetchAllProducts, fetchProductsByCategory, fetchProductById};