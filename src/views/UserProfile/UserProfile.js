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
import DeleteEmp from './DeleteEmp';
import Success from './Success';
 
 
 import  { useEffect } from 'react';
import {   Divider, Grid } from '@material-ui/core';
import styles from "assets/jss/material-dashboard-react/components/tableStyle.js";
import EditEmp from "./EditEmp";
import ListSubheader from '@material-ui/core/ListSubheader';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Profile from "GP/profile";
import Table from 'react-bootstrap/Table'
import 'bootstrap/dist/css/bootstrap.min.css';
import DataSkeleton from "Commercial/DataSkeleton";

 
const useStyles = makeStyles(styles);


function TableList() {
  const [screams, setScreams] = useState(null);
 const AuthStr = localStorage.getItem('FBIdToken');

 const classes = useStyles();
 useEffect(() => {
   async function fetchData(){
   axios.get(`/employeeData`,{ headers: { Authorization: AuthStr } })
     .then(res =>{
           setScreams(res.data)
     })
     .catch(err => console.log(err));
    }
    fetchData();
 },[0] );
 const view = screams ?(
   screams.map(scream => 
        <tr >
 
 
           <td item xs={2} md={2}>{scream.employeeFullName}</td>
           <td item xs={2} md={2}>{scream.email}</td>
           <td item xs={2} md={2}>{scream.phone}</td>
           <td item xs={1} md={1}>{scream.officeCity}</td>
           <td item xs={1} md={1}>{scream.role}</td>
           <td item xs={1} md={1}><DeleteEmp employeeId={scream.employeeDataId} /></td>
           <td item xs={1} md={1}><EditEmp employeeId={scream.employeeDataId} /> </td>
 
        
       
    </tr>
     
        )
 ):(
  <tr> <td colSpan={7}><DataSkeleton/> </td> </tr>
 );
 return (
   <GridContainer>
     <GridItem xs={12} sm={12} md={12}>
       <Card>
         <CardHeader color="primary">
           <h4 className={classes.cardTitleWhite}>Employee list</h4>
           <p className={classes.cardCategoryWhite}>
             Here is all the employees
           </p>
         </CardHeader>
         <CardBody>
 
         <br></br>
         <Table striped bordered hover md={12} >
  <thead>
    <tr>
      <th>Name</th>
      <th>Email</th>
   
      <th>Phone</th>
      <th>City</th>
      <th>Role</th>
      <th>Delete</th>
      <th>Edit</th>
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
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [employeeFullName, setEmployeeFullName] = useState("");
  const [role, setRole] = useState("");
  const [officeCity, setOfficeCity] = useState("");
  let handleChange=(event)=>{
     setEmail(event.target.value)}
  let handleChange2=(event)=>{
    setPhone(event.target.value)
 
  }
  
  let handleChange3=(event)=>{
    setEmployeeFullName(event.target.value)
   }
  
  let handleChange4=(event)=>{
    setRole(event.target.value);
    console.log("eventi",event.target.value); 

   }
  
  let handleChange5=(event)=>{
    setOfficeCity(event.target.value);
 
  }
  let handleChange6=(event)=>{
    setPassword(event.target.value);
 
  }
 let handleLogout = (event) => {
    localStorage.removeItem('FBIdToken');
    delete axios.defaults.headers.common['Authorization'];
    window.location.href="/login";
    event.preventDefault();
    };
  let  handleSubmit=(event)=>{
      event.preventDefault();
        const userdata ={
        email : email,
        phone :  phone,
        employeeFullName : employeeFullName,
        role : role,
        officeCity:officeCity,
        password:password 
        
       }
       console.log(userdata);
       const AuthStr = localStorage.getItem('FBIdToken');
     axios.post("/admin/createEmployeeData",userdata,{ headers: { Authorization: AuthStr } } )
     .then(res =>{
       console.log(res.data);      
       return(   
       <Success/>)
      })
     .catch(err=>{  console.log(err);
       
     })
     
    
    }

 

  const classes = useStyles();
  return (
    <div style={{width:"80%"}}>
        <br></br>
      <br></br>
      <br></br>
      <br></br>
      <GridContainer>
  
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Add new employee</h4>
              <p className={classes.cardCategoryWhite}>Complete his profile</p>
            </CardHeader>
            <CardBody container spacing={12}>
              <GridContainer>
                 
            
                <GridItem xs={12} sm={12} md={12}>
                  <TextField
                    labelText="Email address"
                    id="email-address"
                    label="email"
                    onChange={handleChange}
                    value={email}
                    fullWidth
                    type="email"
               
                  />
                </GridItem>
              </GridContainer><br></br>
              <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                  <TextField
                    labelText="Full Name"
                    id="first-name"
                    label="Full Name"
                    value={employeeFullName}
                    onChange={handleChange3}
                    fullWidth
                  />
                </GridItem>  
                 </GridContainer><br></br>
                  <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                  <TextField
                    labelText="phone"
                    id="last-name"
                    label="phone"
                    type="number"
                    onChange={handleChange2}
                    value={phone}
                    fullWidth
                  />
                </GridItem>
              </GridContainer><br></br>
              <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                  <TextField
                    labelText="city"
                    id="city"
                    label="city"
                    onChange={handleChange5}
                    value={officeCity}
                    fullWidth
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
              
                <FormControl className={classes.formControl}      fullWidth>
        <InputLabel htmlFor="grouped-native-select" >Role</InputLabel>
        <Select native defaultValue="" id="grouped-native-select" name="role" onChange={handleChange4}>
          <option aria-label="None" value="" />
             <option value="gp">Post Manager</option>
            <option value="admin">Admin</option>
            <option value="paym">Payment agent</option>
            <option value="comm">Commercial</option>

         </Select>
      </FormControl>
                </GridItem>
                <GridItem xs={12} sm={12} md={12}>
                <TextField
            
              margin="normal"
              required
              fullWidth
              name="password"
              label="password"
              type="password"
              id="password"
              value={password}  onChange={handleChange6}
            />
                </GridItem>
              </GridContainer>
 
              
            </CardBody>
            <CardFooter>
              <Button color="primary" onClick={handleSubmit}>Add employee</Button>
            </CardFooter>
          </Card>
        </GridItem>
     
      </GridContainer>
      <TableList/>
    </div>
  );
}







 





 