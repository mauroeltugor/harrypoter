import React from 'react'
import { Outlet, Link } from 'react-router-dom';


export const Header = () => {
  return (
    <>
    <div className='header'>
      <section className="title1">
      <h1>HarryBooks Store</h1>
      </section>
      <section className="links">
        <div className="link">
      <Link to="/">Home</Link>

        </div>
        <div className="link">
      <Link to="kart">Carrito</Link>

        </div>

      </section>


  
      </div>
      <Outlet/>
    </>
  )
}

export default Header;
