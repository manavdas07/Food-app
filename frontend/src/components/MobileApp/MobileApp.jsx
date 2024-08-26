import React from 'react'
import './MobileApp.css'
import { assets } from '../../assets/assets'

const App = () => {
  return (
    <div className='mobile-app' id='mobile-app'> 
       <p>For Better Experience Download <br /> Tomato App </p>
       <div className="mobile-app-download-platforms">
         <img src={assets.play_store} alt="" />
         <img src={assets.app_store} alt="" />
       </div>
    </div>
  )
}

export default App