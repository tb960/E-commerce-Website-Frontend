import React from 'react';
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import icons1 from '../assets/Upload.png';
import icons2 from '../assets/Pack.png';
import icons3 from '../assets/Track.png';
import icons4 from '../assets/Received.png';
import './jumbotron.css';

//<iframe src={video1}
//class="vid-size"
//frameborder='0'
//allow='autoplay; encrypted-media'
//allowfullscreen
//title='video'
//></iframe>

function Jumbo() {
    return (
        <div className="phone-container deck">
            <div class="container container-background">
            <div>
                <h2 className="headingh2">How To Use Orange Express?</h2>
            </div>
            <div className="card-row card-row-ipad">
                <Card className="phone-card custom-card col-lg-3 col-md-12">
                    
                    <Card.Img variant="top" src={icons1} className="img-size"/>
                    <Card.Body>
                    <Card.Title><h5 class="custom-h5">Step 1 : Send</h5></Card.Title>
                    <Card.Text>
                        Send your orders into our system
                    </Card.Text>
                    </Card.Body>
                </Card>
                <Card className="phone-card custom-card col-lg-3 col-md-12">
                    <Card.Img variant="top" src={icons2} className="img-size" />
                    <Card.Body>
                    <Card.Title><h5 class="custom-h5">Step 2 : Pack</h5></Card.Title>
                    <Card.Text>
                        Pack your deliveries and pass them to our professional deliveryman{' '}
                    </Card.Text>
                    </Card.Body>
                </Card>
                <Card className="phone-card custom-card col-lg-3 col-md-12">
                    <Card.Img variant="top" src={icons3} className="img-size"/>
                    <Card.Body>
                    <Card.Title><h5 class="custom-h5">Step 3 : Track</h5></Card.Title>
                    <Card.Text>
                        Live tracking as soon as your packages are sent out
                    </Card.Text>
                    </Card.Body>
                </Card>
                <Card className="phone-card custom-card col-lg-3 col-md-12 col-sm-12">
                    <Card.Img variant="top" src={icons4} className="img-size"/>
                    <Card.Body>
                    <Card.Title><h5 class="custom-h5">Step 4 : Received</h5></Card.Title>
                    <Card.Text>
                        Received your packages in time.
                    </Card.Text>
                    </Card.Body>
                </Card>
            </div>
            </div>
        </div>
    );
  }

export default Jumbo