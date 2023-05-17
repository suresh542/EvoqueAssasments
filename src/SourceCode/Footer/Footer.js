import React from 'react'
import "./Footer.scss"


export default function Footer() {
   return (
       <div className='Footer'>
           <section className="ImageContent d-flex justify-content-center text-center  p-5" id="" >
               <div className="mt-5" id="">
                   <h2>
                       Join the <span>family</span> today&#33;
                   </h2>
                   <div className='mt-4 footerContents'>
                       Take advantage of the various products to build your own <br /> customized trading strategies
                   </div>
                   <div className="newAccountBtn mt-5 mb-5">
                       <button className="btn">Open new account</button>
                   </div>
               </div>
           </section>
       </div>
   )
}
