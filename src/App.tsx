import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductList from './pages/ProductList';
import ProductItem from './pages/ProductItem';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/product-showcase" element={<ProductList />} />
        <Route path="/product-showcase/product/*" element={<ProductItem />} />
      </Routes>
    </Router>
  );
}

export default App;
