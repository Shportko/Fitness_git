import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

const RowRadioButtonsGroup = () => {
  return (
    <div>
    <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">How old is you?</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group" className='row-radio-buttons-group'
      >
        <FormControlLabel value="female" control={<Radio />} label="16-18" />
        <FormControlLabel value="male" control={<Radio />} label="18-55" />
        <FormControlLabel value="other" control={<Radio />} label="55+" />
      </RadioGroup>
    </FormControl>
    </div>
  );
}

export default RowRadioButtonsGroup
