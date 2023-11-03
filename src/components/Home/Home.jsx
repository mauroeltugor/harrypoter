import React, { useEffect, useState } from 'react';
import { getData } from '../../helpers/harryPotterApi';
import Target from '../Target/Target';
import Kart from '../Kart/Kart';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

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

  const addToCart = (selectedProduct) => {
    if (selectedProduct.stock > 0) {
      // Actualiza el estado del carrito
      setCart((prevCart) => {
        const existingCartItem = prevCart.find((item) => item.id === selectedProduct.id);

        if (existingCartItem) {
          return prevCart.map((item) => {
            if (item.id === selectedProduct.id) {
              return { ...item, quantity: item.quantity + 1 };
            }
            return item;
          });
        } else {
          return [...prevCart, { ...selectedProduct, quantity: 1 }];
        }
      });

      // Resta uno al stock del producto seleccionado
      setProducts((prevProducts) =>
        prevProducts.map((product) =>
          product.id === selectedProduct.id
            ? { ...product, stock: product.stock - 1 }
            : product
        )
      );
    }
  };

  return (
    <div className="container">
      {products.map((product) => (
        <Target
          key={product.id}
          book={product}
          onBuy={() => addToCart(product)}
        />
      ))}
      <Kart cart={cart} />
    </div>
  );

}

export default Home;
