import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, ContactShadows } from '@react-three/drei';
import ProductModel from '../components/ProductModel';
import Overlay from '../components/Overlay';

const ProductItem = () => {
  const location = useLocation();
  const fullPath = location.pathname; // e.g. "/product-showcase/product/models/nike.glb"
  const url = fullPath.replace('/product-showcase/product/', ''); // "models/nike.glb"

  const [color, setColor] = useState<string>('#FFFFFF');
  const [item, setItem] = useState<string>('');

  useEffect(() => {
    setItem(url);
  }, []);

  return (
    <div className="container">
      <Canvas camera={{ position: [0, 1.5, 2], fov: 50 }}>
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 5, 5]} intensity={1} castShadow />
        <OrbitControls enablePan={false} />
        <ProductModel item={item} color={color} />
        <Environment preset="city" />
        <ContactShadows position={[0, -1.2, 0]} opacity={0.4} />
      </Canvas>
      <Overlay item={item} onColorChange={setColor} />
      <div className="description">
        
      </div>
    </div>
  );
};

export default ProductItem;
