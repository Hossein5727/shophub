import HomePage from './pages/HomePage'
import Layout from './Layout/Layout'
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
      <Layout>
        <Routes> 
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Layout>
  );
}

export default App;
