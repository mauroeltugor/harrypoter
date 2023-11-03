import React, { useEffect, useState } from 'react';
import Target from '../Target/Target';

const Home = ({products, addToCart}) => {


  return (
    <div className="container">
      {products.map((product) => (
        <Target
          key={product.id}
          book={product}
          onBuy={() => addToCart(product)}
        />
      ))}
    </div>
  );

}

export default Home;
