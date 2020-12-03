import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import CardDeck from 'react-bootstrap/CardDeck'
import './Container.css';
import './jumbotron.css';

function Prefooter(){
    return(
        <div className="phone-container deck2">
            <div class="container">
            <div>
            <CardDeck>
                <Card className="phone-card custom-card col-sm-12">
                    
                    <Card.Body>
                    <Card.Title><h5 class="custom-h5">Got a Question?</h5></Card.Title>
                    <Card.Text>
                        Email or WhatsApp Us!
                    </Card.Text>
                    <Button variant="info" className="button-size">Email Us</Button>
                    <Button variant="success" className="button-size">WhatsApp Us</Button>
                    </Card.Body>
                </Card>
                <Card className="phone-card custom-card col-sm-12">
                    
                    <Card.Body>
                    <Card.Title><h5 class="custom-h5">Become an Orange Express Driver</h5></Card.Title>
                    <Card.Text>
                    Deliver & earn with Orange Express. Be your own boss!
                    </Card.Text>
                    <Button variant="info" className="button-size">Apply Now</Button>
                    </Card.Body>
                </Card>
                </CardDeck>
            </div>
            </div>
        </div>
    );
        
}

export default Prefooter