import ProductApi from '../api/ProductApi';
const ProductsPage = {
    async render() {
        const { data: products } = await ProductApi.getAll();
        return `
            <h2>Danh sach san pham</h2>
            <div class="row">
                ${products.map(product => {
            return `
                        <div class="col-4">
                            <h4>${product.name}</h4>
                            <img src="${product.image}" />
                            <a href="/#/product/${product.id}">Chi tiet</a>
                        </div>
                    `
        }).join(" ")}
            </div>
        `
    }
}

export default ProductsPage;