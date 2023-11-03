import React, { useEffect, useState } from 'react';
import { getData } from '../../helpers/harryPotterApi';
import Target from '../Target/Target';

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getData(); 
        setProducts(data);
      } catch (error) {
        console.error('Error al obtener datos:', error);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="container">
      {products.map((product) => (
        <Target key={product.id} book={product} /> 
      ))}
    </div>
  );
}

export default Home;
