const ListCategory = {
    async render() {
        const { data: categories } = await CategoryAPI.getAll();

        return `
            <div id="list-products">
            <div class="row">
                <div class="col-8">
                    <h2>Danh sách sản phẩm</h2>
                </div>
                <div class="col-4 d-flex justify-content-center align-items-center">
                    <a href="/#/" class="btn btn-primary">Thêm mới sản phẩm</a>
                </div>
            </div>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">STT</th>
                        <th scope="col">Tên danh mục sản phẩm</th>
                    </tr>
                </thead>
                <tbody>
                    ${categories.map(product => {
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
    }
}

export default ListCategory;