import React from 'react'
import Button from "components/CustomButtons/Button.js";

import  { useState } from 'react';

import Dialog from '@material-ui/core/Dialog';

import DialogContent from '@material-ui/core/DialogContent';
import {  Grid } from '@material-ui/core';

import CloseIcon from '@material-ui/icons/Close';
export default function InfoDialog(props) {
    const [open, setOpen] = useState(null);
    const {cin,dateCin,dn,job,relation}=props;
    let handleOpen=()=>{
        setOpen(true);
       
       }
      let handleClose=()=>{
         setOpen(false);
       }
      
    return (
        <div>
               <Dialog open={open} onClose={handleClose} fullWidth maxWidth='sm'>
                <Button tip="close" onClick={handleClose}  >
                     <CloseIcon/>
                </Button>
                <DialogContent  >
             
                      <p>cin : {props.cin} </p>     
                     

          
                      <p>date of cin : {props.dateCin} </p>           
         

          
                      <p>birthday : {props.dn} </p>        
             

    
                      <p>job : {props.job} </p>        
   

    
                     
  

      
                      <p>relation : {props.relation} </p>
     
                 </DialogContent>
            </Dialog>
       
              <Button onClick={handleOpen} tip="Expand scream" style={{backgroundColor:"#5CACE0"}}>
                    Details
              </Button>

 
 
        </div>
    )
}
