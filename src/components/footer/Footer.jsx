import React from 'react'
import './footer.css';
import { social } from '../../data/navData';

const Footer = () => {
  return (
    <>
    <section className="end">
        <div className="max-width">
            <div className="foot-1">
                <div className="col">
                    <div className="text-1">contact info</div>
                    <div className="primary">Address</div>
                    <div className="secondary">Balkot, Bhaktapur, Nepal</div>
                    <div className="primary">Email</div>
                    <div className="secondary">marshall@gmail.com</div>
                </div>
                <div className="col">
                    <div className="text-1">My account</div>
                    <div className="secondary">about us</div>
                    <div className="secondary">contact us</div>
                    <div className="secondary">my account</div>
                    <div className="secondary">orders history</div>
                    <div className="secondary">more details</div>
                </div>
                <div className="col">
                    <div className="text-1">main features</div>
                    <div className="secondary">super fast service</div>
                    <div className="secondary">Unique sErvices</div>
                    <div className="secondary">account stability</div>
                    <div className="secondary">powerful network</div>
                    <div className="secondary">advanced market</div>
                </div>
                <div className="col">
                    <div className="text-1">Retaliate features</div>
                    <div className="secondary">sinvade service</div>
                    <div className="secondary">Unique sErvices</div>
                    <div className="secondary">Ironty help</div>
                    <div className="secondary">powerful production</div>
                    <div className="secondary">advanced forces</div>
                </div>
            </div>
            <div className="foot-2">
                <div className="foot-2_content">
                    <div className="text">Copyright <i className="fas fa-copyright"></i> 2022 Shaddy, All rights reserverd</div>
                    <ul className="icons">
                       {social.map((item)=>{
                         return <li key={item.id}>
                             <a href={item.url}>
                             {item.icon}
                               </a>
                           </li>
                       })}
                    </ul>
                </div>  
            </div>
        </div>
    </section>
    </>

  )
}

export default Footer
