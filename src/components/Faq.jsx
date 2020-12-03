
import Container from 'react-bootstrap/Container'
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Table from './Price.jsx';
import { useAccordionToggle } from "react-bootstrap/AccordionToggle";
import React, { useState } from 'react';
import './Faq.css'

function CustomToggle({ children, eventKey }) {
    const decoratedOnClick = useAccordionToggle(eventKey, () =>
      console.log("toggle clicked")
    );  return (
      <button
        type="button"
        style={{ backgroundColor: "orange" }}
        onClick={decoratedOnClick}
      >
        {children}
      </button>
    );
}

function questions() {
    return(
        <Container fluid >
            <div className="div-components">
                <h1 className="main-title">FAQs</h1>
                <div class="FAQ-list faq-style">
                <Accordion>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="0">What is Orange Express?</Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body>Established in 2018, we are a delivery partner for businesses islandwide. We have a fleet of full time and part-time private hire drivers to meet your delivery needs.</Card.Body>
                            </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="1">How do I schedule deliveries for my orders?</Accordion.Toggle>
                        <Accordion.Collapse eventKey="1">
                            <Card.Body>Booking and scheduling our deliveries is a simple process! You can either schedule it through our website or contact our sales team at 88135512 or email us at joseph@freshcars.sg. We will get back to you as soon as possible! </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="2">Can I request for specific delivery timings for certain orders within the route?</Accordion.Toggle>
                        <Accordion.Collapse eventKey="2">
                            <Card.Body>We can accommodate on a best-effort basis, and at an additional cost of $5 per special delivery. For example, if your delivery window is between 3pm to 7pm, and you request one delivery to arrive specifically before 4pm, this will be an additional $5.</Card.Body>
                            </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="3">What are your delivery timings?</Accordion.Toggle>
                        <Accordion.Collapse eventKey="3">
                            <Card.Body>We deliver 24/7. However, the operating hours for our customer support are Monday to Friday, 10 am - 7 pm.</Card.Body>
                            </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="4">What is the minimum number of deliveries?</Accordion.Toggle>
                        <Accordion.Collapse eventKey="4">
                            <Card.Body>No surcharges for ten or above deliveries. There will be surcharges below ten deliveries. </Card.Body>
                            </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="5">How early in advance do you need to know the orders for a given day?</Accordion.Toggle>
                        <Accordion.Collapse eventKey="5">
                            <Card.Body>
                                <ul>
                                    <li>For deliveries before 3pm - submit by 8pm the day before.</li>
                                    <li>For deliveries after 3pm - submit by 10am on the same day.</li>
                                </ul>
                                </Card.Body>
                            </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="10">Pricing</Accordion.Toggle>
                        <Accordion.Collapse eventKey="10">
                            <Card.Body>
                                <Table/>
                            </Card.Body>
                            </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="6">Will you inform my customers when you reach?</Accordion.Toggle>
                        <Accordion.Collapse eventKey="6">
                            <Card.Body>
                                <p>We provide an auto-SMS service at an additional cost. This service will inform your customers on delivery progress in 3 messages:</p>
                                <ul>
                                    <li>6am on the day of delivery, informing them that their delivery is arriving that day.</li>
                                    <li>When the delivery is less than 30 minutes away</li>
                                    <li>After the delivery, to confirm that it has been completed</li>
                                </ul>
                                <p>This service costs $0.28 per delivery. Please contact us if you wish to add on this service!</p>
                            </Card.Body>
                            </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="7">Do you have a weight limit?</Accordion.Toggle>
                        <Accordion.Collapse eventKey="7">
                            <Card.Body>Standard charge has a limit of 10kg. Items greater than 10kg but less than 20kg incur a surcharge of $1. </Card.Body>
                            </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="8">Will an invoice be issued after a delivery is completed?</Accordion.Toggle>
                        <Accordion.Collapse eventKey="8">
                            <Card.Body>Yes, an online invoice will be emailed to your registered email address with us, upon every completion of delivery. </Card.Body>
                            </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="9">Got another question?</Accordion.Toggle>
                        <Accordion.Collapse eventKey="9">
                            <Card.Body>
                                <p>Please contact us.</p>
                                    <ul>
                                        <li>WhatsApp : +65 88135512</li>
                                        <li>Email : joseph@freshcars.sg</li>
                                    </ul>
                            </Card.Body>
                            </Accordion.Collapse>
                    </Card>

                </Accordion>
                </div>
            </div>
        </Container>
    );
}

export default questions