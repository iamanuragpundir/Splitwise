import React from 'react'
import background from '../../assets/images/background.jpg'
import { Container, Row, Col } from 'react-bootstrap'
import '../styles/Home.css'

function Home(props) {
	return (
		<div className="landing" style={{ backgroundImage: `url(${background})`}}>
			<div className='content'>
				<Row>
					<Col sm={1}>&nbsp;</Col>
					<Col>
						<Container>
							<h1>Splitwise</h1>
							<h3 className='texts'>Less stress when sharing expenses with housemates.</h3>
							<p className="text">
								Keep track of your shared expenses and balances
								{' '}
								<br />
								with housemates, trips, groups, friends, and family.
							</p>
						</Container>
					</Col>
					<Col>&nbsp;</Col>
				</Row>
			</div>
		</div>
	)
}

export default Home