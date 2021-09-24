// import React, { useState,useEffect } from 'react'
// import logo from './images/logo.png'
// import './confirm.scss'

// export default function Confirm() {
//     const [content,setContent]=useState()
//     const confirm = {
//         title:'Confirm your registration',
//         body:<div>
//         <p>thank you for joing our community</p>

//         <div class='blue'>your private key is:</div>
//         <div class='key'>nfigiowetigweirgmieormgvnekntio</div>
//         <div class='blue'>your wallet address is:</div>
//         <div class='key'>fnbvjngtuenwutnvntugnewrg ewugegnet</div>
//         <p>please save these details</p>
//         <p>kindly confirm your email address by clicking the link below</p>

//         <button>
//             Verify Email Address
//         </button>
//     </div>}
//     const multiple = {
//         title:'multiple login attempts',
//         body:<div>
//         <p>We noticed there has been multiple attempts at accessing your account,</p>
//         <p>Kindly confirm if you are the one trying to sign in</p>
//         <button>Yes, it was me</button>
//         <p>If it wasn’t you, change your password and sign out of all instances with the button below</p>
//         <button class='not'>Change password</button>
//         </div>
//     }

//     useEffect(()=>setContent(multiple))
//     return (
//         <div class='email-template'>
//            <head><img src={logo} alt=''/></head>
//            <body>
//                <h2>{content.title}</h2>
//                <p class='name'>hello dimgba</p>
//                {content.body}
//                 <div class='greeting'><span>Best,</span><p>SWIRGE team</p></div>
//                </body> 

//                <footer>Copyright 2021 SWIRGE.All rights reserved.</footer>
//         </div>
//     )
// }
