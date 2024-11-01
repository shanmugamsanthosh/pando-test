// SideDrawer.js
import React from 'react';
import {
  Drawer, Box, Typography, IconButton, Divider
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const SideDrawer = ({ open, onClose, rowData }) => {
  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      sx={{ width: 300,"& .css-y7ab46-MuiPaper-root-MuiDrawer-paper" : {
            top : "152px",
            // backgroundColor: "#D9E6FF",
          } }}
    >
      <Box sx={{ width: 300, padding: 2 }}>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h6">Details</Typography>
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Box>
        <Divider sx={{ my: 1 }} />
        
        {rowData ? (
          <Box>
            <Typography variant="body1"><strong>Origin:</strong> {rowData.origin}</Typography>
            <Typography variant="body1"><strong>Destination:</strong> {rowData.destination}</Typography>
            <Typography variant="body1"><strong>Carrier:</strong> {rowData.carrier}</Typography>
            <Typography variant="body1"><strong>Vehicle:</strong> {rowData.vehicle}</Typography>
            <Typography variant="body1"><strong>Weight:</strong> {rowData.weight}</Typography>
            <Typography variant="body1"><strong>Orders:</strong> {rowData.orders}</Typography>
            <Typography variant="body1"><strong>Qty:</strong> {rowData.qty}</Typography>
          </Box>
        ) : (
          <Typography variant="body2">No data available</Typography>
        )}
      </Box>
    </Drawer>
  );
};

export default SideDrawer;
