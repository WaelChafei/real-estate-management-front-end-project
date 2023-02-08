import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import  { useState } from 'react';
import SelectSubmit from './SelectSubmit';
import {   Divider, Grid } from '@material-ui/core';
import CardHeader from "components/Card/CardHeader.js";
import SmartDataTable from 'react-smart-data-table'
import Table from 'react-bootstrap/Table'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from "components/CustomButtons/Button.js";
import StepDeal from "./StepDeal"
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import SendMail from './SendMail';

let rows=[];
let status=[];
let interestId=[];
var y=0;
var x=0;
export default function RowsGrid(props) {

    interestId=props.interestId;

  

  

 const view = 
 
        props.screams.map((scream,index) =>
        <tr>
          
  
           
       <td item xs={1} md={2} style={{color:"#21292F",fontWeight:"bold" }} >{scream.firstName} {scream.lastName}</td>
      
                <td item xs={2} md={2} style={{color:"gray"}} >{props.posts[index]} </td>
                <td item xs={1} md={1}  style={{color:"gray"}}>{scream.phone}</td>
                <td item xs={1} md={2}  style={{color:"gray"}}>{scream.email}</td>
            
     
      
                <td item xs={1} md={2} style={{marginTop:'-25px'}}  >
                <SelectSubmit   email={scream.email} interest={interestId[index]}   stat={props.status[index]} />
              </td>
          
      
           {props.status[index]=="interested"?(<SendMail email={scream.email} interest={interestId[index]}  />):((scream.dn=="")&&(props.status[index]!="refused"))?(
              <td item xs={2} md={2}     >
         <Button variant="contained"  disabled style={{backgroundColor:'#5CACE0' ,borderRadius:25}} fullWidth>
           Waiting for update
       </Button>
       </td>
      
           ):((props.doneDeal[index]=="false")&&(props.status[index]!="refused"))?(
              <td>
      <StepDeal firstName={scream.firstName} lastName={scream.lastName} phone={scream.phone} cin={scream.cin}
         dn={scream.dn} email={scream.email} job={scream.job} dateCin={scream.dateCin} price={props.pric[index]} surface={props.surfac[index]}
         type={props.typ[index]} postId={props.postId[index]}/>        
     </td>
           ):props.status[index]!="refused"?(        <Button variant="contained" disabled style={{backgroundColor:'#4caf50' ,borderRadius:25}} fullWidth>
           <AssignmentTurnedInIcon/><b>Done Deal</b></Button>)
        :( <Button variant="contained" style={{backgroundColor:'#f44336' ,borderRadius:25}} disabled fullWidth>Refused</Button>)}
         
    
         <br></br>
             
      
         <br></br>
           </tr>
     
            )




  return (
      <div>
 <br></br>

 
    

 
 
 <Table striped bordered hover md={12} >
  <thead>
    <tr>
      <th>Full Name</th>
      <th>Post Title</th>
      <th>Phone</th>
      <th>Email</th>
      <th>Statut</th>
      <th>Informations</th>
    </tr>
  </thead>
  <tbody>
    {view}
  </tbody>
</Table>   </div>
  );
}