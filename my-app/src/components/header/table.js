import React, { useState } from 'react';
import {
  Box, Checkbox, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
  Typography, LinearProgress, Tooltip,Divider
} from '@mui/material';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import { styled } from '@mui/material/styles';
import SideDrawer from '../sidebar/sideDrawer';

// Custom progress bar component
const UtilizationProgress = styled(LinearProgress)(({ value }) => ({
  height: 20,
  width: 150,
  borderRadius: 5,
  backgroundColor: '#f3f3f3',
  '& .MuiLinearProgress-bar': {
    borderRadius: 5,
    backgroundColor:
      value > 90
        ? 'rgba(0, 128, 0, 0.4)'  // Green with 40% opacity
        : value > 50
          ? 'rgba(171, 99, 248, 0.4)'  // Purple with 40% opacity
          : 'rgba(255, 0, 0, 0.4)',  // Red with 40% opacity
  },
}));

const rows = [
  { id: 1, origin: 'Laredo, TX <pincode>', destination: 'Grand Prairie, TX <pincode>', pickups: 1, drops: 2, carrier: 'CH Robinson, FTL', utilization: 74, vehicle: 'Wt, 53 Ft Trailer', weight: '8055 lbs', orders: 40, qty: '2 pallets',total_Qty: '33'},
  { id: 2, origin: 'Laredo, TX <pincode>', destination: 'Grand Prairie, TX <pincode>', pickups: 1, drops: 2, carrier: 'CH Robinson, FTL', utilization: 74, vehicle: 'Wt, 53 Ft Trailer', weight: '8055 lbs', orders: 40, qty: '2 pallets',total_Qty: '33'},
  { id: 4, origin: 'Laredo, TX <pincode>', destination: 'Grand Prairie, TX <pincode>', pickups: 1, drops: 2, carrier: 'CH Robinson, FTL', utilization: 74, vehicle: 'Wt, 53 Ft Trailer', weight: '8055 lbs', orders: 40, qty: '2 pallets',total_Qty: '33'},
  { id: 5, origin: 'Laredo, TX <pincode>', destination: 'Grand Prairie, TX <pincode>', pickups: 1, drops: 2, carrier: 'Monroe Transport, Private Fleet ', utilization: 74, vehicle: 'Wt, 1AC0991', weight: '8055 lbs', orders: 40, qty: '2 pallets',total_Qty: '33'},
];

const TableWithProgressbar = () => {
  const [hoveredTruck, setHoveredTruck] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedRowData, setSelectedRowData] = useState(null);
  const handleRowClick = (row) => {
    setSelectedRowData(row);
    setDrawerOpen(true);
  };
  const closeDrawer = () => {
    setDrawerOpen(false);
    setSelectedRowData(null);
  }

  return (
    <Box sx={{ bgcolor: '#F3F6FC', padding: "170px 24px 24px 46px" }}>
        <TableContainer sx={{ mt: 2, mx: 3 }}>
        <Table sx={{ minWidth: 650 }} aria-label="customized table">
            <TableHead>
            <TableRow>
                <TableCell padding="checkbox">
                <Checkbox />
                </TableCell>
                <TableCell>S.NO</TableCell>
                <TableCell>ORIGIN</TableCell>
                <TableCell>
                <Box display="flex" alignItems="center">
                    DESTINATION
                </Box>
                </TableCell>
                <TableCell>
                CARRIER | TYPE
                <Box component="span" sx={{ borderLeft: '1px dotted #ccc', mx: 2, height: '100%' }} />
                </TableCell>
                <TableCell>MAX UTILISATION | VEHICLE</TableCell>
                <TableCell>TOTAL | WEIGHT | QTY</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {rows.map((row) => (
                <TableRow
                key={row.id}
                sx={{
                    '&:not(:last-child)': { borderBottom: '10px solid #F3F6FC' },  // Adds transparent gap
                    '&:hover': { backgroundColor: 'white' },  // Optional: Add hover effect
                    backgroundColor: '#FAFAFA',
                }}
                onClick={() => handleRowClick(row)}
                >
                <TableCell padding="checkbox">
                    <Box
                    onMouseEnter={() => setHoveredTruck(row.id)}
                    onMouseLeave={() => setHoveredTruck(null)}
                    sx={{ display: 'flex', alignItems: 'center' }}
                    >
                    {hoveredTruck === row.id ? (
                        <Checkbox />
                    ) : (
                        <Tooltip title="Hover to select">
                        <IconButton>
                            <LocalShippingIcon />
                        </IconButton>
                        </Tooltip>
                    )}
                    </Box>
                </TableCell>
                <TableCell>{row.id}</TableCell> {/* Display the ID here */}
                <TableCell>
                    <Typography variant="body2" component="div">
                    <strong>{row.origin.split(',')[0]}</strong><br />
                    <Typography variant="body2" component="span">
                    {row.origin.split(',')[1]}
                    </Typography>
                    </Typography>
                </TableCell>
                <TableCell >
                
                <Typography variant="body2" component="div" style={{borderRight: "1px dashed #E2EAEC"}}>
                    <strong>{row.destination.split(',')[0]}</strong><br />
                    <Typography variant="body2" component="span">
                    {row.destination.split(',')[1]}
                    </Typography>
                    </Typography>
                </TableCell>
                <TableCell>
                <Typography variant="body2" component="div">
                    <strong>{row.carrier.split(',')[0]}</strong><br />
                    <Typography variant="body2" component="span">
                    {row.carrier.split(',')[1]}
                    </Typography>
                    </Typography>
                </TableCell>
                <TableCell>
                    <Box style={{borderRight: "1px dashed #E2EAEC"}}>
                        <Box style={{display: "flex",width: "230px",justifyContent : "space-between"}}>
                        {row.utilization}%<UtilizationProgress variant="determinate" value={row.utilization} />
                        <Typography variant="body2" component="div" style={{backgroundColor: "#F2E7FE", padding:"2px 4px 2px 4px",borderRadius: "4px"}}>
                                {row.vehicle.split(',')[0]}
                        </Typography>
                        </Box>
                        <Box>
                        {row.vehicle.split(',')[1]}
                        </Box>
                    </Box>
                </TableCell>
                <TableCell>
                    <Box style={{display: "flex", width: "170px", justifyContent: "space-between", padding:"3px"}}>
                        <Typography variant="body2" component="div">
                            {row.weight} 
                        </Typography>
                        <Box style={{display: "flex", alignItems: "center"}}>
                            <Typography variant="body2" component="div" style={{backgroundColor: "#F2E7FE", padding:"2px 3px 2px 3px",borderRadius: "4px",marginRight:"2px"}}>
                                Orders  
                            </Typography>
                            {row.orders}
                        </Box>
                    </Box>
                    <Box style={{display: "flex", width: "170px", justifyContent: "space-between", padding:"3px"}}>
                        <Box style={{display: "flex", alignItems: "center"}}>
                            <Typography variant="body2" component="div" style={{backgroundColor: "#F2E7FE", padding:"2px 3px 2px 3px",borderRadius: "4px",marginRight:"2px"}}>
                                Qty 
                            </Typography>
                            {row.total_Qty}
                        </Box>
                        <Typography variant="body2" component="div">
                        {row.qty}
                        </Typography>
                    </Box>
                </TableCell>
                </TableRow>
            ))}
            </TableBody>
        </Table>
        </TableContainer>
        <SideDrawer open={drawerOpen} onClose={closeDrawer} rowData={selectedRowData} />
    </Box>
  );
};

export default TableWithProgressbar;
