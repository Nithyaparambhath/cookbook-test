import React from 'react'
import { Link } from 'react-router-dom'

function Sidebar() {
  return (
    <div style={{height:'100vh'}} className='bg-dark'>
        <h2>Recipes</h2>
        <ul>
            <li className='mb-3'><Link style={{textDecoration:'none',color:'#ffffff',fontSize:'20px'}}>Chicken Curry</Link></li>
            <li><Link style={{textDecoration:'none',color:'#ffffff',fontSize:'20px'}}>Chicken Curry</Link></li>
        </ul>
    </div>
  )
}

export default Sidebar