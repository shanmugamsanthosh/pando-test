
import "../../App.css";
import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Divider,
} from "@mui/material";
import {
  Menu as MenuIcon,
  Home as HomeIcon,
  Business as BusinessIcon,
  LocalShipping as ShippingIcon,
  Group as GroupIcon,
  Widgets as WidgetsIcon,
} from "@mui/icons-material";


import Ai_logo from '../../static/images/AI.png';
import rejections_logo from "../../static/images/Rejections.png"
import materialfull_logo from "../../static/images/Material-Full.png"
import highlighting_green from '../../static/images/Highlight Notification.png';
import highlighting_red from '../../static/images/Ellipse 2316.png';
import TableWithprogressbar from "./table";

import Header from "./header";
const drawerWidth = 46;

function Dashboard() {
  return (
    <div >
      {/* Top Navigation Bar */}
      <AppBar
        position="fixed"
        sx={{
          boxShadow : "none",
          backgroundColor: "#234357",
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
      >
        <Header/>
      </AppBar>

      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          top : "100px",
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
          "& .css-1lwhjos-MuiPaper-root-MuiDrawer-paper" : {
            top : "152px",
            backgroundColor: "#D9E6FF",
          }
        }}
      >
        <List style={{padding: "0px 0px 0px 0px"}}>
          <ListItem button sx={{paddingLeft: "10px",'& .css-cokf1l-MuiListItemIcon-root':{minWidth : "0px"}}}>
            
            <ListItemIcon style={{marginTop: "5px"}}>
              <img src={Ai_logo} alt="A_logo" style={{width: "20px", height : "20px"}} />
            </ListItemIcon>
            <img src={highlighting_green} alt="highlighting green" style={{width : "6px", height:"6px",position: "absolute",top:"5px", right: "5px"}} className="circle-image"/>
          </ListItem>
          <ListItem button sx={{backgroundColor: "white",paddingLeft: "10px", '& .css-cokf1l-MuiListItemIcon-root':{minWidth : "0px"}}}>
            <ListItemIcon >
            <img src={materialfull_logo} alt="A_logo" style={{width: "20px"}}/>
            </ListItemIcon>
          </ListItem>
          <ListItem button sx={{paddingLeft: "10px",'& .css-cokf1l-MuiListItemIcon-root':{minWidth : "0px"}}}>
            <ListItemIcon style={{marginTop: "5px"}}>
            <img src={rejections_logo} alt="A_logo" style={{width: "20px"}}/>
            </ListItemIcon>
            <img src={highlighting_red} alt="highlighting green" style={{width : "6px", height:"6px",position: "absolute",top:"5px", right: "5px"}} className="circle-image"/>
          </ListItem>
        </List>
      </Drawer>
      <TableWithprogressbar/>
    </div>
  );
}

export default Dashboard;




