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
import { Container, Row, Col } from 'react-bootstrap'

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
						src={Partner}
						alt="Second slide"
					/>
				</Carousel.Item>
				<Carousel.Item interval={2500}>
					<img
						className="d-block w-100"
						src={Housemates}
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















			<div>
				<img src={Gray} className='gray' />
			</div>

			<div>
				<img src={Orange} className='orange' />
			</div>
			<div>
				<img src={Gray} className='gray' />
			</div>
			<div>
				<img src={Green} className='green' />
			</div>
		</div>


	)


}

export default Home