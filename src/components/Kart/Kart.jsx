import React from 'react';

const Kart = ({ cart }) => {
  return (
    <div>
      <h2>Carrito de Compras</h2>
      {cart ? (
        <ul>
          {cart.map((book) => (
            <li key={book.id}>
              {book.name} - Precio: ${book.price}
            </li>
          ))}
        </ul>
      ) : (
        <p>El carrito está vacío</p>
      )}
    </div>
  );
}

export default Kart; 
