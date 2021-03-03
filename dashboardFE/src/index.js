import Error404Page from './pages/Error404Page.js';
import ProductsPage from './pages/ProductsPage.js';
import ProductDetailPage from './pages/ProductDetailPage.js';
import { parseRequestUrl, $ } from './utils.js';
import ProductAddPage from './pages/ProductAddPage.js';
import ProductEditPage from './pages/ProductEditPage.js';
import ListCategory from './pages/ListCategory.js';
import CategoryAddPage from './pages/CategoryAddPage.js';
import CategoryUpdate from './pages/CategoryUpdate.js';
import Login from './pages/Login.js';
import ListContact from './pages/listContact.js';

const routes = {
    '/': ListCategory,
    '/products/:id': ProductDetailPage,
    '/products': ProductsPage,
    '/addproduct': ProductAddPage,
    '/editproduct/:id': ProductEditPage,
    '/addcategory': CategoryAddPage,
    '/updatecategory/:id': CategoryUpdate,
    '/login': Login,
    '/contacts' : ListContact
}

const router = async () => {
    const request = parseRequestUrl();

    const parseUrl = (request.resource ? `/${request.resource}` : '/') +
        (request.id ? '/:id' : '');
    const screen = routes[parseUrl] ? routes[parseUrl] : Error404Page;
    if(parseUrl == '/' || parseUrl == '/updatecategory') {
        document.getElementById("title").innerHTML = 'Quản lý danh mục';
    } else if (parseUrl == '/products') {
        document.getElementById("title").innerHTML = 'Quản lý sản phẩm';
    }
    if(parseUrl == '/login') {
        $('#body-content').innerHTML = await screen.render();
        await screen.afterRender();
    } else {
        $('#main-content').innerHTML = await screen.render();
        await screen.afterRender();
    }
}
window.addEventListener('DOMContentLoaded', router);
window.addEventListener('hashchange', router)