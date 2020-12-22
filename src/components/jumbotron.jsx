import React from 'react';
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import icons1 from '../assets/Upload.png';
import icons2 from '../assets/Pack.png'
import icons3 from '../assets/Track.png'
import './jumbotron.css';

function Jumbo() {
    return (
        <div className="phone-container deck">
            <div class="container container-background">
            <div>
                <h2 className="headingh2">How To Use Orange Express?</h2>
            </div>
            <div>
            <CardDeck>
                <Card className="phone-card custom-card col-sm-12">
                    <Card.Img className="img-size" variant="top" src={icons1} />
                    <Card.Body>
                    <Card.Title><h5 class="custom-h5">Step 1 : Send</h5></Card.Title>
                    <Card.Text>
                        Send your orders into our system
                    </Card.Text>
                    </Card.Body>
                </Card>
                <Card className="phone-card custom-card col-sm-12">
                    <Card.Img className="img-size" variant="top" src={icons2} />
                    <Card.Body>
                    <Card.Title><h5 class="custom-h5">Step 2 : Pack</h5></Card.Title>
                    <Card.Text>
                        Pack your deliveries and pass them to our professional deliveryman{' '}
                    </Card.Text>
                    </Card.Body>
                </Card>
                <Card className="phone-card custom-card col-sm-12">
                    <Card.Img className="img-size" variant="top" src={icons3} />
                    <Card.Body>
                    <Card.Title><h5 class="custom-h5">Step 3 : Track</h5></Card.Title>
                    <Card.Text>
                        Live tracking as soon as your packages are sent out
                    </Card.Text>
                    </Card.Body>
                </Card>
                </CardDeck>
            </div>
            </div>
        </div>
    );
  }

export default Jumbo