 


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
 
 


export default function UserProfile(props) {
    const [employeeId, setEmployeeId] = useState("");


  
    let handleChange=(event)=>{
      console.log("eventi",event.target.value);
      props.handleChange(event.target.value)}

    let handleChange1=(event)=>{
        props.handleChange1(event.target.value)
      console.log("eventi",event.target.value);
  
    }
    let handleChange2=(event)=>{
        props.handleChange2(event.target.value)
      console.log("eventi",event.target.value);
  
    }
 
   
    let  handleSubmit=(event)=>{
        event.preventDefault();
          const userdata ={
            userCin : props.cin,
            methodPayment :  props.methodPayment,
            mantantAvance :  props.mantantAvance,
            modePayment :  props.modePayment,
            nombreMois :  props.nombreMois,
            paymentDay :  props.paymentDay,
            employeeId :  employeeId,
            status: props.status,
         }
       
         console.log(userdata);
         const AuthStr = localStorage.getItem('FBIdToken');
         axios.post('/commercial/createDeal',userdata,{ headers: { Authorization: AuthStr } })
          .then(res =>{
console.log(res.data);
        })
       .catch(err=>{  console.log(err);
         
       })
       
      
      }

 let now = new Date();
 now=format(now,"y-MM-dd")

 let  handleFileChange = (event) => {
  const image = event.target.files[0];
  const formData = new FormData();
  formData.append('image', image, image.name);
  console.log(image.name);
  props.handleChange10(formData)
 
  
};


let handleEmailChange= (event)=> {
  props.handleChange11(event.target.value);


}


  const classes = useStyles();
  return (
    <div >
   
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
         
            <CardBody>
              <GridContainer>
           
                 <GridItem xs={12} sm={12} md={12}>
                    <GridContainer spacing={5}>
                <Grid item xs={12} sm={12} md={12}>
                <TextField
              variant="outlined"
              margin="normal"
              name="email"
              label="Notary mail"
              onChange={handleEmailChange}

              required
              fullWidth
            /></Grid>
      




</GridContainer>
                 </GridItem>
              </GridContainer>
   
             
 
              
            </CardBody>
      
          </Card>
        </GridItem>
      
      </GridContainer>
 
     </div>
  );
}


















 