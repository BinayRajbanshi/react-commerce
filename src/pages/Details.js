import React from 'react'
import { useParams , Link } from 'react-router-dom'
import { useGlobalContext } from '../context'
import './details.css';

const Details = () => {
    const {state:{products } } = useGlobalContext();
    const {id } = useParams();
    const singleProduct = products.find(item=>item.id == id)
    const {title , description , category , image , price , id:prodId} = singleProduct

  return (
    <>
           <div className='single-product'>
              <div className="max-width">
                  <h2 className='title'>Product Detail</h2>
                  <div className="col">
                      <div className="row">
                          <div className="single-img">
                              <img src={image} alt={title} />
                          </div>
                      </div>
                      <div className="row">
                         <h4 className="text">
                         Name : <span className="name">{title}</span>
                         </h4>
                         <h4 className="text">
                             Price: <span className='single-price'>${price}</span>
                         </h4>
                         <h4 className="text">
                             Description : <span className="des">
                                 {description}
                             </span>
                         </h4>
                         <h4 className='text'>
                         Category : <span className="category">
                             {category}
                         </span>
                             </h4>
                      </div>

                  </div>
                  <div className="btn-box">
                     <button >
                         <Link className='default' to='/'>
                         Continue Shopping
                         </Link>

                         </button>
                  </div> 
                 
                  
              </div>
          </div>
      
    </>
  )
}

export default Details
