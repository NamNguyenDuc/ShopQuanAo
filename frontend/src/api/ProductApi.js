import { axiosClient } from './axiosClient';

const ProductApi = {
    getAll() {
        const url = `/products`;
        return axiosClient.get(url);
    },

    get(id) {
        const url = `/products/${id}`;
        return axiosClient.get(url);
    },

    add(product) {
        const url = `/products`;
        return axiosClient.post(url, product);
    },

    remove(id) {

    }
}
export default ProductApi;