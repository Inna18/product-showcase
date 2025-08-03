import React from 'react';
import { ClipLoader } from 'react-spinners';

const Loader = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: 50 }}>
      <ClipLoader color="#FFFFFF" />
    </div>
  );
};

export default Loader;
