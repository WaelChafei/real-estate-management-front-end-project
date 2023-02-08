import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import PropTypes from 'prop-types';
// MUI stuff
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
// Icons
import NotificationsIcon from '@material-ui/icons/Notifications';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ChatIcon from '@material-ui/icons/Chat';
// Redux
import { connect } from 'react-redux';
import { markNotificationsRead } from './redux/actions/userActions';
import {useState} from 'react';
import axios from "axios";


import CircularProgress from '@material-ui/core/CircularProgress';

let x=0;
let y=0;
let noti=[];

class Notifications extends Component {
  state = {
    anchorEl: null,
    notif:null,
    name :[],
    cin:[],
    uid:"",
    val:"",
    notlength:null
   };
  handleOpen = (event) => {
    this.setState({ anchorEl: event.target });
  };
  handleClose = () => {
    this.setState({ anchorEl: null });
  };
  onMenuOpened = () => {
    let unreadNotificationsIds = this.state.notif
      .filter((not) => !not.read)
      .map((not) => not.id);

console.log("unreadNotificationsIds",unreadNotificationsIds)
      
    this.props.markNotificationsRead(unreadNotificationsIds);
  };
  render() {
    const AuthStr = localStorage.getItem('FBIdToken');

    axios.get('/uid',{ headers: { Authorization: AuthStr } })
    .then(ras =>{
        this.setState({uid: ras.data } );

     
     })
    axios.get('/user',{ headers: { Authorization: AuthStr } })
     .then(res => {

       for(var i=0 ; i< res.data.length;i++){
          if(res.data[i].userId==this.state.uid){
            this.setState({val: res.data[i].cin } );

       
              break;
      }
       }




     })


    axios.get('/notifications',{ headers: { Authorization: AuthStr } }    )
      .then(res=>{
        console.log("this.state.val",this.state.val);
        console.log("res.data[i].recipient",res);

          for (var i = 0; i < res.data.length; i++) {

               if(res.data[i].recipient==this.state.val){
                noti.push(res.data[i]);
                console.log("noti",noti);
               }
              
          }
       this.setState({notif: noti } );
 
      }
        )
   
    const anchorEl = this.state.anchorEl;

    dayjs.extend(relativeTime);

    let notificationsIcon;
    if (this.state.notif && this.state.notif.length > 0) {
      this.state.notif.filter((not) => not.read === false).length > 0
        ? (notificationsIcon = (
            <Badge
              badgeContent={
                this.state.notif.filter((not) => not.read === false).length
              }
              color="secondary"
            >
              <NotificationsIcon style={{color:"#5CACE0" }}/>
            </Badge>
          ))
        : (notificationsIcon = <NotificationsIcon />);
    } else {
      notificationsIcon = <NotificationsIcon />;
    }
    let tab=[];
    let cab=[];
    console.log("this.state.notif ",this.state.notif );
    let notificationsMarkup =
    this.state.notif && this.state.notif.length > 0 ? (
      
      this.state.notif.map( (not,index) => {
   
        const AuthStr = localStorage.getItem('FBIdToken');
   
       

            const verb = not.type == 'Contract created' ? 'is interested on a post' :"";
     
          const time = dayjs(not.createdAt).fromNow();
          const iconColor = not.read ? 'primary' : 'secondary';
          const icon =
            not.type === 'Contract created' ? (
              <FavoriteIcon color={iconColor} style={{ marginRight: 10 }} />
            ) : (
              <ChatIcon color={iconColor} style={{ marginRight: 10 }} />
            );

          return (<div key={not.createdAt}>
         
            <MenuItem key={not.createdAt} onClick={this.handleClose}>
              {icon}
              <Typography
                component={Link}
                color="default"
                variant="body1"
        
              >
                
                 {  
                 not.type == 'Ready To pay' ?(<p> {verb} </p>):("")
                
                 
                 }
              </Typography>
            </MenuItem>
            </div>
          );
        })
      ) : (
        <MenuItem onClick={this.handleClose}>
          You have no notifications yet
        </MenuItem>
      );
    return (
      <Fragment>
        <Tooltip placement="top" title="Notifications">
          <IconButton
            aria-owns={anchorEl ? 'simple-menu' : undefined}
            aria-haspopup="true"
            onClick={this.handleOpen}
          >
            {notificationsIcon}
          </IconButton>
        </Tooltip>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
          onEntered={this.onMenuOpened}
        >
          {notificationsMarkup}
        </Menu>
      </Fragment>
    );
  }
}

Notifications.propTypes = {
  markNotificationsRead: PropTypes.func.isRequired,
 
};

const mapStateToProps = (state) => ({
 
});

export default connect(
  mapStateToProps,
  { markNotificationsRead }
)(Notifications);