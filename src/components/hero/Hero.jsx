import React from 'react'
import "./Hero.css"
import hero from "../../assets/images/hero.png"
import delivery from "../../assets/images/delivery.png"
import play from "../../assets/images/play.svg"

const Hero = () => {
  return (
    <>
      <section className='hero-section' >
        <div className="hero-section__container">
          <div className="hero-section__wrapper">
              <div className='hero-section__content' >
                <img width={"191px"} height={"50px"} src={delivery} alt="" />
                <h2 className='hero-section__title' >
                  Fastest
                   <span className='hero-section__title-highlight' > Delivery</span> & 
                  Esay <span className='hero-section__title-highlight' >Pickup.</span>
                </h2>
                <p className='hero-section__text' >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Imperdiet tempus felis vitae sit est quisque.
                </p>
                <div className='hero-section__actions' >
                  <button className='hero-section__button' >Order Now</button>
                  <div className='hero-section__play-wrapper' >
                    <img src={play} alt="" />
                    <p className='hero-section__play-text' >
                      Watch Video
                    </p>
                  </div>
                </div>
              </div>
              <div className='hero-section__media' >
                <img width={"649px"} height={"606px"} src={hero} alt="" />
              </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero
