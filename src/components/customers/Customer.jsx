import React from 'react'
import "./Customer.css"
import sliders from "../../assets/images/sliders.svg"
import Customers__card from '../customers__card/Customers__card'

const Customer = ({ customers }) => {
  return (
    <>
      <section className='customer-section' >
        <div className="container">
          <div className="customer-section__header">
            <h3 className='customer-section__header-title' >
              What our customer
              say about this
            </h3>
            <img style={{cursor: "pointer"}} src={sliders} alt="" />
          </div>
          <div className='customer-section__commits' >
            {
              customers.map(customer =>
                <Customers__card customer={customer}/>
              )
            }
          </div>
        </div>
      </section>
    </>
  )
}

export default Customer
