import React from 'react'
import "./Ads.css"
import phones from "../../assets/images/phones.png"
import appleStore from "../../assets/images/appleStore.svg"
import playMarket from "../../assets/images/playMarket.svg"

const Ads = () => {
  return (
    <>
      <section className='promotion-section'>
        <div className="container">
          <div className="promotion-wrapper">
            <div className='promotion-content'>
              <h4 className='promotion-title'>
                Download our Mobile App
              </h4>
              <p className='promotion-text'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Luctus cum purus bibendum risus nibh cursus integer dolor,
                commodo. Amet, aliquam condimentum.
              </p>
              <div className='promotion-links'>
                <img src={appleStore} alt="" />
                <img src={playMarket} alt="" />
              </div>
            </div>
            <img src={phones} alt="" />
          </div>
        </div>
      </section>
    </>
  )
}

export default Ads
