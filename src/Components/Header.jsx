import React from 'react'
import './Header.css'
import logo from '../Assets/logo.png'
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';

const Header = () => {
  return (
   <div className="header"> 
      <img src={logo} alt='LOGO' className='logo' />
        <div className='header-menu'>
          <div>
            <Button color='info'>HOME</Button>
            <Button color='warning'>PROGRAMS</Button>
            <Button color='secondary'>PRICING</Button>
            <Button color='success'>FAQ</Button>
          </div>
          <div>
            <ButtonGroup variant="outlined" aria-label="outlined button group">
              <Button color='inherit'>FOR MAN</Button>
              <Button color='inherit'>FOR WOMEN</Button>
              <Button color='inherit'>TEENAGER</Button>
              <Button color='inherit'>55+</Button>
            </ButtonGroup>
          </div>
        </div>
    </div>
  )
}


export default Header;
