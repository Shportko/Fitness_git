import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import formanbulkphoto from '../Assets/bulkphoto.jpg';
import './Formancard.css';
import Button from '@mui/material/Button';
import RowRadioButtonsGroup from './Formancardradio.jsx'
import SelectVariants from './Formancardlist.jsx'


export default function SimplePaper() {
  return (
    <div className='div-forman-card'>
        <div className='forman-text-h1'><h2>PROGRAMS FOR MAN</h2></div>
        <Box
        sx={{
            display: 'flex',
            flexWrap: 'wrap',
            '& > :not(style)': {
            m: 2,
            width: 300,
            height: 390,
            },
        }}
        >
        
        <Paper elevation={3}> 
        <div>
            <div className='forman-text-card'>BULK </div> 
            <div>
                <img src={formanbulkphoto} alt='Photo' className='bulk_photo_forman' />
            </div>
            <div>
               <RowRadioButtonsGroup />
            </div>
            <div className='div-list-card-forman'>
               <SelectVariants />
            </div>
            <div className='button-forman-card'>
            <Button variant="outlined" color='error'>BUY COURSE</Button>
            </div>
        </div>
        </Paper>
        <Paper elevation={3}> 
        <div>
            <div className='forman-text-card'>CUT </div> 
            <div>
                <img src={formanbulkphoto} alt='Photo' className='bulk_photo_forman' />
            </div>
            <div>
               <RowRadioButtonsGroup />
            </div>
            <div className='div-list-card-forman'>
               <SelectVariants />
            </div>
            <div className='button-forman-card'>
            <Button variant="outlined" color='error'>BUY COURSE</Button>
            </div>
        </div>
        </Paper>
        <Paper elevation={3}> 
        <div>
            <div className='forman-text-card'>FOR BACK </div> 
            <div>
                <img src={formanbulkphoto} alt='Photo' className='bulk_photo_forman' />
            </div>
            <div>
               <RowRadioButtonsGroup />
            </div>
            <div className='div-list-card-forman'>
               <SelectVariants />
            </div>
            <div className='button-forman-card'>
            <Button variant="outlined" color='error'>BUY COURSE</Button>
            </div>
        </div>
        </Paper>
        <Paper elevation={3}> 
        <div>
            <div className='forman-text-card'>FOR LEG </div> 
            <div>
                <img src={formanbulkphoto} alt='Photo' className='bulk_photo_forman' />
            </div>
            <div>
               <RowRadioButtonsGroup />
            </div>
            <div className='div-list-card-forman'>
               <SelectVariants />
            </div>
            <div className='button-forman-card'>
            <Button variant="outlined" color='error'>BUY COURSE</Button>
            </div>
        </div>
        </Paper>
        </Box>

    </div>
  );
}