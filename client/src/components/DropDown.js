import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Link } from 'react-router-dom';

export default function DropDown() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >

          <Link to="/api1">
            <MenuItem value={10} >
              Users which have income lower than $5 USD and have a car of brand “BMW” or “Mercedes”.
            </MenuItem>
          </Link>


          <Link to="/api2">
            <MenuItem value={10} >
              Male Users which have phone price greater than 10,000
            </MenuItem>
          </Link>

          <Link to="/api3">
            <MenuItem value={10} >
              Users whose last name starts with “M” and has a quote character length greater than 15 and email includes his/her last name
            </MenuItem>
          </Link>

          <Link to="/api4">
            <MenuItem value={10} >
              Users which have a car of brand “BMW”, “Mercedes” or “Audi” and whose email does not include any digit
            </MenuItem>
          </Link>

          {/* <Link to="/api5">
            <MenuItem value={10} >
              Show the data of top 10 cities which have the highest number of users and their average income
            </MenuItem>
          </Link> */}

        </Select>
      </FormControl>
    </Box>
  );
}