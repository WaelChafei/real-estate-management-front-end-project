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


 
let x=0;
let y=0;

class Notifications extends Component {
  state = {
    anchorEl: null,
    notif:null,
    name :[],
    cin:[],
    notlength:null
   };
  handleOpen = (event) => {
    this.setState({ anchorEl: event.target });
  };
  handleClose = () => {
    this.setState({ anchorEl: null });
  };
  onMenuOpened = () => {
    let unreadNotificationsIds = this.props.notifications
      .filter((not) => !not.read)
      .map((not) => not.notificationId);
    this.props.markNotificationsRead(unreadNotificationsIds);
  };
  render() {
    const AuthStr = localStorage.getItem('FBIdToken');

    axios.get('/notificationsInterest',{ headers: { Authorization: AuthStr } }    )
      .then(res=>{
       this.setState({notif: res.data } );
 
      }
        )
    const notifications = this.props.notifications;
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
    let notificationsMarkup =
    this.state.notif && this.state.notif.length > 0 ? (
      
      this.state.notif.map((not,index) => {
   
        const AuthStr = localStorage.getItem('FBIdToken');
  
        axios.get('/notificationsUpdate',{ headers: { Authorization: AuthStr } }    ) 
        .then(res=>{
     
      
        axios.get('/user',{ headers: { Authorization: AuthStr } }    ) 
         .then(ras=>{
           
           if(x< res.data.length){

             x++
          for(var i=0 ; i< ras.data.length;i++){
            if(ras.data[i].userDataId==not.sender){
                 tab.push(ras.data[i].firstName)
                 cab.push(ras.data[i].cin)
            }

        }
        this.setState({
          name: tab ,
          cin : cab

       })  
           }
          })    })       

            const verb = not.type === 'Update Details' ? 'updated his profile' :"smt else";
     
          const time = dayjs(not.createdAt).fromNow();
          const iconColor = not.read ? 'primary' : 'secondary';
          const icon =
            not.type === 'interest' ? (
              <FavoriteIcon color={iconColor} style={{ marginRight: 10 }} />
            ) : (
              <ChatIcon color={iconColor} style={{ marginRight: 10 }} />
            );

          return (
            <MenuItem key={not.createdAt} onClick={this.handleClose}>
              {icon}
              <Typography
                component={Link}
                color="default"
                variant="body1"
        
              >
                 {this.state.name[index]} with CIN number {this.state.cin[index]}  {verb} on your scream {time}
              </Typography>
            </MenuItem>
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
  notifications: PropTypes.array.isRequired
};

const mapStateToProps = (state) => ({
  notifications: state.user.notifications
});

export default connect(
  mapStateToProps,
  { markNotificationsRead }
)(Notifications);