
import Container from 'react-bootstrap/Container'
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Table from './Price.jsx';
import { useAccordionToggle } from "react-bootstrap/AccordionToggle";
import React, { Component } from 'react';
import './Faq.css'
import { render } from '@testing-library/react';

class questions extends Component{
    constructor(props) {
        super(props)
        this.state = {
          collapse1:"collapse1",
          collapse2:"collapse2",
          collapse3:"collapse3",
          collapse4:"collapse4",
          collapse5:"collapse5",
          collapse6:"collapse6",
          collapse7:"collapse7",
          collapse8:"collapse8",
          collapse9:"collapse9",
          collapse0:"collapse0",
          collapse01:"collapse0",
        }
    }
        toggleCollapse1 = collapse1 => () =>
            this.setState(prevState => ({
            collapse1: prevState.collapse1 !== collapse1 ? collapse1 : ""
            }));
        toggleCollapse2 = collapse2 => () =>
        this.setState(prevState => ({
        collapse2: prevState.collapse2 !== collapse2 ? collapse2 : ""
        }));
        toggleCollapse3 = collapse3 => () =>
        this.setState(prevState => ({
        collapse3: prevState.collapse3 !== collapse3 ? collapse3 : ""
        }));
        toggleCollapse4 = collapse4 => () =>
        this.setState(prevState => ({
        collapse4: prevState.collapse4 !== collapse4 ? collapse4 : ""
        }));
        toggleCollapse5 = collapse5 => () =>
        this.setState(prevState => ({
        collapse5: prevState.collapse5 !== collapse5 ? collapse5 : ""
        }));
        toggleCollapse6 = collapse6 => () =>
        this.setState(prevState => ({
        collapse6: prevState.collapse6 !== collapse6 ? collapse6 : ""
        }));
        toggleCollapse7 = collapse7 => () =>
        this.setState(prevState => ({
        collapse7: prevState.collapse7 !== collapse7 ? collapse7 : ""
        }));
        toggleCollapse8 = collapse8 => () =>
        this.setState(prevState => ({
        collapse8: prevState.collapse8 !== collapse8 ? collapse8 : ""
        }));
        toggleCollapse9 = collapse9 => () =>
        this.setState(prevState => ({
        collapse9: prevState.collapse9 !== collapse9 ? collapse9 : ""
        }));
        toggleCollapse0 = collapse0 => () =>
        this.setState(prevState => ({
        collapse0: prevState.collapse0 !== collapse0 ? collapse0 : ""
        }));
        toggleCollapsea = collapsea => () =>
        this.setState(prevState => ({
        collapsea: prevState.collapsea !== collapsea ? collapsea : ""
        }));
        

    render(){
    return(
        <Container fluid >
            <div className="div-components">
                <h1 className="main-title">FAQs</h1>
                <div class="FAQ-list faq-style">
                <Accordion>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="0" onClick={this.toggleCollapse1("collapse1")} className="d-flex justify-content-between">
                            <div>What is Orange Express?</div> <i className={this.state.collapse1 === "collapse1"? "fa fa-chevron-down": "fa fa-chevron-up"} aria-hidden="true"></i></Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body>Established in 2018, we are a delivery partner for businesses islandwide. We have a fleet of full time and part-time private hire drivers to meet your delivery needs.</Card.Body>
                            </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="1" onClick={this.toggleCollapse2("collapse2")} className="d-flex justify-content-between">How do I schedule deliveries for my orders? <i className={this.state.collapse2 === "collapse2"? "fa fa-chevron-down": "fa fa-chevron-up"} aria-hidden="true"></i></Accordion.Toggle>
                        <Accordion.Collapse eventKey="1">
                            <Card.Body>Booking and scheduling our deliveries is a simple process! You can either schedule it through our website or contact our sales team at 88135512 or email us at joseph@freshcars.sg. We will get back to you as soon as possible! </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="2" onClick={this.toggleCollapse3("collapse3")} className="d-flex justify-content-between">Can I request for specific delivery timings for certain orders within the route? <i className={this.state.collapse3 === "collapse3"? "fa fa-chevron-down": "fa fa-chevron-up"} aria-hidden="true"></i></Accordion.Toggle>
                        <Accordion.Collapse eventKey="2">
                            <Card.Body>We can accommodate on a best-effort basis, and at an additional cost of $5 per special delivery. For example, if your delivery window is between 3pm to 7pm, and you request one delivery to arrive specifically before 4pm, this will be an additional $5.</Card.Body>
                            </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="3" onClick={this.toggleCollapse4("collapse4")} className="d-flex justify-content-between">What are your delivery timings? <i className={this.state.collapse4 === "collapse4"? "fa fa-chevron-down": "fa fa-chevron-up"} aria-hidden="true"></i></Accordion.Toggle>
                        <Accordion.Collapse eventKey="3">
                            <Card.Body>We deliver 24/7. However, the operating hours for our customer support are Monday to Friday, 10 am - 7 pm.</Card.Body>
                            </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="4" onClick={this.toggleCollapse5("collapse5")} className="d-flex justify-content-between">What is the minimum number of deliveries? <i className={this.state.collapse5 === "collapse5"? "fa fa-chevron-down": "fa fa-chevron-up"} aria-hidden="true"></i></Accordion.Toggle>
                        <Accordion.Collapse eventKey="4">
                            <Card.Body>No surcharges for ten or above deliveries. There will be surcharges below ten deliveries. </Card.Body>
                            </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="5" onClick={this.toggleCollapse6("collapse6")} className="d-flex justify-content-between">How early in advance do you need to know the orders for a given day? <i className={this.state.collapse6 === "collapse6"? "fa fa-chevron-down": "fa fa-chevron-up"} aria-hidden="true"></i></Accordion.Toggle>
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
                        <Accordion.Toggle as={Card.Header} eventKey="10" onClick={this.toggleCollapse7("collapse7")} className="d-flex justify-content-between">Pricing <i className={this.state.collapse7 === "collapse7"? "fa fa-chevron-down": "fa fa-chevron-up"} aria-hidden="true"></i></Accordion.Toggle>
                        <Accordion.Collapse eventKey="10">
                            <Card.Body>
                                <Table/>
                            </Card.Body>
                            </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="6" onClick={this.toggleCollapse8("collapse8")} className="d-flex justify-content-between">Will you inform my customers when you reach? <i className={this.state.collapse8 === "collapse8"? "fa fa-chevron-down": "fa fa-chevron-up"} aria-hidden="true"></i></Accordion.Toggle>
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
                        <Accordion.Toggle as={Card.Header} eventKey="7" onClick={this.toggleCollapse9("collapse9")} className="d-flex justify-content-between">Do you have a weight limit? <i className={this.state.collapse9 === "collapse9"? "fa fa-chevron-down": "fa fa-chevron-up"} aria-hidden="true"></i></Accordion.Toggle>
                        <Accordion.Collapse eventKey="7">
                            <Card.Body>Standard charge has a limit of 10kg. Items greater than 10kg but less than 20kg incur a surcharge of $1. </Card.Body>
                            </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="8" onClick={this.toggleCollapse0("collapse0")} className="d-flex justify-content-between">Will an invoice be issued after a delivery is completed? <i className={this.state.collapse0 === "collapse0"? "fa fa-chevron-down": "fa fa-chevron-up"} aria-hidden="true"></i></Accordion.Toggle>
                        <Accordion.Collapse eventKey="8">
                            <Card.Body>Yes, an online invoice will be emailed to your registered email address with us, upon every completion of delivery. </Card.Body>
                            </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="9" onClick={this.toggleCollapsea("collapsea")} className="d-flex justify-content-between">Got another question? <i className={this.state.collapsea === "collapsea"? "fa fa-chevron-up": "fa fa-chevron-down"} aria-hidden="true"></i></Accordion.Toggle>
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
}

export default questions