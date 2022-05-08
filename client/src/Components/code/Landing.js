import React from 'react'
import background from '../../assets/images/background.jpg'
import { Container, Row, Col } from 'react-bootstrap'
import '../styles/Landing.css'


function Landing() {
    return (
        <div style={{ backgroundImage: `url(${background})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', width: '100vw', height: '100vh', }}>
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

export default Landing
