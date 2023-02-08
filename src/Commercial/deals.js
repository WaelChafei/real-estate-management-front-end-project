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
import MenuItem from '@material-ui/core/MenuItem';
import DoneAllIcon from '@material-ui/icons/DoneAll';
 
 import  { useEffect } from 'react';
import {   Divider, Grid } from '@material-ui/core';
import styles from "assets/jss/material-dashboard-react/components/tableStyle.js";
import { StaticRouter } from "react-router";
import Profile from "GP/profile";
import {borders} from '@material-ui/system'
import Box from '@material-ui/core/Box';
 import Badge from "components/Badge/Badge.js";
 import { format } from 'date-fns';
import jwtDecode from 'jwt-decode';
import Table from 'react-bootstrap/Table'
import 'bootstrap/dist/css/bootstrap.min.css';
import DataSkeleton from "./DataSkeleton";
import DealTitle from "./DealTitle";
import AddContract from "./AddContract";
const defaultProps = {
  bgcolor: 'background.paper',
  m: 1,
  border: 4,
  style: {   height: '4rem' },
};
const useStyles = makeStyles(styles);
let dealstab=[];
let x=0;
function TableList() {
  const [deals, setDeals] = useState("");
  //const [Statut, setStatut] = useState("");
  const [color,setColor]= useState([]);
  const [colorbg,setColorbg]= useState([]);
  const [employeeId, setEmployeeId] = useState("");

  const AuthStr = localStorage.getItem('FBIdToken');
  const token=localStorage.FBIdToken;
  let emp=[];
 const decodedToken=jwtDecode(token);
 const uid=decodedToken.user_id.toString(); //setStatut("interested");
 const classes = useStyles();
 let now = new Date(); 
 let tab=[];
console.log("now",now);
const [count, setCount] = useState(0);
 useEffect( () => {
  async function fetchData(){

    if(x==0){
      x++;
 
    await axios.get('/employeeData',{ headers: { Authorization: AuthStr } })
    .then(res=>{
      for (var i = 0; i < res.data.length; i++) {
          if(res.data[i].employeeId==uid){
              setEmployeeId(res.data[i].employeeDataId);
              console.log("emp",res.data[i].employeeId);
              console.log("emp",uid);
              emp.push(res.data[i].employeeDataId)
              break
          }
       
      }
      console.log("emp",emp);
  
    }) .catch(err => console.log(err));

      await axios.get('/posts',{ headers: { Authorization: AuthStr } })
        .then(rs=>{
            for (var i = 0; i < rs.data.length; i++) {
               console.log("emp[0]",emp[0]);
                    if((rs.data[i].commercialId)==emp[0]){
                        tab.push(rs.data[i].postId)
                     
        
                    }
      
           
                 }
                 console.log("tab",tab);
        }) .catch(err => console.log(err));
        await  axios.get('/commercial/deal',{ headers: { Authorization: AuthStr } })
        .then(ras=>{
            for (var i = 0; i < ras.data.length; i++) {
                for (var j = 0; j < tab.length; j++) {
                    if((ras.data[i].postId)==(tab[j])){
                       dealstab.push(ras.data[i]);
                        
                    }
      
                }
                 }
                 setDeals(dealstab);
                 console.log("dealstab",dealstab);
        }) .catch(err => console.log(err));
    
 

          
    
    
        
      }
    
      }
      fetchData();

 },[count] );

 console.log("deals",deals);
 
  const view = deals?(
    
   deals.map((deal,index) =>   
     <div>
      <div  style={{   marginBottom:"4px"}} >
        <br></br>
      <GridContainer >
      <GridItem xs={1} sm={2} md={2}>
              {deal.id} </GridItem>
              <div >
     <GridItem xs={1} sm={1} md={12} >
              {deal.userCin} </GridItem></div>
              <GridItem xs={1} sm={1} md={2}>{deal.paymentDay} </GridItem> 
              <GridItem xs={1} sm={1} md={1}>{deal.methodPayment} </GridItem>
              <GridItem xs={1} sm={1} md={1}>{deal.mantantAvance} </GridItem>
              <GridItem xs={1} sm={1} md={1}>{deal.modePayment}  </GridItem>
              <GridItem xs={1} sm={1} md={1}>{deal.nombreMois} </GridItem>
              <GridItem xs={1} sm={1} md={1}>{deal.status} </GridItem>
              {deal.pdfLink==""?( <GridItem xs={1} sm={1} md={1}>
             
              </GridItem>
              ):(<p>Done</p>)}
        
       </GridContainer>
   
     </div>
     </div>
       ) 
 ):(
   <p>loading...</p>
 );  



  

 const tableDeal =   deals?(
        deals.map((deal,index) =>
        <tr>
          
           <td  style={{color:"#21292F",fontWeight:"bold" }} ><DealTitle   dealEmp={deal.employeeId} dealCin={deal.userCin} postId={deal.postId} /> </td>
          <td   style={{color:"gray"}}> {deal.userCin}</td>

           
          <td   style={{color:"gray"}}>  {deal.paymentDay}</td>
      
                <td  style={{color:"gray"}} >{deal.methodPayment} </td>
                <td  style={{color:"gray"}}>{deal.mantantAvance} </td>
                <td   style={{color:"gray"}}>{deal.modePayment} </td>
                <td style={{color:"gray"}}>{deal.nombreMois} </td>
                <td   style={{color:"gray"}}>{deal.status}  </td>

     
                {deal.pdfLink==""?( <td >
                  <AddContract dealId={deal.id} classes={classes}/>
</td>
              ):(<td>Done</td>)}
      
           
     
         
    
         <br></br>
             
      
         <br></br>
           </tr>
     
            )
            ):(
              <tr> <td colSpan={9}><DataSkeleton/> </td> </tr>  
            );  
           





 return (
   <GridContainer >
     <GridItem xs={12} sm={12} md={12}>
       <Card>
         <CardHeader color="primary">
           <h4 className={classes.cardTitleWhite}>Deal list</h4>
           <p className={classes.cardCategoryWhite}>
             Here is all the list
           </p>
         </CardHeader>
         <CardBody>
         <Table striped bordered hover md={12} >
  <thead>
    <tr>
      <th>Deal Title</th>
      <th>CIN</th>
      <th>Payment day</th>
      <th>Method payment</th>
      <th>Advance amount</th>
      <th>Mode of payment</th>
      <th>Month number</th>
      <th>Status</th>
      <th>Add contract</th>
    </tr>
  </thead>
  <tbody>
    {tableDeal}
  </tbody>
</Table> 

         </CardBody>
       </Card>
     </GridItem>
      
   </GridContainer>
 );
}


export default function UserProfile() {
     
    

 

  const classes = useStyles();
  return (
    <div style={{width:'80%',height:"99vh"}}>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
      <TableList/>
 




</GridItem>
 

      </GridContainer>
    </div>
  );
}







 





 