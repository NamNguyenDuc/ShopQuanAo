import ProductApi from '../api/ProductApi';
import CategoryAPI from '../api/categoryAPI';

const ProductsPage = {
    async render() {
        const { data: products } = await ProductApi.getAll();
        const { data: categories } = await CategoryAPI.getAll();
        return `
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
                                <td>${product.name}</td>
                                <td>${product.price}</td>
                                <td>${categories.map(item => {
                                    if(item.id == product.categoryId) return item.name;
                                }).join(' ')}</td>
                                <td>${product.quantity}</td>
                                <td><a href="/#/product/${product.id}">Chi tiet</a></td>
                            </tr>
                        `
                    }).join(' ')}
                </tbody>
            </table>
        `
    }
}

export default ProductsPage;