import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Header({setRecipe}) {
    // const navigate = useNavigate()

    const navigateHome = ()=>{
        setRecipe(null)
    }

    
    
  return (
    <div>
        
            <Navbar expand="lg" className="bg-dark">
                <Container>
                    <Navbar.Brand><Link style={{textDecoration:'none',textTransform:'uppercase',fontWeight:'800'}} className='text-warning fs-2'onClick={navigateHome}> <i class="fa-solid fa-utensils fa-bounce"></i> Recipe Book</Link></Navbar.Brand>
                    
                </Container>
            </Navbar>
        
    </div>
  )
}

export default Header