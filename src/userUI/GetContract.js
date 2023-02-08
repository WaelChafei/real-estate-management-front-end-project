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
 import axios from "axios";
 import Table from 'react-bootstrap/Table'
 import 'bootstrap/dist/css/bootstrap.min.css';
 import DataSkeleton from "Commercial/DataSkeleton";
  import  { useEffect } from 'react';
import {   Divider, Grid, Tab } from '@material-ui/core';
import styles from "assets/jss/material-dashboard-react/components/tableStyle.js";
import DealTitle from "./DealTitle";
import TotalPrice from "./TotalPrice";
 

 
const useStyles = makeStyles(styles);
var x=0;

function TableList() {
  const [screams, setScreams] = useState(null);
 
 const AuthStr = localStorage.getItem('FBIdToken');

 const classes = useStyles();
 let empTab=[]
 let nameTab=[]
 let idTab=[]
 let mantantAvanceTab=[]
 let methodPaymentTab=[]
 let modePaymentTab=[]
 let nombreMoisTab=[]
 let userCinTab=[]
 let statusTab=[]
 let postId=[]
 let pdf=[]
 const [employeeId, setEmployeeId] = useState([]);
 const [id, setId] = useState([]);
 const [mantantAvance, setMantantAvance] = useState([]);
 const [methodPayment, setMethodPayment] = useState([]);
 const [empName, setempName] = useState([]);
 const [modePayment, setModePayment] = useState([]);
 const [nombreMois, setNombreMois] = useState([]);
 const [status, setStatus] = useState([]);
 const [userCin, setUserCin] = useState([]);
 const [uid, setUid] = useState("");
 const [idPost, setidPost] = useState([]);
 const [contract, setcontract] = useState([]);
let vat=[];
let val=[];
const [num, setNum] = useState(0);
useEffect(() => {
  async function fetchData(){
if(x==0){
    
    x++
 await axios.get('/uid',{ headers: { Authorization: AuthStr } })
   .then(ras =>{
    setUid(ras.data)
  
     vat.push(ras.data)

    })
  await axios.get('/user',{ headers: { Authorization: AuthStr } })
    .then(res => {

      for(var i=0 ; i< res.data.length;i++){


         if(res.data[i].userId==vat[0]){
             val.push(res.data[i].cin);
             console.log('vaaaal',val);

             break;
     }
      }
    })


    await axios.get('/commercial/deal',{ headers: { Authorization: AuthStr } })
    .then(ras => {
      var u=0;
      for(var j=0 ; j< ras.data.length;j++){
      

         if(ras.data[j].userCin==val[0]){ setNum(2);
          u=2;
            console.log('emp',ras.data[j].employeeId);
            empTab.push(ras.data[j].employeeId);
            idTab.push(ras.data[j].id);
            mantantAvanceTab.push(ras.data[j].mantantAvance);
            methodPaymentTab.push(ras.data[j].methodPayment);
            modePaymentTab.push(ras.data[j].modePayment);
            nombreMoisTab.push(ras.data[j].nombreMois);
            userCinTab.push(ras.data[j].userCin);
            statusTab.push(ras.data[j].status);
            postId.push(ras.data[j].postId);
            pdf.push(ras.data[j].pdfLink);

     }
    if(u!=2){  setNum(1);}
      }
      setcontract(pdf);
      setidPost(postId);
      setEmployeeId( empTab   )
      setId(  idTab )
      setMantantAvance(   mantantAvanceTab   )
      setMethodPayment(  methodPaymentTab   )
      setModePayment(   modePaymentTab    )
      setNombreMois(    nombreMoisTab    )
      setStatus(    statusTab    )
      setUserCin(     userCinTab  )
    })

    axios.get('/employeeData',{ headers: { Authorization: AuthStr } })
    .then(res=>{
        for (var i = 0; i < res.data.length; i++) {
          for (var j = 0; j < empTab.length; j++) {
            console.log("nameTab",nameTab);
          if(res.data[i].employeeDataId==empTab[j]){
              nameTab.push(res.data[i].employeeFullName);
              console.log("nameTab",nameTab);
          }
          }
        }
        setempName(nameTab);

      })

  }
}
fetchData();
},[]);
     const view = (num==2) ?(
      employeeId.map((employeeI,index) =>
      
          
     
          <tr    >
                <td  >{empName[index]} </td>
                <td  ><DealTitle employeeName={empName[index]} postId={idPost[index]} /> </td>
                <td   ><TotalPrice postId={idPost[index]}/></td>
                <td   >{mantantAvance[index]}</td>
                <td >{methodPayment[index] }</td>
                <td >{modePayment[index] }</td>
                <td  >{nombreMois[index] }</td>
                <td  >{status[index] }</td>
                <td  >{contract[index]?(<Button variant="contained" href={contract[index]} target="_blank" style={{backgroundColor:'#5CACE0',marginTop:"-10px"}} >
                Get your Contract
                </Button>):(  <Button variant="contained" disabled style={{backgroundColor:'#ff5a5a',marginTop:"-10px"}} >
                Waiting for contract
                </Button>)}
              
       
                </td>
        
         
          
     
            
           </tr>
      
            )
      ):(num==1)?(
        <p>nothing</p>)
        :(<p>loading</p>)
 
 return (
     <div style={{marginLeft:'10px'}}>
   <GridContainer >
     <GridItem xs={12} sm={12} md={12}>
       <Card>
         <CardHeader color="primary">
           <h4 className={classes.cardTitleWhite}>My Deals</h4>
           <p className={classes.cardCategoryWhite}>
             Here is all my deals
           </p>
         </CardHeader>
         <CardBody>
        
       
       
         <Table striped bordered hover md={12} >
  <thead>
    <tr>
      <th>Employee name</th>
      <th>Deal Description</th>
      <th>Total Price</th>
      <th>Advance amount</th>
      <th>Method payment</th>
     
      <th>Mode of payment</th>
      <th>Month number</th>
      <th>Status</th>
      <th>Download contract</th>
    </tr>
  </thead>
  <tbody>
    {view}
  </tbody>
</Table> 
         </CardBody>
       </Card>
     </GridItem>

   </GridContainer></div>
 );
}


export default function UserProfile() {
 
 

  const classes = useStyles();
  return (
    <div style={{width:"80%"}}>
        <br></br>
      <br></br>
      <br></br>
      <br></br>
    
      <TableList/>
    </div>
  );
}







 





 