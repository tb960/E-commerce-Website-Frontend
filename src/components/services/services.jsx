import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import icons1 from '../../assets/box.png';
import icons2 from '../../assets/Subscriptions.png';
import icons3 from '../../assets/fandb.png';
import icons4 from '../../assets/vas.png'
import './services.css';

function Services() {
    return(
        <div className="center justify-content-center">
        <Row>
            <Col>
                <h2 className="headingh1">Designed For You</h2>
                <p className="headingh3"> For bussiness, by professionals. </p>
                <p className="headingh4" >When you say specialisation, we can show it all.</p>
            </Col>
        </Row>
        <Row className ="icon">
            <Col sm={6}>
                <img className ="icon-size" src={icons1}></img>
                <p className="heading-pad headingh5">Parcels and Packages</p>
            </Col>
            <Col sm={6}>
                <img className ="icon-size" src={icons2}></img>
                <p className="heading-pad headingh5" >Subcriptions</p>
            </Col>
        </Row>
        <Row className ="icon-2">
            <Col sm={6}>
                <img className ="icon-size" src={icons3}></img>
                <h5 className="heading-pad headingh5" >Food & Beverages</h5>
            </Col>
            <Col sm={6}>
                <img className ="icon-size" src={icons4}></img>
                <h5 className="heading-pad headingh5" >Customer Satisfaction</h5>
            </Col>
        </Row>
        </div>
    );
}

export default Services