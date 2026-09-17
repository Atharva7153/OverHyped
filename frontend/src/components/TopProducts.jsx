import React, { useEffect, useState } from 'react'
import axios from 'axios'

const TopProducts = () => {
    const [top4, setTop4] = useState([])

    useEffect(()=>{
        const getTop4 = async ()=>{
            const response = await axios.get("http://localhost:3000/top4")
            setTop4(response.data)
        }
        getTop4()
    }, [])

  return (
    <>
    <div className="top-prod">
        <div className="title-container">
            <h1 className='title'>Top 4 Products</h1>
        </div>
        <div className="cards">
            {top4.map((phone, index) =>(
                <div key={index} className="card">
                    <h1>{phone}</h1>
                </div>
            ))}
        </div>
    </div>
    </>
  )
}

export default TopProducts