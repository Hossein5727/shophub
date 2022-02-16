import HomePage from './pages/HomePage'
import Layout from './Layout/Layout'
import { Route, Routes } from "react-router-dom";
import ShopPage from './pages/ShopPage';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProductListProvider from './provider/ProductListProvider';
import BasketCartPage from './pages/BasketCartPage';
import BasketCartProvider from './provider/BasketCartProvider';
import BLogPage from './pages/BLogPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop/*" element={<ShopPage />} />
        <Route path="/basket" element={<BasketCartPage />} />
        <Route path="/blog" element={<BLogPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <ToastContainer />
    </Layout>
  );
}

export default App;
