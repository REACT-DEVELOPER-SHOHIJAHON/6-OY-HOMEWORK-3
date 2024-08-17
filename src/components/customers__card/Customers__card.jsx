import React from 'react'
import "./Customers__card.css"
import stars from "../../assets/images/stars.svg"


const Customers__card = ({customer}) => {
	return (
		<>
			<div className='customer__card' >
				<img src={stars} alt="" />
				<p className='customer__commit' >
					{customer.commit}
				</p>
				<div className='customer__info-wrapper' >
					<img src={customer.avatar} alt="" />
					<div className='customer__info'>
						<p className='customer__fullName' >
							{customer.fullName}
						</p>
						<p className='customer__job' >
							{customer.job}
						</p>
					</div>
				</div>
			</div>
		</>
	)
}

export default Customers__card