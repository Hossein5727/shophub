import { Route, Routes } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Layout from './Layout/Layout'
import { BasketCartPage, BLogPage, CheckoutPage, ContactPage, HomePage, ShopPage } from "./pages";


function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop/*" element={<ShopPage />} />
        <Route path="/basket" element={<BasketCartPage />} />
        <Route path="/blog" element={<BLogPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
      </Routes>
      <ToastContainer />
    </Layout>
  );
}

export default App;
