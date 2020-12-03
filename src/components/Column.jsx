import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Services from './services/services.jsx'
import Reasons from './services/reason.jsx';
import './Container.css'

function TopRow() {
    return(
        <div className="container1">
            <Container>
                <Row>
                    <Col className ="container-color" sm={12} md={6}> 
                        <Container fluid>
                            <Services/>
                        </Container>
                    </Col>
                    <Col className ="container-black" sm={12} md={6}> 
                        <Container fluid>
                            <Reasons/>
                        </Container>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default TopRow