import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
 
import axios from 'axios';
import {useState} from 'react';
 import MuiAlert from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';
import StepOneAdd from "./StepOneAdd";
import {   Card, Grid } from '@material-ui/core';
 import ImportImage from "./ImportImage"
import DialogContent from '@material-ui/core/DialogContent';

import Dialog from '@material-ui/core/Dialog';
 

 import {
  withGoogleMap,MapWithAMarker,
  withScriptjs,
  GoogleMap,
  Marker,
  InfoWindow
} from "react-google-maps"
  
  
function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}
 

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: "100%",
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}));

const steps = ['Add a post', 'Add Images to the post'];

  function getStepContent(step,setTitle,setBody,setValues,setSurface,
    setType,setAdresse,setCommercialId,setLat,
    setLng,title,body,values,surface,type,adresse,commercialId,lat,lng,

props,
don,don2,don3,don4,don5,don6,don7,addPostId
 
  ) {

  switch (step) {
    case 0:
      return <StepOneAdd
   
       
         handleChange1={value=>setTitle(value)} 
       handleChange2={value=>setBody(value)}
       handleChange3={value=>setValues(value)}
       handleChange4={value=>setSurface(value)}
       handleChange5={value=>setType(value)}
       handleChange6={value=>setAdresse(value)}
       handleChange7={value=>setCommercialId(value)}
       handleChange8={value=>setLat(value)}
       handleChange9={value=>setLng(value)}
       />;
    case 1:
      return <ImportImage    addPostId={addPostId}  />  ;
 
    default:
      throw new Error('Unknown step');
  }
}

export default function Checkout(props) {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [body, setBody] = useState("");
  const [adresse, setAdresse] = useState("");
  const [commercialId, setCommercialId] = useState("");
  const [title, setTitle] = useState(0);
  const [values, setValues] = useState(0);
  const [surface, setSurface] = useState(0);
  const [type, setType] = useState(0);
  var [lat,setLat]=React.useState("");
  var [lng,setLng]=React.useState("");

  const [addPostId, setaddPostId] = useState("");

    const [don, setDon] = useState("");
    const [don2, setDon2] = useState("");
    const [don3, setDon3] = useState("");
    const [don4, setDon4] = useState("");
    const [don5, setDon5] = useState("");
    const [don6, setDon6] = useState("");
    const [don7, setDon7] = useState("");
 
     const [open, setOpen] = React.useState(false);

  
   
     const handleClose = (event, reason) => {
       if (reason === 'clickaway') {
         return;
       }
   
       setOpen(false);
     };
  
  const handleNext = () => {
    console.log("activeStep",activeStep);
    setActiveStep(activeStep + 1);
/*
    if( (body=="")|| (adresse=="")|| (commercialId=="")||(title=="")||(values!="complete")|| (type=="")){
      if (body==""){
        setDon("1");
      }
      if (adresse==""){
        setDon2("2");
      }
      if (modePayment==""){
        setDon3("3");
      }
      if (nombreMois==""){
        setDon4("4");
      }
      if (paymentDay==""){
        setDon5("5");
      }
      if (status==""){
        setDon6("6");
   
        setDon7("7");
      }
        console.log("userCin",userCin);
        console.log("methodPayment",methodPayment);
        console.log("mantantAvance",mantantAvance);
        console.log("modePayment",modePayment);
        console.log("nombreMois",nombreMois);
        console.log("paymentDay",paymentDay);
        console.log("status",status);
        console.log("emloyeeId",employeeId);
        console.log("don",don);
     }
     else{ 
     setActiveStep(activeStep + 1);
     setDon("");
     setDon2("");

     setDon3("");

     setDon4("");

     setDon5("");

     setDon6("");
     setDon7("");*/
     if(activeStep==0){
    
       console.log("props.postId",props.postId);
      const userdata ={
        title:title,
        body:body,
        price:values,
        surface:surface,
        type:type,
        adresse:adresse,
        commercialId:commercialId,
        status:"false",
        img:"",
        lat:lat,
        lng:lng
       
     }
   
     console.log(userdata);
     const AuthStr = localStorage.getItem('FBIdToken');
     axios.post('/addPost',userdata,{ headers: { Authorization: AuthStr } } )
     .then(res =>{
console.log(res.data);
setaddPostId(res.data.general);
console.log(userdata);
    })
   .catch(err=>{  console.log(err);
     
   })
 
   
  
     }
     if(activeStep==2){
 
     }
     

  
  };
 
  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
     <div  >
     
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
 
     
            <Card style={{width:"99%",marginLeft:"-10px"}} >
            <br></br>
            <br></br>
 
          <Typography component="h1" variant="h4" align="center">
                Add new Post
          </Typography>
          <div >
         
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            {activeStep === steps.length ? (  
              <React.Fragment>
                <Typography variant="h5" gutterBottom>
                  Thank you for Updating your profile.
                </Typography>
                <Typography variant="subtitle1">
                  You just completed this step for buying the real estate 
                  , you will recieve a notification as soon as the contract is prepared , 
                  sign it and bring it to the agency and thank you 
                </Typography>
             
              </React.Fragment>
            ) : (
                <div  style={{width:"100%"}}>
              <React.Fragment>
                  
                {getStepContent(activeStep,setTitle,setBody,setValues,setSurface,
                setType,setAdresse,setCommercialId,setLat,
                setLng,title,body,values,surface,type,adresse,commercialId,lat,lng,
 
    props,
    don,don2,don3,don4,don5,don6,don7,
    addPostId
  )} 
                <div className={classes.buttons}>
              
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                    fullWidth
                    style={{marginBottom:"10px",padding:"10px"}}
                  >
              
                    {activeStep === steps.length - 1 ? 'Add post' : 'Next'}
                  </Button>
             
    
                </div>
              </React.Fragment>
              </div>
            )}
          </React.Fragment>

          </div>
 
          </Card>
        
    </div>
    
   );
}