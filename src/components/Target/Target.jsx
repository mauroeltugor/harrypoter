import React from 'react';

const Target = ({ book, onBuy }) => {
  return (
    <div className='bookCard'>
      <section className="bookImg">
        <img src={book.image} alt={book.name} className='img' />
      </section>
      <section className="side">
        <h2 className='title'>{book.name}</h2>
        <p>Precio: ${book.price}</p>
        <p>Stock: {book.stock} unidades</p>
        <button className="comprar" onClick={onBuy}>
          Comprar
        </button>
      </section>
    </div>
  );
}

export default Target;
