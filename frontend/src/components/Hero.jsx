import React, { useEffect, useState } from 'react'
import axios from "axios"

const Hero = () => {
  const [tagline, setTagline] = useState("")
  const [bold, setBold] = useState("")

  useEffect(()=>{

    const getTagline = async ()=>{
      const response = await axios.get("http://localhost:3000/tagline")
      setTagline(response.data.tagline)
      setBold(response.data.bold)
    }

    getTagline()

  },[])

  return (
    <>
    <div className="hero-border">

      <div className="left">
        <h1 className='tagline'>{tagline}</h1>
        <br />
        <h1 className="bold tagline ">{bold}</h1>
      </div>
      <div className="right">
        <div className="phone-image">

        </div>
        <h1 className='hero-title'>Iphone 11</h1>
      </div>
    </div>
    </>
  )
}

export default Hero