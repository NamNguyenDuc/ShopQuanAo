import CategoryAPI from '../api/categoryAPI';
import { $ } from '../utils';

const ListCategory = {
    async render() {
        const { data: categories } = await CategoryAPI.getAll();

        return `
            <div id="categories">
                <div class="row">
                    <div class="col-10">
                    </div>
                    <div class="col-2 d-flex justify-content-center align-items-center">
                        <a href="#/addcategory" class="btn btn-primary">Thêm mới danh mục</a>
                    </div>
                </div>
                <table class="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th scope="col">STT</th>
                            <th scope="col">Tên danh mục sản phẩm</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${categories.map(category => {
                            return `
                                <tr>
                                    <td>${category.id}</td>
                                    <td><a href="#">${category.name}</a></td>
                                    <td>
                                        <a href="/#/updatecategory/${category.id}" class="btn btn-primary">Update</a>
                                        <button class="btn btn-danger btn-remove remove-product" data-id="${category.id}">Remove</button>
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
        const btns = $('#categories .remove-product');
        btns.forEach(btn => {
            const id = btn.dataset.id;
            btn.addEventListener('click', function() {
                const question = confirm('Bạn có chắc chắn muốn xóa không?')
                if(question) {
                    CategoryAPI.remove(id);
                    location.reload();
                }
            })
        })
    }
}

export default ListCategory;