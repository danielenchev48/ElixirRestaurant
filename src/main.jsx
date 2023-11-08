import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.scss';
import { RouterProvider } from 'react-router-dom';
import router from './router/Router.jsx';
import { Provider } from 'react-redux';
import { store } from './store/index.js';
import Footer from './components/Layout/Footer/Footer.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store} basename='/ElixirRestaurant'>
        <RouterProvider router={router} basename='/ElixirRestaurant'>
            <App />
        </RouterProvider>
    </Provider>,
);
