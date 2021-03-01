import CategoryAPI from '../api/categoryAPI';
import { $ } from '../utils.js';

const CategoryAddPage = {
    async render() {
        const { data: categories } = await CategoryAPI.getAll();
        return /*html*/`
            <form id="form-add">
                <div class="form-group">
                    <div class="row">
                        <div class="col-12 mb-3">
                            <label for="name">Tên danh mục sản phẩm</label>
                            <input type="text" placeholder="Nhập danh mục sản phẩm" id="category-name" class="form-control" />
                        </div>
                        <div class="col-12">
                            <input type="submit" class="btn btn-primary w-100" value="Thêm danh mục mới" />
                        </div>
                    </div>
                </div>
            </form>
        `
    },

    async afterRender() {
        $('#form-add').addEventListener('submit', async e => {
            e.preventDefault();
            const { data: categories } = await CategoryAPI.getAll();
            const category = {
                id: categories.length + 1,
                name: $('#category-name').value,
            }
            CategoryAPI.add(category);
            location.href = '#/categories'
        })
    }
}

export default CategoryAddPage;