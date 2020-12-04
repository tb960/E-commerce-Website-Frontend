import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import icons1 from '../../assets/pandp.svg';
import icons2 from '../../assets/Subscriptions.svg';
import icons3 from '../../assets/F_B.svg';
import icons4 from '../../assets/CustSat.svg'
import './services.css';

function Services() {
    return(
        <div className="center justify-content-center">
        <Row>
            <Col>
                <h2 className="headingh1">Designed For You</h2>
                <p className="headingp"> For businesses.</p>
            </Col>
        </Row>
        <Row className ="icon">
            <Col>
                <img className ="img-size icon-size" src={icons1}></img>
                <p className="heading-pad headingh5">Parcels and Packages</p>
            </Col>
            <Col>
                <img className ="img-size icon-size" src={icons2}></img>
                <p className="heading-pad headingh5" >Subcriptions</p>
            </Col>
        </Row>
        <Row className ="icon-2">
            <Col>
                <img className ="img-size icon-size" src={icons3}></img>
                <h5 className="heading-pad headingh5" >Food & Beverages</h5>
            </Col>
            <Col>
                <img className ="img-size icon-size" src={icons4}></img>
                <h5 className="heading-pad headingh5" >Customer Satisfaction</h5>
            </Col>
        </Row>
        </div>
    );
}

export default Services