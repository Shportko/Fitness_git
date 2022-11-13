import React from 'react'
import './Header.css'
import logo from '../Assets/logo.png'
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import {Link} from 'react-router-dom';

const Header = () => {
  return (
   <div className="header"> 
      <img src={logo} alt='LOGO' className='logo' />
        <div className='header-menu'>
          <div>
            <Button color='success'> <Link to="/" style={{textDecoration:'none',color:'#082379'}}>HOME</Link></Button>
            <Button color='success'><Link style={{textDecoration:'none', color:'#082379'}} to="/programs">PROGRAMS</Link></Button>
            <Button color='success'><Link style={{textDecoration:'none', color:'#082379'}} to="/programs">PRICING</Link></Button>
            <Button color='success'><Link style={{textDecoration:'none', color:'#082379'}} to="/programs">FAQ</Link></Button>
          </div>
          <div>
            <ButtonGroup variant="outlined" aria-label="outlined button group">
              <Button color='inherit'><Link style={{textDecoration:'none', color:'#000000'}} to="/programsforman">FOR MAN</Link></Button>
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
