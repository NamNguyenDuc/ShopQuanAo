import ProductApi from '../api/ProductApi';
import CategoryAPI from '../api/categoryAPI';
import { parseRequestUrl, $ } from '../utils';

const ProductEditPage = {
    async render() {
        const { id } = parseRequestUrl();
        const { data: product} = await ProductApi.get(id);
        const { data: categories } = await CategoryAPI.getAll();
        return /*html*/`
            <form id="form-update">
                <div class="form-group">
                    <div class="row">
                        <div class="col-12 mb-3">
                            <label for="name">Tên sản phẩm</label>
                            <input type="text" placeholder="Nhập tên sản phẩm" id="product-name" class="form-control" value="${product.name}" />
                        </div>
                        <div class="col-12 mb-3">
                            <label for="price">Giá sản phẩm</label>
                            <input type="text" placeholder="Nhập giá sản phẩm" id="product-price" class="form-control" value="${product.price}" />
                        </div>
                        <div class="col-12 mb-3">
                            <label for="category">Chọn loại sản phẩm</label>
                            <select class="form-control" id="category">
                                ${categories.map(item => {
                                    return `
                                        <option value="${item.id}" ${product.categoryId == item.id ? "selected" : ''}>${item.name}</option>
                                    `
                                })}
                            </select>
                        </div>
                        <div class="col-12 mb-3">
                            <label for="quantity">Số lượng sản phẩm</label>
                            <input type="number" placeholder="Nhập số lượng sản phẩm" id="product-quantity" class="form-control" value="${product.quantity}" />
                        </div>
                        <div class="col-12">
                            <input type="submit" class="btn btn-primary w-100" value="Lưu lại" />
                        </div>
                    </div>
                </div>
            </form>
        `
    },
    
    afterRender() {
        $('#form-update').addEventListener('submit', async e => {
            e.preventDefault();
            const { id } = parseRequestUrl();
            const { data: product} = await ProductApi.get(id);
            const newProduct = {
                ...product,
                name: $('#product-name').value,
                price: $('#product-price').value,
                categoryId: $('#category').value,
                quantity: Number($('#product-quantity').value)
            }
            ProductApi.update(id, newProduct);
            location.href = '#/products'
        })
    }
}

export default ProductEditPage;