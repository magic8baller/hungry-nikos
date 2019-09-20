import React from 'react'
import img from '../NIKOS.png'
const Banner = () => {
	return (

		<div>
			<h1 style={{fontSize: '4rem'}} className='text-center'>NIKOS IS SO HUNGRY!</h1>
			<p></p>
<div className='container text-center '>

		<img className='img-card-top' src={img} alt='nikos' style={{height: '60%', width: '60%'}} />
</div>
		</div>

	)
}

export default Banner
