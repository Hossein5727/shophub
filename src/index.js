import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.scss'
import 'animate.css';
import BasketCartProvider from './provider/BasketCartProvider';
import ProductListProvider from './provider/ProductListProvider';

ReactDOM.render(
  <BasketCartProvider>
    <ProductListProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ProductListProvider>
  </BasketCartProvider>,
  document.getElementById('root')
);
