import { element } from 'prop-types';
import CheckoutPage from '../components/Checkout/CheckoutPage';
import AboutPage from '../components/Pages/AboutPage/AboutPage';
import ErrorPage from '../components/Pages/ErrorPage/ErrorPage';
import GalleryPage from '../components/Pages/GalleryPage/GalleryPage';
import HomePage from '../components/Pages/HomePage/HomePage';
import LocationPage from '../components/Pages/LocationPage/LocationPage';
import ChangePasswordUI from '../components/Pages/LoginPage/ChangePasswordUI';
import MenuPage from '../components/Pages/MenuPage/MenuPage';
import OrderHistoryPage from '../components/Pages/OrderHistoryPage.jsx/OrderHistoryPage';
import OrderPage from '../components/Pages/OrderPage/OrderPage';
import AccountOrders from '../components/Pages/AccountPage/AccountOrders/AccountOrders';
import ReservationPage from '../components/Pages/ReservationPage/ReservationPage';
import StyleGuide from '../components/Pages/StyleGuidePage/StyleGuide';
import TakeawayPage from '../components/Pages/TakeawayPage/TakeawayPage';
import AccountOverview from '../components/Pages/AccountPage/AccountOverview/AccountOverview';
import ChangePassword from '../components/Pages/AccountPage/ChangePassword/ChangePassword';
import ConfirmationAccPage from '../components/Pages/ConfirmationAccPage/ConfirmationAccPage';

const routes = {
    home: {
        path: '/ElixirRestaurant',
        element: <HomePage />,
        name: 'home',
        includeInNav: false,
    },
    about: {
        path: '/ElixirRestaurant/about',
        element: <AboutPage />,
        name: 'about',
        includeInNav: true,
    },
    menu: {
        path: '/ElixirRestaurant/menu',
        element: <MenuPage />,
        name: 'menu',
        includeInNav: true,
    },
    gallery: {
        path: '/ElixirRestaurant/gallery',
        element: <GalleryPage />,
        name: 'gallery',
        includeInNav: true,
    },
    order: {
        path: '/ElixirRestaurant/orders',
        element: <OrderPage />,
        name: 'order',
        includeInNav: true,
    },
    checkout: {
        path: '/ElixirRestaurant/checkout',
        element: <CheckoutPage />,
        name: 'checkout',
        includeInNav: false,
    },
    reservations: {
        path: '/ElixirRestaurant/reservations',
        element: <ReservationPage />,
        name: 'reservations',
        includeInNav: true,
    },
    location: {
        path: '/ElixirRestaurant/location',
        element: <LocationPage />,
        name: 'location',
        includeInNav: false,
    },
    orderHistory: {
        path: '/ElixirRestaurant/orderHistory',
        element: <OrderHistoryPage />,
        name: 'orderHistory',
        includeInNav: false,
    },
    takeAway: {
        path: '/ElixirRestaurant/takeAway',
        element: <TakeawayPage />,
        name: 'takeAway',
        includeInNav: false,
    },
    accountOverview: {
        path: '/ElixirRestaurant/account',
        element: <AccountOverview />,
        name: 'account',
        includeInNav: false,
    },
    accountOrders: {
        path: '/ElixirRestaurant/account/orders',
        element: <AccountOrders />,
        name: 'profilePage',
        includeInNav: false,
    },
    accountChangePassword: {
        path: '/ElixirRestaurant/account/changePassword',
        element: <ChangePassword />,
        name: 'changePassword',
        includeInNav: false,
    },
    styleGuide: {
        path: '/ElixirRestaurant/styleGuide',
        element: <StyleGuide />,
        name: 'styleGuide',
        includeInNav: false,
    },
    errorPage: {
        path: '/ElixirRestaurant/styleGuide',
        element: <ErrorPage />,
        name: 'errorPage',
        includeInNav: false,
    },
    changePassword: {
        path: '/ElixirRestaurant/changePassword/:id',
        element: <ChangePasswordUI />,
        name: 'changePassword',
        includeInNav: false,
    },
    confirmAccRegistration: {
        path: '/ElixirRestaurant/confirmRegistration/:id',
        element: <ConfirmationAccPage />,
        name: 'confirmationRegistration',
        includeInNav: false,
    },
};

export default routes;
