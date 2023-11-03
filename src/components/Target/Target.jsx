import React from 'react'

export const Target = ({ movie }) => {
  return (
    <>
    
    <div className='bookCard'>
      <section className="bookImg">
        <img src={movie.caratulaURL} alt={movie.titulo} className='img'/>
      </section>
       
        <section className="side">
            <h2 className='title'>{movie.titulo}</h2>
            <p>Año: {movie.año}</p>
            <p>Precio: ${movie.precioDolares}</p>
            <p>Stock: {movie.stock} unidades</p>
            <button className="comprar">
              COMPRAR
            </button>
        </section>
        
    </div>
    </>
  )
}

export default Target;