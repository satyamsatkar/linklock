import React from 'react'
import img1 from '../assets/landing-image.png'
import { Link } from 'react-router-dom'

const LandingPage = () => {
  return (
    <div className="landing-page padd-20">
    <div className="pt-50">
      <img src={img1} alt="" />
    </div>
    <div className="text-center text-part">
      <h2 className="">Get Started</h2>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit quae</p>
    </div>
    <Link to="/login"><button className="btn-2">Login</button></Link>
  </div>
  )
}

export default LandingPage