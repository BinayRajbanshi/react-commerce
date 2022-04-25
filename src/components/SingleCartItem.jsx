import React from 'react'
import { useGlobalContext } from '../context'
import './cart.css'
import {IoMdRemoveCircle} from 'react-icons/io'

const SingleCartItem = ({title , id , image , price , amount }) => {
    const {state:{ itemTotal } ,
    increase ,
    decrease,
    removeFromCart,
} = useGlobalContext()
  return (
    <tr>
    <td className='table-img'>
        <img src={image} alt={title} />
    </td>
    <td className='product'>
        {title}
    </td>
    <td>
        ${price}
    </td>
    <td>
        <button className='change-btn' onClick={()=>decrease(id)}>-</button>
        {amount}
        <button className='change-btn' onClick={()=>increase(id)}>+</button>
    </td>
    <td>
      <button className='remove-btn' onClick={()=>removeFromCart(id)}><IoMdRemoveCircle/></button>
    </td>
</tr>
    
  )
}

export default SingleCartItem
