import React from 'react'
import './cart.css'
import { useGlobalContext } from '../context'
import SingleCartItem from './SingleCartItem'
import { Link } from 'react-router-dom'

const CartContainer = () => {
    const{state:{cart , allTotal},
  clearCart
} = useGlobalContext()


if(cart.length===0){
    return (
        <section className='cart-page max-width '>
            <header>
                <h2>Your Shopping Cart</h2>
                <h4 className='empty-cart'>is currently empty</h4>
            </header>
            <button className='clear-cart-button' style={{marginTop:'20px'}}>
              <Link className='default' to='/'>
              Back to Shopping

              </Link>
            </button>
        </section>
      )
}
     else{
         return (
           <section className="cart-page">
             <header>
               <h2>Your Shopping Cart</h2>
             </header>

             {/* Cart Begins */}
             <table className='table'>
               <tr className='header'>
                   <th></th>
                 <th>PRODUCT</th>
                 <th>PRICE</th>
                 <th>QUANTITY</th>
                 <th></th>
               </tr>
               {cart.map((item) => {
                 return <SingleCartItem key={item.id} {...item} />;
               })}
             </table>

             <footer>
               <hr />
               <div className="cart-total">
                 <h4>Total</h4>
                 <h4>${allTotal}</h4>
               </div>
               <button className="clear-cart-button" onClick={()=>clearCart()}>Clear Cart</button>
               <button className="clear-cart-button">Proceed to CheckOut</button>
             </footer>
           </section>
         );
     }

}

export default CartContainer
