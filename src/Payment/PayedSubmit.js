import React from 'react'
import DoneAllIcon from '@material-ui/icons/DoneAll';
import Button from "components/CustomButtons/Button.js";

import {  Grid } from '@material-ui/core';
import axios from "axios";
import { format } from 'date-fns';
import GridItem from "components/Grid/GridItem.js";

import GridContainer from "components/Grid/GridContainer.js";

import Card from "components/Card/Card.js";

import CardBody from "components/Card/CardBody.js";

import  { useState } from 'react';

import TextField from '@material-ui/core/TextField';

import DialogContent from '@material-ui/core/DialogContent';

import Dialog from '@material-ui/core/Dialog';
import InputLabel from "@material-ui/core/InputLabel";

 import Select from '@material-ui/core/Select';

import FormControl from '@material-ui/core/FormControl';

export default function PayedSubmit(props) {
    const AuthStr = localStorage.getItem('FBIdToken');
    const [open, setOpen] = useState(null);
    const [methodPayment, setMethodPayment] = useState("");

    let handleChange1=(event)=>{
       
         setMethodPayment(event.target.value);
       console.log("eventi",event.target.value);
   
     }
    let handleOpen=()=>{
        setOpen(true);
       
       }
      let handleClose=()=>{
         setOpen(false);
       }

    let handleSubmit=(event)=>{
        let date= new Date(props.paymentDay);
        let now = new Date(); 
          date.setMonth(date.getMonth()+1);
          date=format(date,"y/MM/dd")
          now=format(now,"y/MM/dd")
                if(now>date){
                    console.log('akbar');
                }
                else{ 
                    console.log("asghar");
                }
        console.log("paymentDay :",date);
        console.log("nombreMois :",props.nombreMois-1);
        console.log("status : Soon" );
        console.log("status : Soon" );
        console.log("now :",now);

         const userdata ={
            nombreMois:props.nombreMois-1,
            status:"Soon",
            paymentDay:date,
            methodPayment:methodPayment,
            

        } 
        axios.patch(`/commercial/deal/${props.id}`,userdata,{ headers: { Authorization: AuthStr } })
            .then(res=>{
                console.log(res);
                window.location.reload(false);
            }).catch(err => console.log(err));
       }





    return (
        <div>
                {props.nombreMois!="0" ?( 
              <Grid  xs={1} sm={1} md={1}  style={{marginTop:'-10px'}}>  

<Dialog open={open} onClose={handleClose} fullWidth maxWidth='md'>
                <DialogContent>
                <h4 style={{textAlign:"center"}}>  Check payment </h4>
 
 <GridContainer>
   <GridItem xs={12} sm={12} md={12}>
     <Card>
    
       <CardBody>
         <GridContainer>
      
         <h3 style={{marginLeft:"10px"}}>Payment informations </h3>
           <GridItem xs={12} sm={12} md={12}>
               <GridContainer spacing={5}>
           <Grid item xs={12} sm={12} md={6}>
           <FormControl variant="outlined" fullWidth className={props.classes.formControl} 
            
           

               >
                          <InputLabel htmlFor="outlined-age-native-simple">Payment methode</InputLabel>

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
             <TextField
         variant="outlined"
         margin="normal"
   
         label="Amount of payment"
        
         required
         fullWidth
         />
          
         </Grid>

         <Grid item xs={12} sm={12} md={6} style={{marginTop:"-15px"}}>
         <TextField
         variant="outlined"
         margin="normal"
   
         label="Payment number"
        
         required
         fullWidth
         />
          </Grid>
      



        </GridContainer>
        </GridItem>
        </GridContainer>
        </CardBody>
        </Card>
        </GridItem>
        </GridContainer>





 


               <Button variant="contained" style={{backgroundColor:"#4CAF50",marginTop:"-10px"}} onClick={handleSubmit} >
                  payed <DoneAllIcon/>
                </Button> 
                </DialogContent>
            </Dialog>
            <Grid md={12} fullWidth>
              <Button onClick={handleOpen}  style={{backgroundColor:"#4CAF50",width:"50px",height:"10px",borderRadius:25 }} fullWidth>
                   Payed  
              </Button>
              </Grid>
                
                </Grid >
          ): (<p style={{marginTop:'-10px'}}>payed <DoneAllIcon/></p>)
        }
        </div>
    )
}
