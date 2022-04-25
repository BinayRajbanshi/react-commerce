import React from 'react'
import './categories.css'
import { useGlobalContext } from '../context'

const Categories = () => {
    const {filterCategories , state:{category} } = useGlobalContext()
    
  return (
    <div className='btn-container'>
        {category.map((category , index)=>{
            return <button type='button'  key={index} className='cat-btn'
            onClick={()=> filterCategories(category)}
            >
                {category}
            </button>
        })}
    </div>
  )
}

export default Categories
