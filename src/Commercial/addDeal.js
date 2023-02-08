 


import Alert from '@material-ui/lab/Alert';
import { format } from 'date-fns';
import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardAvatar from "components/Card/CardAvatar.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import  { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import avatar from "assets/img/faces/marc.jpg";
import axios from "axios";
import Table from "components/Table/Table.js";
import  { useEffect } from 'react';
import {   Grid } from '@material-ui/core';
 import Notifications from '../GP/Notifications';
 import Select from '@material-ui/core/Select';
import Profile from 'GP/profile';
import PaymId from "./PaymId"
import DialogContent from '@material-ui/core/DialogContent';
import CloseIcon from '@material-ui/icons/Close';
import Dialog from '@material-ui/core/Dialog';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
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
 
function afficheSuccess(){

    return(
        <div style={{marginTop:'90px',width:"50%",height:"50px"}}>
azeazeaezaezazeazeazeaze
        <Alert severity="success">This is a success alert — check it out!</Alert>  
        </div>
    );
 }




export default function UserProfile(props) {
    const [employeeId, setEmployeeId] = useState("");
    const [methodPayment, setMethodPayment] = useState("");
    const [mantantAvance, setMantantAvance] = useState("");
    const [modePayment, setModePayment] = useState("");
    const [nombreMois, setNombreMois] = useState(1);
    const [paymentDay, setPaymentDay] = useState("");
    const [status, setStatus] = useState("");
    const [open, setOpen] = useState(null);
  
    let handleOpen=()=>{
        setOpen(true);
       
       }
      let handleClose=()=>{
         setOpen(false);
       }
    let handleChange=(event)=>{
      console.log("eventi",event.target.value);
      setMethodPayment(event.target.value);
      props.handleChange(event.target.value)}

    let handleChange1=(event)=>{
        props.handleChange1(event.target.value)
        setMethodPayment(event.target.value);
      console.log("eventi",event.target.value);
  
    }
    let handleChange2=(event)=>{
        props.handleChange2(event.target.value)
      console.log("eventi",event.target.value);
      setMantantAvance(event.target.value);
  
    }
    let handleChange3=(event)=>{
      
        props.handleChange3(event.target.value)
      console.log("eventi",event.target.value);
      setModePayment(event.target.value);
      if(event.target.value!="facility"){
        props.handleChange4(1);
        setNombreMois(1);
        console.log("eventi",nombreMois);
      }
  
    }
    let handleChange4=(event)=>{
 
        props.handleChange4(event.target.value);
      console.log("eventi",event.target.value);
      setNombreMois(event.target.value);
  
    }
    let handleChange5=(event)=>{
        props.handleChange5(event.target.value)
      console.log("eventi",event.target.value);
      setPaymentDay(event.target.value);
  
    }
   
    let handleChange7=(event)=>{
    
        props.handleChange7(event.target.value)
    console.log("eventi",event.target.value);
    setStatus(event.target.value);

  }

 

 let now = new Date();
 now=format(now,"y-MM-dd")

  const classes = useStyles();
  return (
    <div style={{color:"black"}}>
   
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
         
            <CardBody>
              <GridContainer>
        
              <h3 style={{marginLeft:"10px"}}> General informations </h3>
                <GridItem xs={12} sm={12} md={12}>
                    <GridContainer spacing={5}>
                <Grid item xs={12} sm={12} md={6}>
                <TextField
              variant="outlined"
              margin="normal"
              value={props.firstName}
              label="First Name"
              disabled
              aria-readonly
              required
              fullWidth
            /></Grid>
            <Grid item xs={12} sm={12} md={6}> 
            <TextField
              variant="outlined"
              margin="normal"
              value={props.lastName}
              label="Last Name"
              disabled
              aria-readonly
              required
              fullWidth
            />
</Grid>




</GridContainer>
<TextField
              variant="outlined"
              margin="normal"
              value={props.email}
              label="Email"
              disabled
              aria-readonly
              required
              fullWidth
            />
<GridContainer spacing={5}>
                <Grid item xs={12} sm={12} md={6}>
                <TextField
              variant="outlined"
              margin="normal"
              value={props.cin}
              label="cin"
              disabled
              aria-readonly
              required
              fullWidth
             />
</Grid>
<Grid item xs={12} sm={12} md={6}>

            <TextField
              variant="outlined"
              margin="normal"
              value={props.dateCin}
              label="Date Cin"
              disabled
              aria-readonly
              required
              fullWidth
             

            />
</Grid>
  </GridContainer>     
   <TextField
              variant="outlined"
              margin="normal"
              value={props.dn}
              label="Birthday"
              disabled
              aria-readonly
              required
              fullWidth
            />

               <TextField
              variant="outlined"
              margin="normal"
              value={props.job}
              label="Job"
              disabled
              aria-readonly
              required
              fullWidth
            />
           <h3 style={{marginLeft:"10px"}}> Payment informations </h3>
<br></br>
<GridContainer spacing={2}>
<Grid item xs={12} sm={12} md={4}>
                <TextField
              variant="outlined"
              margin="normal"
              value={props.type}
              label="Type"
              disabled
              aria-readonly
              required
              fullWidth
            /></Grid>
<Grid item xs={12} sm={12} md={4}>
                <TextField
              variant="outlined"
              margin="normal"
              value={props.surface}
              label="surface"
              disabled
              aria-readonly
              required
              fullWidth
            /></Grid>

<Grid item xs={12} sm={12} md={4}>
                <TextField
              variant="outlined"
              margin="normal"
              value={props.price}
              label="Price"
              disabled
              aria-readonly
              required
              fullWidth
            /></Grid>
   </GridContainer>
             <FormControl variant="outlined" fullWidth className={classes.formControl} 
               error={props.don=="1" ? true : false}
           

               >
                          <InputLabel htmlFor="outlined-age-native-simple">methodPayment</InputLabel>

                   <Select native defaultValue="" id="outlined-age-native-simple" fullWidth name="methodPayment" 
                   inputProps={{
                    name: 'methodPayment',
                    id: 'outlined-age-native-simple',
                  }}
                   onChange={handleChange1} >
                        <option aria-label="methodPayment" value="" />
                           <option value="cash">cash</option>
                          <option value="check">bank check</option>
  
                       </Select>
                       </FormControl>
                       <FormHelperText style={{color:"red"}}>{props.don=="1"? "this input is required" : ""}</FormHelperText>

               <TextField
               
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="mantantAvance"
              label="mantantAvance"
              
              type="text"
              id="mantantAvance"
              error={props.don2=="2" ? true : false}
              helperText={props.don2=="2" ? "this input is required" : ""}

              onChange={handleChange2}
              />
                           <FormControl variant="outlined" fullWidth className={classes.formControl} 
                           error={props.don3=="3" ? true : false} 
                        

                           >

              <InputLabel htmlFor="grouped-select">modePayment</InputLabel>
               <Select native defaultValue="" id="grouped-native-select" fullWidth name="modePayment"   onChange={handleChange3} >
                        <option aria-label="modePayment" value="" />
                           <option value="facility">facility</option>
                          <option value="complete">complete</option>
  
                       </Select>
               </FormControl>
               <FormHelperText style={{color:"red"}}>{props.don3=="6"? "this input is required" : ""}</FormHelperText>
                {modePayment=="facility"?(       <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="nombreMois"
              label="nombreMois"
              type="number"
              id="nombreMois"
              onChange={handleChange4}
              error={props.don4=="4" ? true : false}
              helperText={props.don4=="4"? "this input is required" : ""}

              />):("") }
          
                   <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="paymentDay"
              label="Payment Day"
              type="date"
              defaultValue={now}
              id="paymentDay"
              onChange={handleChange5}
              error={props.don5=="5" ? true : false}
              helperText={props.don5=="5" ? "this input is required" : ""}
             />
            
         <br></br>
                            <PaymId classes={classes}  handleChange8={value=>props.handleChange8((value))}  don7={props.don7}  
                            />

<br></br>
<FormControl variant="outlined" fullWidth className={classes.formControl}  
 error={props.don6=="6" ? true : false}
 

 >

<InputLabel htmlFor="grouped-select">Status</InputLabel>
<Select native defaultValue="" id="grouped-native-select" fullWidth name="status"   onChange={handleChange7} >
                        <option aria-label="methodPayment" value="" />
                           <option value="Late">Late</option>
                          <option value="Soon">Soon</option>
                          <option value="Payed">Payed</option>

                       </Select>
          </FormControl>
                </GridItem>
              </GridContainer>
   
             <FormHelperText style={{color:"red"}}>{props.don6=="6"? "this input is required" : ""}</FormHelperText>
 
              
            </CardBody>
       
          </Card>
        </GridItem>
      
      </GridContainer>
 
     </div>
  );
}


















 