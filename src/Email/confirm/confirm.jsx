import React from 'react'
import logo from './images/logo.png'
import './confirm.scss'

export default function Confirm() {
    return (
        <div class='email-template'>
           <head><img src={logo} alt=''/></head>
           <body>
               <h2>Confirm your registration</h2>
               <p class='name'>hello dimgba</p>
               <p>thank you for joing our community</p>
                  
                <div class='blue'>your private key is:</div>
                <div class='key'>nfigiowetigweirgmieormgvnekntio</div>
                <div class='blue'>your wallet address is:</div>
                <div class='key'>fnbvjngtuenwutnvntugnewrg ewugegnet</div>
                <p>please save these details</p>
                <p>kindly confirm your email address by clicking the link below</p>

                <button>
                Verify Email Address
                </button>
                <div class='greeting'><span>Best,</span><p>SWIRGE team</p></div>
               </body> 

               <footer>Copyright 2021 SWIRGE.All rights reserved.</footer>
        </div>
    )
}
