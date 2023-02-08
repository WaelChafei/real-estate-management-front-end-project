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
import mazed from "../../image/mazed.png"
import axios from "axios";
import history from "../../history";
import DashboardIcon from '@material-ui/icons/Dashboard';
import Profile from "GP/profile";
import CssBaseline from '@material-ui/core/CssBaseline';
 import HomeWorkIcon from '@material-ui/icons/HomeWork';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import MapIcon from '@material-ui/icons/Map';

const drawerWidth = 150;

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
 
const Drawer = () => {
   const classes = useStyles();
   const itemsList = [
    {
      text: "Home",
      icon: <HomeWorkIcon style={{color:"#5CACE0" }}/>,
      onClick: () => window.location.href="/admin"
    },
    {
      text: "Dashboard",
      icon: <DashboardIcon style={{color:"#5CACE0" }}/>,
      onClick: () =>  window.location.href="/admin/dash"
    },
    {
        text: "Add employee",
        icon: <GroupAddIcon style={{color:"#5CACE0" }}/>,
        onClick: () => window.location.href="/admin/employee"
      },  {
        text: "Map",
        icon: <MapIcon style={{color:"#5CACE0" }}/>,
        onClick: () => window.location.href="/admin/map"
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
                      <Profile/>  
    <MUIDrawer variant="permanent" className={classes.drawer}  classes={{ paper: classes.paper }} style={{marginRight:"50px"}} >

<img src={mazed} style={{width:"150px",height:"30px",margin:"20px"}} />
<Divider/>
      <List>
        {itemsList.map((item, index) => {
          const { text, icon, onClick } = item;
          return (
            <ListItem button key={text} onClick={onClick}>
              {icon && <ListItemIcon>{icon}</ListItemIcon>}
              <ListItemText primary={text} /> 
            </ListItem>
            
          );
        })}
      </List>
      <Divider/>
      
      <Button style={{color:"gray",paddingTop:"20px",paddingBottom:"20px" }} onClick={handleLogout}   ><ExitToAppIcon style={{marginRight:"10px"}} />Logout</Button>
    </MUIDrawer>

</div>
  );
};

export default withRouter(Drawer);

 