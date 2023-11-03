import { Routes, Route } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { getData } from "./helpers/harryPotterApi";
import Home from "./components/Home/Home";
import Kart from "./components/Kart/Kart";

import './App.css'
import { useState, useEffect } from "react";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [cartTotal, setCartTotal] = useState(0); // Agregar el estado para el monto total del carrito

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

      // Actualiza el monto total del carrito
      setCartTotal((prevTotal) => prevTotal + selectedProduct.price);

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
    <>
      <Header />
      <Routes>
        <Route path="/kart" element={<Kart cart={cart} cartTotal={cartTotal} addToCart={addToCart} book={products}/>} /> 
        <Route path="/" element={<Home products={products} addToCart={addToCart} /> } />
      </Routes>
    </>
  )
}

export default App;
