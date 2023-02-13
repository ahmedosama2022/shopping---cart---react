import React, { Component } from 'react'
import {DataContext} from '../Context'
import {Link} from 'react-router-dom'
import Colors from './Colors'
import '../css/Details.css'
import '../css/Cart.css'
import { Container, Row, Col } from 'reactstrap';

import { FaFacebookF } from "react-icons/fa";

import { AiOutlineTwitter } from "react-icons/ai";
import { GrPinterest } from "react-icons/gr";

export class Cart extends Component {
    static contextType = DataContext;

    componentDidMount(){
        this.context.getTotal();
    }
    
    render() {
        const {cart,increase,reduction,removeProduct,total} = this.context;
        if(cart.length === 0){
            return <h2 style={{textAlign:"center"}}>Nothings Product</h2>
        }else{
            return (
                <>
                    {
                        cart.map(item =>(
                            <div className="details cart" key={item._id}>
                                <img src={item.src} alt=""/>
                                <div className="box">
                                    <div className="row">
                                        <h2>{item.title}</h2>
                                        <span>${item.price * item.count}</span>
                                    </div>
                                    <Colors colors={item.colors}/>
                                    <p>{item.description}</p>
                                    <p>{item.content}</p>
                                    <div className="amount">
                                        <button className="count" onClick={() => reduction(item._id)}> - </button>
                                        <span color='green'>{item.count}</span>
                                        <button className="count" onClick={() => increase(item._id)}> + </button>
                                    </div>
                                </div>
                                <div className="delete" onClick={() => removeProduct(item._id)}>X</div>
                            </div>
                        ))
                    }
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
                    <div className="total">
                        <Link to="/payment">Payment</Link>
                        <h3>Total: ${total}</h3>
                    </div>
                </>
                )
            }
        }
}

export default Cart
