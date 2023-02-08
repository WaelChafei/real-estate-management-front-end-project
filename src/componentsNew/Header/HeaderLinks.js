/*eslint-disable*/
import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LockOpenIcon from '@material-ui/icons/LockOpen';
// @material-ui/icons
import { Apps, CloudDownload } from "@material-ui/icons";
import MapIcon from '@material-ui/icons/Map';
// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
    
            <Link to={"/Map"} className={classes.dropdownLink}     className={classes.navLink}> 
            <MapIcon className={classes.icons} />  View Map
            </Link>
           
    
      </ListItem>
      <ListItem className={classes.listItem}>

         <Link to={"/login"} className={classes.link}
           color="transparent"
           className={classes.navLink}
        >
          <LockOpenIcon className={classes.icons} /> Login
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        {/*<Tooltip title="Delete">
          <IconButton aria-label="Delete">
            <DeleteIcon />
          </IconButton>
        </Tooltip>*/}
    
          <Button
            href="https://twitter.com/"
            target="_blank"
            color="transparent"
            className={classes.navLink}
          >
            <TwitterIcon/>
          </Button>
     
      </ListItem>
      <ListItem className={classes.listItem}>
        
          <Button
            color="transparent"
            href="https://www.facebook.com/"
            target="_blank"
            className={classes.navLink}
          >
            <FacebookIcon />
          </Button>
        
      </ListItem>
      <ListItem className={classes.listItem}>
   
          <Button
            color="transparent"
            href="https://www.instagram.com/"
            target="_blank"
            className={classes.navLink}
          >
            <InstagramIcon/>
          </Button>
    
      </ListItem>
    </List>
  );
}
