import React from 'react';
import { Drawer, List, ListItem, ListItemIcon } from '@mui/material';
import AI_logo from '../../static/images/Indicator Icon/AI.png';
import Rejections_logo from '../../static/images/Indicator Icon/Rejections.png';
import materialfull_logo from '../../static/images/material Icon/Material-Full.png';
const SideMenu = () => {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 60,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: 60, boxSizing: 'border-box' },
      }}
    >
      <List>
        <ListItem button>
            <ListItemIcon>
                <img src={AI_logo} alt=' ' style={{}} />
            </ListItemIcon>
          {/* <ListItemText primary="Item 1" /> */}
        </ListItem>
        <ListItem button>
        <img src={Rejections_logo} alt=' ' style={{}} />
          {/* <ListItemText primary="Item 2" /> */}
        </ListItem>
        <ListItem button>
        <img src={materialfull_logo} alt=' ' style={{}} />
          {/* <ListItemText primary="Item 3" /> */}
        </ListItem>
      </List>
    </Drawer>
  );
};

export default SideMenu;
