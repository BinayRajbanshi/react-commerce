import React from 'react'
import './features.css'
import {RiCustomerServiceFill} from 'react-icons/ri'
import {AiFillCreditCard} from 'react-icons/ai'
import {FaShareSquare , FaShippingFast} from 'react-icons/fa'

const OurFeatures = () => {
  return (
    <>
    <section className="features" id="features">
    <div className="max-width">
        <h3 className="heading">Our Features</h3>
        <div className="features-content">
            <div className="card">
                <div className="box">
                    <div className="icon"><RiCustomerServiceFill /></div>
                    <div className="text-1">Customer support</div>
                    <div className="text-2">Need assistance</div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec vestibulum magna, et dapibus lacus. Lorem ipsum dolor sit amet.</p>
                </div>
            </div>
            <div className="card">
                <div className="box">
                    <div className="icon"><AiFillCreditCard/></div>
                    <div className="text-1">Secured Payment</div>
                    <div className="text-2">Safe & Fast</div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec vestibulum magna, et dapibus lacus. Lorem ipsum dolor sit amet.</p>
                </div>
            </div>
            <div className="card">
                <div className="box">
                    <div className="icon"><FaShareSquare/></div>
                    <div className="text-1">Free Returns</div>
                    <div className="text-2">Easy & Free</div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec vestibulum magna, et dapibus lacus. Lorem ipsum dolor sit amet.</p>
                </div>
            </div>
            <div className="card">
                <div className="box">
                    <div className="icon"><FaShippingFast/></div>
                    <div className="text-1">Free Shipping</div>
                    <div className="text-2">Orders Over $100</div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius suscipit maxime neque quaerat quam impedit voluptatibus nemo .</p>
                </div>
            </div>
        </div>
    </div>
</section>
    </>
  )
}

export default OurFeatures
