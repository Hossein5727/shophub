import HomePage from './pages/HomePage'
import Layout from './Layout/Layout'
import { Route, Routes } from "react-router-dom";
import ShopPage from './pages/ShopPage';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProductListProvider from './provider/ProductListProvider';

function App() {
  return (
    <ProductListProvider>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop/*" element={<ShopPage />} />
        </Routes>
        <ToastContainer />
      </Layout>
    </ProductListProvider>
  );
}

export default App;
