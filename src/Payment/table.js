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
import PayedSubmit from "./PayedSubmit";
import { format } from 'date-fns';
import Table from 'react-bootstrap/Table'
import 'bootstrap/dist/css/bootstrap.min.css';
import DataSkeleton from "Commercial/DataSkeleton";
import TotalPrice from "./TotalPrice";
import DealFirstItem from "./DealFirstItem";
const defaultProps = {
  bgcolor: 'background.paper',
  m: 0,
  border: 4,
  style: {   height: '5rem' },
  width:"100%"
};
const useStyles = makeStyles(styles);

let x=0;
function TableList() {
  const [screams, setScreams] = useState(null);
  //const [Statut, setStatut] = useState("");
  const [color,setColor]= useState([]);
  const [colorbg,setColorbg]= useState([]);

 const AuthStr = localStorage.getItem('FBIdToken');
 //setStatut("interested");
 const classes = useStyles();
 let now = new Date(); 
 const [count, setCount] = useState(0);

console.log("now",now);
 useEffect( () => {
    const CancelToken = axios.CancelToken;
  const source = CancelToken.source();
 async function fetchData(){
 
  await axios.get('/commercial/deal',{ headers: { Authorization: AuthStr } },{ cancelToken: source.token })
     .then(res =>{
      let tab=[];
 
        setScreams(res.data);
           console.log(res.data.length);
         for (var i = 0; i < res.data.length; i++) {
          console.log("index=",color);
          let date= new Date(res.data[i].paymentDay);
    
          console.log("date",res.data[i].paymentDay);

          if(now<=date){
            tab.push('#2b495d');
 

           
          } else if (now>date){
            tab.push('red');
            if(res.data[i].status!="Late"){
            const userdata ={
               status:"Late"
   
          }
            axios.patch(`/commercial/deal/${res.data[i].id}`,userdata,{ headers: { Authorization: AuthStr } },{ cancelToken: source.token })
            .then(res=>{
              console.log(res);
          }).catch(err => console.log(err));
           }

          } 
          if((res.data[i].nombreMois=="0")&&(res.data[i].status!="Payed")) {

            const data ={
                status:"Payed"
        
           }
             axios.patch(`/commercial/deal/${res.data[i].id}`,data,{ headers: { Authorization: AuthStr } },{ cancelToken: source.token })
             .then(res=>{
               console.log(res);
           }).catch(err => console.log(err));
            }


        } 
        setColor(tab);
  
      })
     .catch(err => console.log(err));

 



    }
fetchData();
return () => {
  source.cancel();
};
 },[count] );
 
  const view = screams ?(
   screams.map((scream,index) =>   
    
 
      <tr style={{color:`${color[index]}`,fontFamily:"Helvetica",fontSize:"14px",}} >

   
      <td ><DealFirstItem dealCin={scream.userCin} dealPost={scream.postId} /> </td>
           
     <td>
              {scream.userCin} </td> 
              <td xs={1} sm={1} md={2}>{scream.paymentDay} </td> 
              <td xs={1} sm={1} md={1}><TotalPrice postId={scream.postId}  /></td>

              <td xs={1} sm={1} md={1}>{scream.methodPayment} </td>
              <td xs={1} sm={1} md={1}>{scream.mantantAvance} </td>
              <td xs={1} sm={1} md={1}>{scream.modePayment}  </td>
              <td xs={1} sm={1} md={1}>{scream.nombreMois} </td>
              <td xs={1} sm={1} md={1}>{scream.status} </td>
              <td  xs={1} sm={1} md={1}><PayedSubmit id={scream.id} nombreMois={scream.nombreMois} status={scream.status}  paymentDay={scream.paymentDay} classes={classes}/></td>
          
        
 
              </tr>
 
  
       )
 ):(
  <tr> <td colSpan={10}><DataSkeleton/> </td> </tr>  
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
      <th>Total Price</th>
      <th>Method payment</th>
      <th>Advance amount</th>
      <th>Mode of payment</th>
      <th>Month number</th>
      <th>Status</th>
      <th>Add contract</th>
    </tr>
  </thead>
  <tbody>
    {view}
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







 





 