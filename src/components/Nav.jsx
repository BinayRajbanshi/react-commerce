import React, { useState , useRef, useEffect } from 'react';
import {links , social} from '../data/navData'
import {FiLogIn} from 'react-icons/fi'
import { FaBars, FaShoppingCart } from 'react-icons/fa'
import {GiCrossedBones} from 'react-icons/gi'
import { useGlobalContext } from '../context';
import './nav.css'
import Sidebar from './Sidebar';
import SignIn from './SignIn';
import { Link } from 'react-router-dom';

const Nav = () => {
    const {modalOpen  , handleOverlayOpen ,handleOverlayClose, isOverlayOn , sidebarOpen , state:{quantity}} = useGlobalContext()
    const[navOpen , setNavOpen] = useState(true)
 

    // function
    const handleNavOpen = () => {
        setNavOpen(true)
    }
    const handleNavClose = () => {
        setNavOpen(false)
    }


  return (
    <nav>
          <div className={`${isOverlayOn ? 'overlay overlay-active': 'overlay'}`}></div>
        <div className="container">
            <div className="wrapper">
            <div className="hamburger">
              <button className='btn' onClick={()=>{handleNavOpen() ; handleOverlayOpen()}}><FaBars/></button>
            </div>
                <div className="links-container" >
                    <ul className={`${navOpen? 'nav-links active' : 'nav-links'}`}>
                        {links.map((link)=>{
                            const {id , url , text} = link
                            return <li key={id}> 
                            <Link to={url} className='nav-items'>{text}</Link>
                            </li>
                        })}
                    <span className="close-nav"><button onClick={()=>{handleNavClose();handleOverlayClose()}}><GiCrossedBones/></button></span>
                    </ul>
                </div>
                <div className="logo">
                    <Link to={'/'}><img src="logo.png" alt="" /></Link>
                </div>
                <ul className="shop-links">
                    <li className='shop-items' 
                        onClick={()=>{handleOverlayOpen() ; modalOpen()}}
                    >
                        <FiLogIn/>
                    </li>
                    <li className='shop-items'
                        onClick={()=>{handleOverlayOpen();sidebarOpen()}}
                    >
                        <FaShoppingCart/>
                        <span className='badge'>{quantity}</span>
                    </li>
                </ul>
            </div>
        </div>
        <Sidebar/>
        <SignIn/>
    </nav>
  )
}

export default Nav
