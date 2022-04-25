import React from 'react'
import {GiCrossedBones} from 'react-icons/gi'
import './signin.css'
import { useGlobalContext } from '../context'

const SignIn = () => {
    const {isModalOn , isOverlayOn , handleOverlayClose, modalClose} = useGlobalContext()
  return (
      <>
      <div className={`${isOverlayOn ? 'overlay overlay-active': 'overlay'}`}></div>
    <div className={`${isModalOn?'login-form active':'login-form'}`}>
    <div className="max-width">
        <header>Log in</header>
        <div className="form-content">
            <span ><button className='i' onClick={()=>{modalClose() ; handleOverlayClose()}}>
                    <GiCrossedBones/>
                </button></span>  
            <form>
                <div className="form-item">
                    <span>Email</span>
                    <input type="email" name="email" id="email"/>
                </div>
                <div className="form-item">
                    <span>Password</span>
                    <input type="password" name="password" id="password"/>
                </div>
                <div className="form-check">
                    <input type="checkbox" id="remember" name="remember"/>
                    <span>Remember me</span>
                </div>
                <div className="btn">
                    <button>Sign in</button>
                </div>
                <div className="form-end">
                    <a href="">Forgot password?</a>
                    <a href="">Sign Up</a>
                </div>
            </form>
        </div>
    </div>
</div>
</>
  )
}

export default SignIn
