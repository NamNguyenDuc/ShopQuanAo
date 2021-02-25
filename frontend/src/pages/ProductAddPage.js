import ProductApi from '../api/ProductApi.js';
import CategoryAPI from '../api/categoryAPI';
import { $ } from '../utils.js';
import firebase from 'firebase';

const ProductAddPage = {
    async render() {
        const { data: categories } = await CategoryAPI.getAll();
        return /*html*/`
            <form id="form-add">
                <div class="form-group">
                    <div class="row">
                        <div class="col-12 mb-3">
                            <label for="name">Tên sản phẩm</label>
                            <input type="text" placeholder="Nhập tên sản phẩm" id="product-name" class="form-control" />
                        </div>
                        <div class="col-12 mb-3">
                            <label for="price">Giá sản phẩm</label>
                            <input type="text" placeholder="Nhập giá sản phẩm" id="product-price" class="form-control" />
                        </div>
                        <div class="col-12 mb-3">
                            <label for="category">Chọn loại sản phẩm</label>
                            <select class="form-control" id="category">
                                ${categories.map(item => {
                                    return `
                                        <option value="${item.id}">${item.name}</option>
                                    `
                                })}
                            </select>
                        </div>
                        <div class="col-12 mb-3">
                            <label for="quantity">Số lượng sản phẩm</label>
                            <input type="number" placeholder="Nhập số lượng sản phẩm" id="product-quantity" class="form-control" />
                        </div>
                        <div class="col-12 mb-3">
                            <label for="file">Ảnh sản phẩm</label>
                            <input type="file" placeholder="" id="product-image" class="form-control" />
                        </div>
                        <div class="col-12">
                            <input type="submit" class="btn btn-primary w-100" value="Thêm sản phẩm mới" />
                        </div>
                    </div>
                </div>
            </form>
        `
    },

    async afterRender() {
        $('#form-add').addEventListener('submit', async e => {
            e.preventDefault();
            const { data: listProducts } = await ProductApi.getAll();
            const product = {
                id: listProducts.length + 1,
                name: $('#product-name').value,
                price: $('#product-price').value,
                categoryId: $('#category').value,
                quantity: Number($('#product-quantity').value)
            }
            ProductApi.add(product);
            location.href = '#/products'
        })
    }
}

export default ProductAddPage