import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductList from './pages/ProductList';
import ProductItem from './pages/ProductItem';

function App() {
  return (
    <Router basename="/product-showcase">
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/product/*" element={<ProductItem />} />
      </Routes>
    </Router>
  );
}

export default App;
