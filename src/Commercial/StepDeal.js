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
 import Review from './Review';
import axios from 'axios';
import {useState} from 'react';
 import MuiAlert from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';
import AddDeal from "./addDeal";
import {   Grid } from '@material-ui/core';
import SendNotary from './SendNotary';
import DialogContent from '@material-ui/core/DialogContent';
import LibraryAddRoundedIcon from '@material-ui/icons/LibraryAddRounded';
import Dialog from '@material-ui/core/Dialog';

  
  
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
      width: 600,
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

const steps = ['Add a deal', 'View and print informations', 'Send to the notary'];

  function getStepContent(step,
    methodPayment, setMethodPayment,
    mantantAvance, setMantantAvance,
    modePayment, setModePayment,
    nombreMois, setNombreMois,
    paymentDay, setPaymentDay,
    status, setStatus, 
    props,
    don,don2,don3,don4,don5,don6,don7,
    employeeId, setEmployeeId,
    setFileUpload,setNotaryEmail
  ) {

  switch (step) {
    case 0:
      return <AddDeal
      firstName={props.firstName} lastName={props.lastName} phone={props.phone} cin={props.cin}
         dn={props.dn} email={props.email} job={props.job} dateCin={props.dateCin}
         methodPayment={props.methodPayment} mantantAvance={props.mantantAvance} modePayment={props.modePayment} nombreMois={props.nombreMois}
         paymentDay={props.paymentDay} employeeId={props.employeeId} status={props.status} dateCin={props.dateCin}
         don={don}  don2={don2}  don3={don3}  don4={don4}  don5={don5}  don6={don6} don7={don7}
         handleChange1={value=>setMethodPayment(value)} 
       handleChange2={value=>setMantantAvance(value)}
       handleChange3={value=>setModePayment(value)}
       handleChange4={value=>setNombreMois(value)}
       handleChange5={value=>setPaymentDay(value)}
       handleChange7={value=>setStatus(value)}
       handleChange8={value=>setEmployeeId(value)}
       price={props.price} surface={props.surface}   type={props.type} 
       />;
    case 2:
      return<div> <SendNotary     handleChange10={value=>setFileUpload(value)}     handleChange11={value=>setNotaryEmail(value)}/>  </div>;
    case 1:
      return <Review userCin={props.cin} methodPayment={methodPayment} mantantAvance={mantantAvance} modePayment={modePayment}
       nombreMois={nombreMois} paymentDay={paymentDay} employeeId={props.employeeId} status={status}      firstName={props.firstName} lastName={props.lastName} phone={props.phone} cin={props.cin}
       dn={props.dn} email={props.email} job={props.job} dateCin={props.dateCin}
       price={props.price} surface={props.surface}   type={props.type} 
     />;
    default:
      throw new Error('Unknown step');
  }
}

export default function Checkout(props) {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);

    const [userCin, setUserCin] = useState("");
    const [employeeId, setEmployeeId] = useState("");

    const [methodPayment, setMethodPayment] = useState("");
    const [mantantAvance, setMantantAvance] = useState("");
    const [modePayment, setModePayment] = useState("");
    const [nombreMois, setNombreMois] = useState(1);
    const [paymentDay, setPaymentDay] = useState("");
    const [status, setStatus] = useState("");
    const [fileUpload, setFileUpload] = useState("");
    const [notaryEmail, setNotaryEmail] = useState("");
    const [don, setDon] = useState("");
    const [don2, setDon2] = useState("");
    const [don3, setDon3] = useState("");
    const [don4, setDon4] = useState("");
    const [don5, setDon5] = useState("");
    const [don6, setDon6] = useState("");
    const [don7, setDon7] = useState("");

  console.log("employeeId",employeeId);
     const [open, setOpen] = React.useState(false);

  
   
     const handleClose = (event, reason) => {
       if (reason === 'clickaway') {
         return;
       }
   
       setOpen(false);
     };
  
  const handleNext = () => {
    console.log("activeStep",activeStep);
    if( (methodPayment=="")|| (mantantAvance=="")|| (modePayment=="")||((nombreMois=="")&&(modePayment!="complete"))|| (paymentDay=="")|| (status=="")  ){
      if (methodPayment==""){
        setDon("1");
      }
      if (mantantAvance==""){
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
     setDon7("");
     if(activeStep==2){
       const notaryData={
         file:fileUpload,
         email:notaryEmail
       }
       console.log("props.postId",props.postId);
      const userdata ={
        userCin : props.cin,
        methodPayment :   methodPayment,
        mantantAvance :   mantantAvance,
        modePayment :   modePayment,
        nombreMois :  nombreMois,
        postId: props.postId,
        paymentDay :  paymentDay,
        employeeId :  employeeId,
        status:  status,
       
     }
   
     console.log(userdata);
     const AuthStr = localStorage.getItem('FBIdToken');
     axios.post('/commercial/createDeal',userdata,{ headers: { Authorization: AuthStr } })
      .then(res =>{
console.log(res.data);
console.log(userdata);
    })
   .catch(err=>{  console.log(err);
     
   })
   const emailBody={email:"waeltn7@gmail.com",
       information:` 
                    firstName: ${props.firstName} 
                    lastName: ${props.lastName} 
                    userCin: ${props.cin} 
                    dateCin: ${props.dateCin}
                    birthday: ${props.dn} 
                    phone: ${props.phone} 
                    email: ${props.email} 
                    job: ${props.job} 

                    price: ${props.price} 
                    surface: ${props.surface}   
                    type: ${props.type} 

                    methodPayment: ${methodPayment} 
                    mantantAvance: ${mantantAvance} 
                    modePayment: ${modePayment}
                    nombreMois: ${nombreMois} 
                    paymentDay: ${paymentDay} 
             `};
   axios.post('/employee/sendContract',emailBody)
    .then(res=>{
      console.log(res.data);
    }).catch(err=>{  console.log(err)});
   
  
     }

     } 

  
  };
  let handleOpen=()=>{
    setOpen(true);
   
   }
  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
     <React.Fragment >
      
        <Dialog open={open} onClose={handleClose} fullWidth maxWidth='md' >
                <DialogContent>
      <CssBaseline />
     
 
      <br></br>
      <br></br>
        
          <Typography component="h1" variant="h4" align="center">
                Send to the notary
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
              <React.Fragment>
                {getStepContent(activeStep,
    methodPayment, setMethodPayment,
    mantantAvance, setMantantAvance,
    modePayment, setModePayment,
    nombreMois, setNombreMois,
    paymentDay, setPaymentDay, 
    status, setStatus,
    props,
    don,don2,don3,don4,don5,don6,don7,
    employeeId, setEmployeeId,
    setFileUpload,setNotaryEmail
  )} 
                <div className={classes.buttons}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} className={classes.button}>
                      Back
                    </Button>
                  )}
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                  >
              
                    {activeStep === steps.length - 1 ? 'Send to notary' : 'Next'}
                  </Button>
             
    
                </div>
              </React.Fragment>
            )}
          </React.Fragment>
 
          </div>
      </DialogContent>
            </Dialog>
 
              <Button onClick={handleOpen} tip="Expand scream" style={{backgroundColor:"#4CAF50",borderRadius:25,color:"white"}} fullWidth>
                  <LibraryAddRoundedIcon/>{"   "}  Add deal
              </Button>
  
        
    </React.Fragment>
    
   );
}