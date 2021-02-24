import ProductApi from '../api/ProductApi';
import CategoryAPI from '../api/categoryAPI';
import { $, reRender } from '../utils';

const ProductsPage = {
    async render() {
        const { data: products } = await ProductApi.getAll();
        const { data: categories } = await CategoryAPI.getAll();
        return `
        <div id="list-products">
            <div class="row">
                <div class="col-8">
                    <h2>Danh sách sản phẩm</h2>
                </div>
                <div class="col-4 d-flex justify-content-center align-items-center">
                    <a href="/#/addproduct">Thêm mới sản phẩm</a>
                </div>
            </div>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">STT</th>
                        <th scope="col">Tên sản phẩm</th>
                        <th scope="col">Giá sản phẩm</th>
                        <th scope="col">Số lượng</th>
                        <th scope="col">Danh mục</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    ${products.map(product => {
                        return `
                            <tr>
                                <td>${product.id}</td>
                                <td><a href="/#/products/${product.id}">${product.name}</a></td>
                                <td>${product.price}</td>
                                <td>${categories.map(item => {
                                    if(item.id == product.categoryId) return item.name;
                                }).join(' ')}</td>
                                <td>${product.quantity}</td>
                                <td>
                                    <a href="/#/editproduct/${product.id}" class="btn btn-primary">Update</a>
                                    <button class="btn btn-danger btn-remove remove-product" data-id="${product.id}">Remove</button>
                                </td>
                            </tr>
                        `
                    }).join(' ')}
                </tbody>
            </table>
        </div>
        `
    }, 

    async afterRender() {
        const btns = $('#list-products .remove-product');
        btns.forEach(btn => {
            const id = btn.dataset.id;
            console.log(id);
            btn.addEventListener('click', function() {
                const question = confirm('Bạn có chắc chắn muốn xóa không?')
                if(question) {
                    ProductApi.remove(id);
                    location.reload();
                }
            })
        })
    }
}

export default ProductsPage;