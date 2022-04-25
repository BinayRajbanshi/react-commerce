import React from 'react'
import Categories from '../categories/Categories'
import {useGlobalContext} from '../context'
import { AiFillEye} from 'react-icons/ai'

import './popular.css'
import { Link } from 'react-router-dom'


const PopularProducts = () => {
    const {state:{products,cart} , isOverlayOn , addToCart , removeFromCart ,
    
  
  } = useGlobalContext()
  return (
    <section className='popular'>
        <div className="max-width">
            <h3 className='heading'>Popular Products</h3>
            <Categories/>
            <div className="popular-content">
                {/* ============single product=============== */}
                {products.map((item)=>{
                    const {id, image , category , price , title } = item
                    return (
                      <div
                        key={id}
                        className="card"
                        style={{ backgroundColor: "lightgray" }}
                      >
                        <div className="box">
                          <div
                            className="img"
                            style={isOverlayOn ? {} : { position: "relative" }}
                          >
                            <img src={image} alt={title} />
                            <ul className="action">
                            
                  
                              <li>
                                <button>
                                  <Link to={`/details/${id}`}>
                                  <AiFillEye />
                                  </Link>
                                </button>
                                <span>View Details</span>
                              </li>
                            </ul>
                            {cart.some((product) => product.id === id) ? (   //array.find gives new array(means it gives new value) whereas array.some checks (means it returns boolean)
                              <div className="quick-view" 
                              onClick={()=> removeFromCart(id)}
                              style={isOverlayOn?{display:'none'}:{}}>
                                <span className='a'>Remove From Cart</span>
                              </div>
                            ): (
                              <div
                              onClick={() => addToCart(item)}
                              className="quick-view" style={isOverlayOn?{display:'none'}:{}}>
                                <span className='a'>
                                  Add To Cart
                                </span>
                              </div>
                            )}
                          </div>
                          <div className="text-1">{category}</div>
                          <div className="text-2">{title}</div>
                          <div className="text-3">${price}</div>
                        </div>
                      </div>
                    );
                })}
            </div>
        </div>
    </section>
  )
}

export default PopularProducts
