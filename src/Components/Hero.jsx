import React from 'react'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import './Hero.css'
import Header from './Header.jsx'

const Hero = () => {
  return (
    <div className='hero'>
      <div className='left-h'> 
        <Header /> 
      </div>
      <div className='right-h'> 
        <Button variant="outlined" color='error'>REGISTRATION</Button>
        <Button variant="outlined" color='inherit'>SIGN IN</Button>
      </div>
    </div>
  )
}

export default Hero;
