import React from 'react'
import "./Cards.css"
import rating__star from "../../assets/images/rating__star.svg"
import deliver from "../../assets/images/deliver.svg"
import clock from "../../assets/images/clock.svg"
import line_up from "../../assets/images/line_up.svg"
import favorite from "../../assets/images/favorite.svg"

const Cards = ({product}) => {
  return (
    <div className='product-card'>
      <img src={product.image} alt="" />
      <img className='favorite-icon' src={favorite} alt="" />
      <div className='product-card-content'>
        <div className='product-card-header'>
          <p className='product-title'>{product.title}</p>
          <p className='product-rating'><img src={rating__star} alt="" />{product.rating}</p>
        </div>
        <div className='product-card-footer'>
          <p className='product-delivery'><img src={deliver} alt="" />{product.delivery}</p>
          <img width={"1px"} height={"18px"} src={line_up} alt="" />
          <p className='product-delivery'><img src={clock} alt="" />{product.deliveryTime}</p>
        </div>
        <button className='order-button'>Order Now</button>
      </div>
    </div>
  )
}

export default Cards
