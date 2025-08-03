import React, { useEffect, useState } from 'react';
import { useGLTF } from '@react-three/drei';

interface Props {
  item: string;
  color: string;
}
const ProductModel = ({ item, color }: Props) => {
  const { scene, materials } = useGLTF(`/${item}`, true);

  useEffect(() => {
    if (item.includes('nike')) {
      if (materials['nike_logga']) {
        materials['nike_logga'].color.set(color);
      }
    } else if (item.includes('tshirt')) {
      if (materials['Material.001']) {
        materials['Material.001'].color.set(color);
        materials['Material.001'].needsUpdate = true;
      }
    } else {
      if (materials['wire_204204204_1']) {
        materials['wire_204204204_1'].color.set(color);
        materials['wire_204204204_1'].needsUpdate = true;
      }
    }
  }, [item, color, materials]);

  const needsOffset = () => {
    return item.includes('tshirt');
  };

  return (
    <primitive
      object={scene}
      scale={1.5}
      position={needsOffset() ? [0, -2.5, 0] : [0, 0, 0]}
      rotation={needsOffset() ? [-0.5, 0, 0] : [0, 0, 0]}
    />
  );
};

export default ProductModel;
