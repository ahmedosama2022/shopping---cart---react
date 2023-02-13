import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap';
import '../css/Cart.css'
import { FaFacebookF } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { AiOutlineTwitter } from "react-icons/ai";
import { GrPinterest } from "react-icons/gr";

    const Home = () => {
        
        return (
          <div id="product">
              <Container>
                <Row>
                <div className='sec2'>
                          <div className='dd'>
                              <img src='https://tradelinestores.s3.amazonaws.com/media/category_images/1c17002b-f8e0-4af3-bb0a-963630ab33f5.png' style={{width:"120px"}}/>
                              
                              <button>AirPods</button>
                              
                          </div>
                          <div className='dd'>
                              <img src='https://tradelinestores.s3.amazonaws.com/media/category_images/9f6a4ca8-7213-4d9c-823a-c5b003acd348.png' style={{width:"120px"}}/>
                              <button>AirPods</button>
                          </div>
                          <div className='dd'>
                              <img src='https://tradelinestores.s3.amazonaws.com/media/category_images/e2faf0ab-32bd-472f-bd86-a27891d9d5ee.png' style={{width:"120px"}}/>
                              <button>Apple Watch</button>
                          </div>
                          <div className='dd'>
                              <img src='https://tradelinestores.s3.amazonaws.com/media/category_images/2eac9f0f-cb21-4e9c-9a52-48b20776b0c6.png' style={{width:"120px"}}/>
                              <button>Apple TV</button>
                          </div>
                          <div className='dd'>
                              <img src='https://tradelinestores.s3.amazonaws.com/media/category_images/6ec4975f-9308-44cd-90ea-2aca4930c797.png' style={{width:"120px"}}/>
                              <button>Accessories</button>
                          </div>
                          
                         
              </div>
                </Row>
              </Container>
      
              <Container>
                  <Row>
                      <img src='https://tradelinestores.s3.amazonaws.com/media/product_images/1cf99e37-0bfa-4a74-8eb4-deeb4688395d.png' width="100%" height="auto" style={{ marginTop:"80px"}}/>
                  </Row>
              </Container>
      
              <Container>
                  <Row>
                    <section className='sec222'>
                    <div className='nnn' style={{marginLeft:"50px"}}>
                     <img src='	https://d5z7ph582hxfs.cloudfront.net/media/home_images/Website_icons_1000x1000-04-01.svg'  width="80px" height="auto" />
                      <h3>Trade in</h3>
                      <p>Trade-in your old device now!</p>
                     </div>
                     <div className='nnn' style={{marginLeft:"50px"}}>
                     <img src='http://d5z7ph582hxfs.cloudfront.net/media/home_images/Track_icon-01s.svg'  width="80px" height="auto" />
                      <h3>Track your order</h3>
                      <p>Check your delivery status!</p>
                     </div>
                     <div className='nnn' style={{marginLeft:"50px"}}>
                     <img src='http://d5z7ph582hxfs.cloudfront.net/media/home_images/Call_back-01.svg'  width="80px" height="auto" />
                      <h3>Request a call back</h3>
                      <p>Join our loyalty program
                          <br></br>
                          using your phone!</p>
                     </div>
                     <div className='nnn' style={{marginLeft:"50px"}}>
                     <img src='http://d5z7ph582hxfs.cloudfront.net/media/home_images/why_tradleine-01.svg'  width="80px" height="auto" />
                      <h3>Visit our store (VR)</h3>
                      <p>Join our loyalty program
                          <br></br> 
                          using your phone!</p>
                     </div>
                    </section>
                  </Row>
              </Container>
      
              <Container>
                  <Row>
                      <section className='sec23'>
                      <img className='mmm' src='http://d5z7ph582hxfs.cloudfront.net/media/home_images/dd0d9d41-b875-4971-836b-bbc4209274b6.png' width="627px"/>
                      <img className='nm' src='http://d5z7ph582hxfs.cloudfront.net/media/home_images/6a3f166b-229b-4dba-b525-2d602bf23d73.png' width="627px"/>
                      </section>
                  </Row>
              </Container>
      
                <Container>
                  <Row>
                      <section className='sec23'>
                      
                      <img className='mmm' src='http://d5z7ph582hxfs.cloudfront.net/media/home_images/6a3f166b-229b-4dba-b525-2d602bf23d73.png' width="627px"/>
                      <img className='nm' src='http://d5z7ph582hxfs.cloudfront.net/media/home_images/dd0d9d41-b875-4971-836b-bbc4209274b6.png' width="627px"/>
                      </section>
                  </Row>
              </Container>
      
            <Container>
              <Row>
              <section className='secc'>
                  <h1>Online Deals</h1>
                  <p>Don't miss them!</p>
              </section>
              </Row>
            </Container>
      
            <Container>
              <Row>
                 <Col xs={12} md={6} xl={7}>
                 <section className='eee' style={{justifyCcontent: "space-between" }}>
                      <div className='se' style={{marginLeft:"50px"}}>
                          <img src='http://d5z7ph582hxfs.cloudfront.net/media/product_images/3e2d1387-5a16-4441-9a75-baa0057fee40.png' width="200px"/>
                          <h5>Blueman Table Speaker</h5>
                          <h4>8,555 EGP</h4>
                      </div>
                      <div className='se' style={{marginLeft:"50px"}}>
                          <img src='http://d5z7ph582hxfs.cloudfront.net/media/product_images/6b7e3412-39da-4719-9979-da75bd1747c1.png' width="200px" height="180px"/>
                          <h5>Gravastar Mars Pro 
                              <br></br>
                              Bluetooth Speaker - Black</h5>
                          <h4>3,555 EGP</h4>
                      </div>
                      <div className='se' style={{marginLeft:"50px"}}>
                          <img src='http://d5z7ph582hxfs.cloudfront.net/media/product_images/4e976d21-3cb1-40ad-ac8a-23c02480ba4f.png' width="200px"/>
                          <h5>Mophie 3-in-1 wireless
                              <br></br>
                               charging pad - Black</h5>
                          <h4>7,555 EGP</h4>
                      </div>
                      <div className='se' style={{marginLeft:"50px"}}>
                          <img src='http://d5z7ph582hxfs.cloudfront.net/media/product_images/8d2b7d2c-08c1-4a21-83c2-4174a2bc5a63.png' width="200px"/>
                          <h5>ViewSonic M1 Mini Plus Smart 
                              <br></br>
                              LED Ultra Portable Projector</h5>
                          <h4>4,555 EGP</h4>
                      </div>
                  </section>
                 </Col>
              </Row>
            </Container>
      
            <Container>
              <Row>
                  <section className='sec2223'>
                      <div >
                          <img src='http://d5z7ph582hxfs.cloudfront.net/media/home_images/8d93945f-7dd9-43b7-8ef1-fed4b60aee33.png' width="700px" height="auto"/>
                          
                      </div>
                      <div>
                          <h6>
                          Mac
                          <br/>
                          iPhone
                          <br/>
                         iPad
                         <br/>
                        Apple Watch
                        <br/>
                        Apple TV
                        <br/>
                         AirPods
                         <br/>
                        AirTag
                        <br/>
                        Accessories
                          </h6>
                      </div>
      
                  </section>
              </Row>
            </Container>
      
            <section className='footer'>
                  
                     
                          <Col lg="2" md="2" sm="12">
                              <h3>Company</h3>
                              <p>About Us</p>
                              <p>Contact</p>
                              <p>Store Locations</p>
                              <p>Careers</p>
                          </Col>
                          <Col lg="2" md="2" sm="12">
                              <h3>Help</h3>
                              <p>Order Tracking</p>
                              <p>FAQ's</p>
                              <p>Privacy Policy</p>
                              <p>Terms & Conditions</p>
                          </Col>
                          <Col lg="3" md="3" sm="12">
                              <h3>Follow Us</h3>
                              <p>And get Free Shipping on all your orders!</p>
                              <div className="divicons">
                              <img src='https://www.tradelinestores.com/assets/imgs/footer/Apple.svg'/>
                          <img src='https://www.tradelinestores.com/assets/imgs/footer/Apple.svg'/>
                              </div>
                          </Col>
                          <Col lg="5" md="5" sm="12">
                              <h3>Sign up now & get 10% off</h3>
                              <p>Be the first to know about our new arrivals and exclusive offers.</p>
                              <form>
                                  <input type="email" placeholder="Your email address" />
                                  <input type="submit" placeholder="Subscribe" />
                              </form>
                              <div className='divcon'>
                              <div><FaFacebookF /></div>
                                  <div><AiOutlineTwitter /></div>
                                  <div><GrPinterest /></div>
                              </div>
                             
                          </Col>
                      
                  </section>
              
          </div>
        )
      }



export default Home