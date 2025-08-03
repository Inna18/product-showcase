import React, { useEffect, useState } from 'react';
import type { Product } from '../types/types';

interface OverlayProps {
  item: string;
  onColorChange: (color: string) => void;
}
const COLORS = ['#FFFFFF', '#D5B895', '#0B6623', '#D30000'];
const Overlay = ({ item, onColorChange }: OverlayProps) => {
  const [productColors, setProductColors] = useState<string[]>(COLORS);
  const [productName, setProductName] = useState<string>('');

  useEffect(() => {
    if (item.includes('nike')) {
      setProductColors(COLORS);
      setProductName('Nike TC 7900 Sail');
    } else if (item.includes('tshirt')) {
      setProductColors(COLORS.filter((c) => c !== '#D30000'));
      setProductName('Basic T-Shirt');
    } else {
      setProductColors(
        COLORS.filter((c) => c !== '#D30000' && c !== '#0B6623')
      );
      setProductName('Women Bag');
    }
  }, [item]);
  return (
    <div className="overlay">
      <h1>{productName}</h1>
      <h3>Choose a color: </h3>
      <div className="colors">
        {productColors.map((c) => (
          <button
            key={c}
            className="color-btn"
            style={{ backgroundColor: c }}
            onClick={() => onColorChange(c)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Overlay;
