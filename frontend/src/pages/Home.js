import ProductAPI from './../api/ProductApi.js';
class Home {
    static async render() {
        //const { products } = data;
        const { data } = await ProductAPI.getAll();
        return `
                <div class="danhmuc-sp">

                    ${data.map(item => {
            return `
                            <div class="all-sp">
                                    <div class="imgg">
                                        <a href="/#/products/${item.id}"><img src="${item.image}" class="img-fluid" width="100%" height="350px" alt=""></a>
                                    </div>
                                    <div class="ten">
                                        <a href="">${item.name}</a>
                                        <p>${item.price} <b>$</b> </p>
                                    </div>
                                    <div class="text">
                                        <a href="/#/products/${item.id}"> <button class="nnn">Xem Chi Tiết  <i class="fa fa-eye" aria-hidden="true"></i></button> </a>
                                    </div>
                            </div>
                        `;
        }).join("")}
                </div>
            `
    }
};
export default Home;