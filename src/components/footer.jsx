import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import logo1 from '../assets/freshcars_logo.png';
import logo2 from '../assets/happydriver_logo.png'
import logo3 from '../assets/itby_logo.png'
import logo4 from '../assets/wiskingwell_logo.png'
import company from '../assets/orangeexpress_logo.png';
import './footer.css';

function Footer(){
    return(
        <footer class="page-footer center">
            <Container className="footer">
                <h2 class="headingh6">OUR TRUSTED PARTNERS</h2>
                <hr></hr>
                <Row xs="4">
                    <Col><img className="logo-comp logo-ipad logo-phone" src={logo1}></img></Col>
                    <Col><img className="logo-ipad logo-phone " src={logo2}></img></Col>
                    <Col><img className="logo-ipad-3 logo-phone-3 " src={logo3}></img></Col>
                    <Col><img className="logo-ipad logo-phone " src={logo4}></img></Col>
                </Row>
            </Container>

            <footer class="page-footer font-small blue pt-4 foot">
            <div class="container text-center text-md-left">
              <div class="row">
                <div class="col-md-6 mt-md-0 mt-3">
                  <h5 class="text-uppercase headingh5">Address</h5>
                  <hr></hr>
                  <p>
                      <ul class="list-unstyled">
                          <li>105 Kaki Bukit Ave 1,</li>
                          <li>Shun Li Industrial Park, #03-03</li>
                          <li>Singapore 415987</li>
                      </ul>
                  </p>
                  <img class="logo-size-orange" src={company}></img>
                </div>
                <hr class="clearfix w-100 d-md-none pb-3"></hr>
                <div class="col-md-3 mb-md-0 mb-3">
                  <h5 class="text-uppercase headingh5">Our Company</h5>
                  <hr></hr>
                  <ul class="list-unstyled">
                    <li>Promotions</li>
                    <li>Partners</li>
                    <li>Careers</li>
                    <li>FAQs</li>
                  </ul>
                </div>
                <div class="col-md-3 mb-md-0 mb-3">
                  <h5 class="text-uppercase headingh5">Connect with Us</h5>
                  <hr></hr>
                  <ul class="list-unstyled">
                    <li>Contact Us</li>
                    <li>About Us</li>
                    <li>Directions</li>
                    <li>Blog</li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="footer-copyright text-center  py-3">
               <p>Privacy Policy UEN: 53388547K</p>
            </div>
          </footer>
        </footer>
    );
}

export default Footer