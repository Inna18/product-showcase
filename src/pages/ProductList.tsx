import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProductItem from './ProductItem';
import type { Product } from '../types/types';

const ProductList = () => {
  const navigate = useNavigate();
  const [productList, setProductList] = useState<Product[]>([
    {
      id: 1,
      name: 'Nike TC 7900 Sail',
      img: './nike.png',
      url: '/models/nike.glb',
    },
    {
      id: 2,
      name: 'Basic T-Shirt',
      img: './tshirt.png',
      url: '/models/tshirt.glb',
    },
    {
      id: 3,
      name: 'Women Bag',
      img: './bag.png',
      url: '/models/bag.glb',
    },
  ]);

  const handleShowItem = (url: string) => {
    navigate(`/product${url}`);
  };

  return (
    <div className="list-container">
      <h1>All Products</h1>
      <div className="list-items">
        {productList.map((product: Product) => (
          <div
            className="item"
            key={product.id}
            onClick={() => handleShowItem(product.url)}
          >
            <img src={product.img} />
            <label htmlFor="">{product.name}</label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
