import React from 'react';
import { Carousel } from 'react-bootstrap';
import Trip from '../../assets/images/Trip.png'
import Partner from '../../assets/images/Partner.png'
import Housemates from '../../assets/images/Housemates.png'
import Anyone from '../../assets/images/Anyone.png'
import '../styles/Home.css'
import Gray from '../../assets/images/Gray.png'
import Orange from '../../assets/images/Orange.png'
import Green from '../../assets/images/Green.png'
import { Container, } from 'react-bootstrap'

function Home(props) {
	return (
		<div className='landing'>
			<Carousel variant="dark">
				<Carousel.Item interval={2500}>
					<img
						className="d-block w-100"
						src={Trip}
						alt="First slide"
					/>
				</Carousel.Item>
				<Carousel.Item interval={2500}>
					<img
						className="d-block w-100"
						src={Housemates}
						alt="Second slide"
					/>
				</Carousel.Item>
				<Carousel.Item interval={2500}>
					<img
						className="d-block w-100"
						src={Partner}
						alt="Third slide"
					/>
				</Carousel.Item>
				<Carousel.Item interval={2500}>
					<img
						className="d-block w-100"
						src={Anyone}
						alt="Third slide"
					/>
				</Carousel.Item>
			</Carousel>

			<div className='gray' style={{ backgroundImage: `url(${Gray})` }}>
				<Container className='graytext'>
					<h1 className='grayh1'>Track Balances</h1>
					<p>
						Keep track of shared expenses,
						<br />
						balances, and who owes who.
					</p>
				</Container>
			</div>
			<div className='orange' style={{ backgroundImage: `url(${Orange})` }}>
				<Container className='orangetext'>
					<h1 className='orangeh1'>Organize expenses</h1>
					<p className='p1'>
						Split expenses with any group: trips,
						<br />
						housemates, friends, and family.
					</p>
				</Container>
			</div>
			<div className='gray' style={{ backgroundImage: `url(${Gray})` }}>
				<Container className='graytext'>
					<h1 className='grayh1'>Pay friends back</h1>
					<p>
						Settle up with a friend and record any
						<br />
						cash or online payment.
					</p>
				</Container>
			</div>
			<div className='green' style={{ backgroundImage: `url(${Green})` }}>
				<Container className='orangetext'>
					<h1 className='orangeh1'>Add expenses easily</h1>
					<p className='p1'>
						Quickly add expenses on the go before
						<br />
						you forget who paid.
					</p>
				</Container>
			</div>
		</div>


	)


}

export default Home