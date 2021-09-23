import React, { useEffect, useState } from 'react';
import './countdown.scss';
import Column from './image/column';
import logo from './image/Image.png'



const Countdown = () => {
     const [days,setDays]=useState()
     const [hours, setHours]=useState()
     const [minute,setMinute]=useState()
     const [seconds,setSeconds]=useState()

     let interval;
     const Bomb=()=>{
         const explotionDate = new Date(2021,8,24,15,0,0,0).getTime()

         interval=setInterval(()=>{
             const now =new Date().getTime()

             const TimeLeft = explotionDate-now;

             const DaysLeft = Math.floor(TimeLeft/(24*60*60*1000))
             const hoursLeft = Math.floor(TimeLeft % (24*60 * 60 * 1000)/(1000*60*60))
             const minsLeft = Math.floor(TimeLeft % ( 60* 60 * 1000)/(60*1000))
             const secLeft = Math.floor(TimeLeft % (60* 1000)/(1000))

             if (TimeLeft<0){
                 clearInterval(interval.current)
             }
             else{
                 setDays(DaysLeft);
                 setHours(hoursLeft);
                 setMinute(minsLeft);
                 setSeconds(secLeft);

             }


         })
     }
  
     useEffect(()=>Bomb())


    return (
        <div class='page' >
            <div className="image"><img src={logo} alt="" /></div>
            <div className="body">
               <div className="count-down-writeup">
                    COUNTDOWN TO SOCIAL MEDIA LAUNCH
               </div>
               <div className="days_hours">
                   <span>Days</span>
                    <span>Hours</span>
                    <span>minutes</span>
                    <span>seconds</span>
               </div>
               <div className="time">
                   <span class='span'>
                     {days}
                   </span>
                    <span>
                       <Column/>
                       <Column/>
                    </span>
                    <span class='span'>
                       {hours}
                    </span>
                    <span>
                        <Column />
                        <Column />
                    </span>
                    <span class='span'>
                        {minute}
                    </span>
                    <span>
                        <Column />
                        <Column />
                    </span>
                    <span class='span'>
                        {seconds}
                    </span>
               </div>
                
                {/* <div className="bottom"> */}
                    {/* <div className="top">
                        Sign up to get notified when we go live
                        <form action="">
                            <input type="email" placeholder='your email address'/>
                            <button>Notify me</button>
                        </form>
                    </div>
                </div> */}
            
            </div>
        </div>
    );
}

export default Countdown;
