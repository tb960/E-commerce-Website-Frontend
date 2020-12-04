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
            <div className="card-row card-row-ipad">
                <Card className="phone-card custom-card col-lg-3 col-md-12">
                    
                    <iframe src='https://www.youtube.com/embed/E7wJTI-1dvQ'
                        class="vid-size"
                        frameborder='0'
                        allow='autoplay; encrypted-media'
                        allowfullscreen
                        title='video'
                    ></iframe>
                    <Card.Body>
                    <Card.Title><h5 class="custom-h5">Step 1 : Send</h5></Card.Title>
                    <Card.Text>
                        Send your orders into our system
                    </Card.Text>
                    </Card.Body>
                </Card>
                <Card className="phone-card custom-card col-lg-3 col-md-12">
                    <iframe src='https://www.youtube.com/embed/E7wJTI-1dvQ'
                        class="vid-size"
                        frameborder='0'
                        allow='autoplay; encrypted-media'
                        allowfullscreen
                        title='video'
                    ></iframe>
                    <Card.Body>
                    <Card.Title><h5 class="custom-h5">Step 2 : Pack</h5></Card.Title>
                    <Card.Text>
                        Pack your deliveries and pass them to our professional deliveryman{' '}
                    </Card.Text>
                    </Card.Body>
                </Card>
                <Card className="phone-card custom-card col-lg-3 col-md-12">
                    <iframe src='https://www.youtube.com/embed/E7wJTI-1dvQ'
                        frameborder='0'
                        class="vid-size"
                        allow='autoplay; encrypted-media'
                        allowfullscreen
                        title='video'
                    ></iframe>
                    <Card.Body>
                    <Card.Title><h5 class="custom-h5">Step 3 : Track</h5></Card.Title>
                    <Card.Text>
                        Live tracking as soon as your packages are sent out
                    </Card.Text>
                    </Card.Body>
                </Card>
                <Card className="phone-card custom-card col-lg-3 col-md-12 col-sm-12">
                    <iframe src='https://www.youtube.com/embed/E7wJTI-1dvQ'
                        class="vid-size"
                        frameborder='0'
                        allow='autoplay; encrypted-media'
                        allowfullscreen
                        title='video'
                    ></iframe>
                    <Card.Body>
                    <Card.Title><h5 class="custom-h5">Step 3 : Track</h5></Card.Title>
                    <Card.Text>
                        Live tracking as soon as your packages are sent out
                    </Card.Text>
                    </Card.Body>
                </Card>
            </div>
            </div>
        </div>
    );
  }

export default Jumbo