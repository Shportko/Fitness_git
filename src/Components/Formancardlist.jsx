import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


  const SelectVariants = () => {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <FormControl variant="standard" color="secondary" sx={{ m: 0, minWidth: 140 }}>
        <InputLabel color='warning' id="demo-simple-select-standard-label">level</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={age}
          onChange={handleChange}
          label="Level"
        >
          <MenuItem value="">
            <em>Choose yours level</em>
          </MenuItem>
          <MenuItem value={10}>level 1</MenuItem>
          <MenuItem value={20}>level 2</MenuItem>
          <MenuItem value={30}>level 3</MenuItem>
          <MenuItem value={40}>level 4</MenuItem>
          <MenuItem value={50}>level 5</MenuItem>
          <MenuItem value={60}>level 6</MenuItem>
          <MenuItem value={70}>level 7</MenuItem>
          <MenuItem value={80}>level 8</MenuItem>
          <MenuItem value={90}>level 9</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

export default SelectVariants
