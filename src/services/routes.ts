import ProductsPage from "../page/Products/ProductsPage";
import ProductSinglePage from '../page/ProductSingle/ProductSinglePage';
import NewsPage from "../page/News/NewsPage";
import HomePage from "../page/Home/HomePage";
import DriverPage from "../page/Driver/DriverPage";
import AboutPage from "../page/About/AboutPage";
import ShoppingCartPage from '../page/ShoppingCart/ShoppingCartPage';
import CheckoutLoginPage from '../page/Checkout/CheckoutLogin/CheckoutLoginPage';

const checkoutLoginRoutes = {
    key: '/checkoutLogin',
    path: '/checkoutLogin',
    component: CheckoutLoginPage,
    exact: true,
}

const shoppingRoutes = {
    key: `/shopping`,
    path: '/shopping',
    component: ShoppingCartPage,
    exact: true,
}
const aboutRoutes = {
    key: `/about`,
    path: '/about',
    component: AboutPage,
    exact: true,
};
const productsRoutes = {
    key: `/products`,
    path: '/products',
    component: ProductsPage,
    exact: true,
};
const productSingleRoutes = {
    key: `/product`,
    path: '/product/:id',
    component: ProductSinglePage,
    exact: true,
}
const newsRoutes = {
    key: `/news`,
    path: '/news',
    component: NewsPage,
    exact: true,
};
const homeRoutes = {
    key: `/nvidia`,
    path: '/nvidia',
    component: HomePage,
    exact: true,
};
const driverRoutes = {
    key: `/driver`,
    path: '/driver',
    component: DriverPage,
    exact: true,
};

export const routes = [
    aboutRoutes,
    productsRoutes,
    productSingleRoutes,
    newsRoutes,
    homeRoutes,
    driverRoutes,
    shoppingRoutes,
    checkoutLoginRoutes
]