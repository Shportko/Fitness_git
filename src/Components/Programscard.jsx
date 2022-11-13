import * as React from 'react';
import './Programscard.css'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';


export default function RowRadioButtonsGroup() {
  return (
    <div>
        <div className='programs-card-h1'><h2>PROGRAMS</h2></div>
            <div class="div-conteiner">
                <div className='div-program-left'>
                 </div>
            <div>
                <div className="div-center-text">
                    <FormControl >
                        <FormLabel id="demo-row-radio-buttons-group-label">/\/\/\/\/\/\/\/\/\/\//\/\/\/\/\ - GENDER - </FormLabel>
                        <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group" className='buttons-text'>
                            <FormControlLabel  value="female" control={<Radio />} label="Female" />
                            <FormControlLabel value="male" control={<Radio />} label="Male" />
                        </RadioGroup>

                        <FormLabel id="demo-row-radio-buttons-group-label">/\/\/\/\/\/\/\/\/\/\//\/\/\/\/\ - HOW OLD -</FormLabel>
                        <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group" className='buttons-text'>
                            <FormControlLabel value="female" control={<Radio />} label="14-16" />
                            <FormControlLabel value="male" control={<Radio />} label="16-55" />
                            <FormControlLabel value="ll" control={<Radio />} label="55+" />
                        </RadioGroup>

                        <FormLabel id="demo-row-radio-buttons-group-label">/\/\/\/\/\/\/\/\/\/\//\/\/\/\/\ - TARGET - </FormLabel>
                        <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group" className='buttons-text'>
                            <FormControlLabel value="female" control={<Radio />} label="Bulk" />
                            <FormControlLabel value="male" control={<Radio />} label="Cut " />
                            <FormControlLabel value="male" control={<Radio />} label="Ukrepit' spinu " />
                            <FormControlLabel value="male" control={<Radio />} label="Focus on legs" />
                            <FormControlLabel value="male" control={<Radio />} label="Akcent na yagodici" />
                        </RadioGroup>

                        <FormLabel id="demo-row-radio-buttons-group-label">/\/\/\/\/\/\/\/\/\/\//\/\/\/\/\ - EXPIRENSE -</FormLabel>
                        <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group" className='buttons-text'>
                            <FormControlLabel value="female" control={<Radio />} label="novi4ek" />
                            <FormControlLabel value="male" control={<Radio />} label="3 - 6 month " />
                            <FormControlLabel value="male" control={<Radio />} label="6 - 9 month" />
                            <FormControlLabel value="male" control={<Radio />} label="9 - 12 month" />
                            <FormControlLabel value="male" control={<Radio />} label="opitnii" />
                        </RadioGroup>
                        <Button variant="contained" color='error'>DONE</Button>
                        </FormControl>
                    </div> 
                </div>
            <div className='div-program-right'>
            </div>
        </div>
    </div>
  );
}
