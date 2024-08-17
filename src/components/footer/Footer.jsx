import React from 'react'
import "./Footer.css"
import logo from "../../assets/images/logo.svg"
import line from "../../assets/images/line.svg"
import twitter from "../../assets/images/twitter.svg"
import facebook from "../../assets/images/facebook.svg"
import instagramm from "../../assets/images/instagramm.svg"
import github from "../../assets/images/github.svg"

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="footer-section__wrapper">
            <div className='footer-section__first-line' >
              <img style={{cursor: "pointer"}} src={logo} alt="" />
              <ul className='footer-section__list' >
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Service</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">Contact Us</a>
                </li>
              </ul>
              <div className='footer-section__links' >
                <a href="#"><img src={twitter} alt="" /></a>
                <a href="#"><img src={facebook} alt="" /></a>
                <a href="#"><img src={instagramm} alt="" /></a>
                <a href="#"><img src={github} alt="" /></a>
              </div>
            </div>
            <img src={line} alt="" />
            <div className='footer-section__copyright' >
              <p className='footer-section__copyright-text' >
              © Copyright 2022, All Rights Reserved
              </p>
              <ul className='footer-section__copyright-links' >
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Terms & Conditions</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
