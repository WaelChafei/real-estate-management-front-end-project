import React from "react";
import {
  Drawer as MUIDrawer,
  ListItem,
  List,
  ListItemIcon,
  ListItemText
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import { withRouter } from "react-router-dom";
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import mazed from "../image/mazed.png"
import axios from "axios";
import DashboardIcon from '@material-ui/icons/Dashboard';
import Profile from "GP/profile";
import Navbar from "./Navbar";
import CssBaseline from '@material-ui/core/CssBaseline';
import AccessibilityIcon from '@material-ui/icons/Accessibility';
import HomeWorkIcon from '@material-ui/icons/HomeWork';

import PrintIcon from '@material-ui/icons/Print';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import {useState} from 'react';

const drawerWidth = 220;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
  paper: {
    background: "#21292F",
    color:"white",
  
  }
}));
 
const Drawer = (props) => {
   const {history} = props;
   console.log("props",props);
   const classes = useStyles();
   const [op, setOp] = useState([])
   const itemsList = [
    {
      text: "Home",
      icon: <HomeWorkIcon style={{color:"#5CACE0" }} />,
      onClick: () => history.push("/")
    },
  
    {
      text: "Update Profile",
      icon: <ContactMailIcon style={{color:"#5CACE0" }} />,
      onClick: () => history.push("/user/form")
    },
    {
      text: "Get your Contract",
      icon: <PrintIcon style={{color:"#5CACE0" }} />,
      onClick: () => history.push("/user/Contract")
    }
  ];
 
 
  let handleLogout = (event) => {
    localStorage.removeItem('FBIdToken');
    localStorage.removeItem('role');

    delete axios.defaults.headers.common['Authorization'];
    window.location.href="/login";
    event.preventDefault();
    };
  return (
                <div className={classes.root}> 
                   <CssBaseline />
                      <Navbar/>  
    <MUIDrawer variant="permanent" className={classes.drawer}  classes={{ paper: classes.paper }}  >

<img src={mazed} style={{width:"150px",height:"30px",margin:"20px"}} />
<Divider/>
      <List>
        {itemsList.map((item, index) => {
          const { text, icon, onClick } = item;
          return (
            <div key={index}>
              
            <ListItem button key={text} onClick={onClick} >
              {icon && <ListItemIcon>{icon}</ListItemIcon>}
              <ListItemText primary={text} /> 
            </ListItem>
            </div>
          );
        })}
      </List>
      <Divider/>
      
      <Button style={{color:"gray",paddingTop:"20px",paddingBottom:"20px" }} onClick={handleLogout}   ><ExitToAppIcon style={{marginRight:"10px"}} />Logout</Button>
    </MUIDrawer>

</div>
  );
};

export default  withRouter(Drawer) ;

 