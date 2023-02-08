import React, { useEffect } from 'react';
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
import AddressForm from './AddressForm';
import PaymentForm from './PaymentForm';
import Review from './Review';
import axios from 'axios';
import {useState} from 'react';
import Submit from './Submit';
import MuiAlert from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';
import "./test.css";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
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
      width: 800,
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

const steps = ['General Informations', 'Add buyers', 'Review your Profile'];

  function getStepContent(step,setCin,setDateCin,setDn,setJob,setAdress,
    setCity,
    setPostalCode,
    setBuyer2,
    setCin2,
    setBuyer3,
    setCin3,cin,
    dateCin,
    dn,
    job,
    adress,
    city,
    postalCode,
    buyer2,
    cin2,
    buyer3,
    cin3,email, setEmail,
    firstName, setFirstName,
    lastName, setLastName,
    phone, setPhone,
    userId, setUserId,status,setActiveStep,val,setPostId,postId
  ) {

  switch (step) {
  
    case 0:
       if(status=="false"){
      return <AddressForm
       handleChange={value=>setCin(value)}
       handleChange1={value=>setJob(value)} 
       handleChange2={value=>setDateCin(value)}
       handleChange3={value=>setDn(value)}
       handleChange4={value=>setAdress(value)}
       handleChange5={value=>setCity(value)}
       handleChange6={value=>setPostalCode(value)}
 
       />; }
       else if(status=="true") {
         step++;
         setActiveStep(1)
       }
       else{
        return <AddressForm
        handleChange={value=>setCin(value)}
        handleChange1={value=>setJob(value)} 
        handleChange2={value=>setDateCin(value)}
        handleChange3={value=>setDn(value)}
        handleChange4={value=>setAdress(value)}
        handleChange5={value=>setCity(value)}
        handleChange6={value=>setPostalCode(value)}
  
        />;
       }
    case 1: 
      return <PaymentForm
      handleChange8={value=>setBuyer2(value)}
      handleChange9={value=>setCin2(value)}
      handleChange10={value=>setBuyer3(value)}
      handleChange11={value=>setCin3(value)}
      val={val}
      handleChange12={value=>setPostId(value)}

       />;
    case 2:
      return <Review cin={cin} dateCin={dateCin} dn={dn} job={job} adress={adress} city={city} postalCode={postalCode} buyer2={buyer2}
      cin2={cin2} buyer3={buyer3} cin3={cin3}  />;
    default:
      throw new Error('Unknown step');
  }
}

export default function Checkout() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [cin, setCin] = useState("");
  const [dateCin, setDateCin] = useState("");
  const [dn, setDn] = useState("");
  const [job, setJob] = useState("");
  const [nbBuy, setNbBuy] = useState("");
  const [uid, setUid] = useState("");
  const [val, setVal] = useState("");
  const [adress, setAdress] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [buyer2, setBuyer2] = useState("");
  const [cin2, setCin2] = useState("");
  const [buyer3, setBuyer3] = useState("");
  const [cin3, setCin3] = useState("");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [userId, setUserId] = useState("");
  const [done, setDone] = useState("");
  const [status, setstatus] = useState("");
  const [postId, setPostId] = useState("");
  const [updateDone, setUpdateDone] = useState("");

var stat;
  const AuthStr = localStorage.getItem('FBIdToken');
 
    
 
    axios.get('/uid',{ headers: { Authorization: AuthStr } })
      .then(ras =>{
        setUid(ras.data)
       })
      axios.get('/user',{ headers: { Authorization: AuthStr } })
       .then(res => {
  
         for(var i=0 ; i< res.data.length;i++){
            if(res.data[i].userId==uid){
                setVal(res.data[i].userDataId);
                setEmail(res.data[i].email);
                setFirstName(res.data[i].firstName);
                setLastName(res.data[i].lastName);
                setPhone(res.data[i].phone);
                setUserId(res.data[i].userId);
                setstatus(res.data[i].status);
                setAdress(res.data[i].adresse);
                setCity(res.data[i].city);
                setPostalCode(res.data[i].codePostal);
                setDateCin(res.data[i].dateCin);
                setDn(res.data[i].dn);
                setJob(res.data[i].job);
                setCin(res.data[i].cin);

                stat=res.data[i].status;
                break;
        }
         }
  
  
  
  
       })
  

  
  
 
    
    
    
    
 
 
     
 
     const [open, setOpen] = React.useState(false);

  
   
     const handleClose = (event, reason) => {
       if (reason === 'clickaway') {
         return;
       }
   
       setOpen(false);
     };

     let don;
  const handleNext = () => {
     if(((adress=="")|| (cin=="")|| (dateCin=="")|| (job=="")||(dn=="")|| (city=="")|| (postalCode==""))&&(activeStep==0)  ){
        don="red";
         alert("fargha")
     }
     else{
     setActiveStep(activeStep + 1);
     don="";
     }
     if(activeStep==2){
    setUpdateDone("true") ;
     }
  
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
     <React.Fragment >
       
      <CssBaseline />
     
      <main className={classes.layout} style={{width:"90%"}}>
      <br></br>
      <br></br>
         <Paper className={classes.paper} >
          <Typography component="h1" variant="h4" align="center">
          Update your account
          </Typography>
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

                <Submit cin={cin}  dateCin={dateCin}
    dn={dn}
    job={job}
    adress={adress}
    city={city}
    postalCode={postalCode}
    buyer2={buyer2}
    cin2={cin2}
    buyer3={buyer3}
    cin3={cin3}
    email={email} firstName={firstName} lastName={lastName} phone={phone} userId={userId}
    val={val} postId={postId} 


     />
      
     {updateDone?(          <Alert severity="success" id="hideMe">Account updated Successfully</Alert>
      ):("")}
  
              </React.Fragment>
            ) : (
              <React.Fragment>
   {status?(<div> 
                 {getStepContent(activeStep,setCin,setDateCin,setDn,setJob,setAdress,
    setCity,
    setPostalCode,
    setBuyer2,
    setCin2,
    setBuyer3,
    setCin3,cin,dateCin,
    dn,
    job,
    adress,
    city,
    postalCode,
    buyer2,
    cin2,
    buyer3,
    cin3,
    email, setEmail,
firstName, setFirstName,
lastName, setLastName,
phone, setPhone,
userId, setUserId,
status,setActiveStep,val,setPostId,postId
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
              
                    {activeStep === steps.length - 1 ? 'Update Profile' : 'Next'}
                  </Button>
             
    
                </div>
                </div> ):(<p>loading...</p>)} </React.Fragment>
            )}
          </React.Fragment>
        </Paper>

        <Copyright />
      </main>
    </React.Fragment>
   );
}