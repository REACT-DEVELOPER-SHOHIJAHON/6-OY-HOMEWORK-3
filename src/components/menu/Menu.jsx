import React from 'react'
import "./menu.css"
import Cards from '../cards/Cards'

const Menu = ({ products }) => {
  return (
    <>
      <section className='menu-section' >
        <div className="container">
          <div className="menu-section__wrapper">
            <h3 className='menu-section__title' >
              Special Menu for you
            </h3>
            <p className='menu-section__subtitle' >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Luctus cum purus bibendum risus <br />
              nibh cursus integer dolor, commodo. Amet, aliquam condimentum.
            </p>
            <div className='menu-section__cards' >
                {
                  products.map(product => 
                    <Cards product={product} />
                  )
                }
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Menu
