import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import { Link } from 'react-router-dom';
import dayjs from 'dayjs';
// MUI stuff
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import MuiLink from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
// Icons
import LocationOn from '@material-ui/icons/LocationOn';
import LinkIcon from '@material-ui/icons/Link';
import CalendarToday from '@material-ui/icons/CalendarToday';
import EditIcon from '@material-ui/icons/Edit';
import KeyboardReturn from '@material-ui/icons/KeyboardReturn';
//Redux
import { connect } from 'react-redux';
import { logoutUser, uploadImage } from '../GP/redux/actions/userActions';
import '../GP/prof.css';
import ProfileSkeleton from '../GP/ProfileSkeleton';
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import {useState} from 'react';
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardAvatar from "components/Card/CardAvatar.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import { makeStyles } from "@material-ui/core/styles";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import Notifications from '../GP/Notifications';

 export default function Navbar() {
   
  const AuthStr = localStorage.getItem('FBIdToken');
  const token=localStorage.FBIdToken;
  
  const decodedToken=jwtDecode(token);
  const uid=decodedToken.user_id.toString();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [email, setEmail] = useState("");
 
   
  axios.get('/user',{ headers: { Authorization: AuthStr } })
  .then(res => {
  
    for(var i=0 ; i< res.data.length;i++){
       if(res.data[i].userId==uid){
        setFirstName(res.data[i].firstName);
        setLastName(res.data[i].lastName);
        setEmail(res.data[i].email);
        setImageUrl(res.data[i].imageUrl);
 

        break;
   }
    }
  })
  



let  handleImageChange = (event) => {
    const image = event.target.files[0];
    const formData = new FormData();
    formData.append('image', image, image.name);
    console.log(image);
       axios
        .post('/user/image', formData ,{ headers: { Authorization: AuthStr } })
        .then((res) => {
              console.log("done image",res);
        })
        .catch((err) => console.log(err));
    
  };
 let handleEditPicture = () => {
    const fileInput = document.getElementById('imageInput');
    fileInput.click();
  };


    const styles = {
      cardCategoryWhite: {
        color: "rgba(255,255,255,.62)",
        margin: "0",
        fontSize: "14px",
        marginTop: "0",
        marginBottom: "0"
      },
      cardTitleWhite: {
        color: "#FFFFFF",
        marginTop: "0px",
        minHeight: "auto",
        fontWeight: "300",
        fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
        marginBottom: "3px",
        textDecoration: "none"
      }
    };
    const useStyles = makeStyles(styles);
    
    const classes = useStyles();

     
  let handleLogout = (event) => {
    localStorage.removeItem('FBIdToken');
    localStorage.removeItem('role');

    delete axios.defaults.headers.common['Authorization'];
    window.location.href="/login";
    event.preventDefault();
    };
  return(

 
     
     
        <Paper >
            <br></br>
            <br></br>
                <Card profile>
            <CardAvatar profile>
              <a  >
              <img src={imageUrl} alt="profile" className="profile-image" />
            
              </a>
            </CardAvatar>
            <input
                type="file"
                id="imageInput"
                hidden="hidden"
                onChange={handleImageChange}
              />
            <Button
                tip="Edit profile picture"
                onClick={handleEditPicture}
                btnClassName="button"
              >
                <EditIcon color="primary" />
              </Button>
            <CardBody profile>
              <h6 className={classes.cardCategory}> @{firstName} {lastName}</h6>
              <h4 className={classes.cardTitle}>   <Typography variant="body2">{email}</Typography></h4>
            
      
              <p className={classes.description}>
               Welcome to your personal page Mr {firstName} {lastName} 
              </p>
              <Button style={{color:"gray",paddingTop:"20px",paddingBottom:"20px" }} onClick={handleLogout}   ><ExitToAppIcon style={{marginRight:"10px"}} />Logout</Button>

            </CardBody>

          </Card>

        </Paper>
 
  
    
  );
}

 