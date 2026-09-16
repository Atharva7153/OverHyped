import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <div className="border">
        <Link to={"/"}>Home</Link>
        <Link to={"/accessories"}>Accessories</Link>
      </div>
    </>
  )
}

export default Navbar