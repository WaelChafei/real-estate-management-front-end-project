import React from 'react'
import Button from "components/CustomButtons/Button.js";
import  { useState } from 'react';
import axios from "axios";
 
export default function AddContract(props) {
  const AuthStr = localStorage.getItem('FBIdToken');
  


  let handleUpload=(event)=>{
    const image = event.target.files[0];
    const formData = new FormData();
 
    console.log("image",event.target.files[0]);
    formData.append('image', image ,image.name);

console.log("props.addPostId",props.addPostId);
      axios.post(`/commercial/deal/addContract/${props.dealId}`,formData,{ headers: { Authorization: AuthStr } })
      .then(res=>{
        console.log(res);
      }).catch(err=>console.log(err));
  
  
   }

const classes=props.classes;
  return (
    <div>

<input
 
className={classes.input}
id="contained-button-file2"

type="file"
onChange={handleUpload}
 style={{display:"none"}}
/>

<label htmlFor="contained-button-file2">
<Button variant="contained" color="primary" component="span">
 Add Contract</Button></label>
 

    </div>
  )
}
