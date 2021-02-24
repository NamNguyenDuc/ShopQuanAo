import home from './pages/Home.js';
import Error404Page from './pages/Error404Page.js';
import ProductsPage from './pages/ProductsPage.js';
import ProductDetailPage from './pages/ProductDetailPage.js';
import { parseRequestUrl, $ } from './utils.js';
import Header from './components/Header.js';
import CategoryPage from './pages/CategoryPage.js';
import ProductAddPage from './pages/ProductAddPage.js';
import ProductEditPage from './pages/ProductEditPage.js';

const routes = {
    '/': home,
    '/products/:id': ProductDetailPage,
    '/products': ProductsPage,
    '/category/:id': CategoryPage,
    '/addproduct': ProductAddPage,
    '/editproduct/:id': ProductEditPage,
}

const router = async () => {
    const request = parseRequestUrl();

    const parseUrl = (request.resource ? `/${request.resource}` : '/') +
        (request.id ? '/:id' : '');
    console.log(parseUrl);
    const screen = routes[parseUrl] ? routes[parseUrl] : Error404Page;
    // const main = $('#main-content');
    $('#header').innerHTML = await Header.render();
    $('#main-content').innerHTML = await screen.render();
    await screen.afterRender();
}
window.addEventListener('DOMContentLoaded', router);
window.addEventListener('hashchange', router)