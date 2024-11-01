import React from 'react';
import { MenuItem, Select, FormControl, InputLabel } from '@mui/material';
import { styled } from '@mui/material/styles';

const BorderlessSelect = styled(Select)({
  '& .MuiOutlinedInput-notchedOutline': {
    border: 'none',
  },
  '&:hover .MuiOutlinedInput-notchedOutline': {
    border: 'none',
  },
  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
    border: 'none',
  },
});

const BorderlessDropdown = ({ label, options, value, onChange }) => {
  return (
    <FormControl variant="outlined" style={{width : "13%"}}>
      <InputLabel>{label}</InputLabel>
      <BorderlessSelect
        value={value}
        onChange={onChange}
        label={label}
      >
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </BorderlessSelect>
    </FormControl>
  );
};

export default BorderlessDropdown;
