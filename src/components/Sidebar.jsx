import React from 'react';
import {GiCrossedBones} from 'react-icons/gi';
import {ImCross} from 'react-icons/im';
import './sidebar.css';
import { useGlobalContext } from '../context';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    const {isSidebarOn  , sidebarClose , handleOverlayClose,
        state:{cart , allTotal } ,
        removeFromCart,
        clearCart,
    } = useGlobalContext()
  return (
      <>
    <div className={`${isSidebarOn?'cart active':'cart'}`}>
        <div className="heading">
            Shopping Cart
            <button style={{border:'none' , background:'transparent'}} className='close' onClick={()=>{sidebarClose();handleOverlayClose()}}><GiCrossedBones/></button>
        </div>
        {cart.map((product)=>{
            const {title ,image , price , id , amount } = product
            return <>
            <div key={id} className="cart-box">
            <div className="item-description">
                <div className="item-name">{title}</div>
                <div className="item-price">{amount} x ${price}</div>
            </div>
        <div className="item-img">
            <img src={image} alt={title}/>
            <span className="cross" onClick={()=>removeFromCart(id)}><ImCross/></span>
        </div>
        </div>
        </> 
        })}
        

        {/* total */}
        {cart.length === 0 ? <div>Your Cart is Empty</div> : (
            <>
            <div className="total">
            <span>SUBTOTAL:</span>
            <span>$ {allTotal}</span>
        </div>
            <div className="cart-buttons">
                <button onClick={()=>clearCart()} style={{background:"#e7e7e7", color:"#222529"}}>Clear Cart</button>
                <button style={ {backgroundColor: "#343a40" , color:" #fff"}}><Link className='default' to='/cart'>View Cart</Link></button>
            </div>
            </>
        )}
        
    </div>
    </>
  )
}

export default Sidebar
