import React from "react";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Store from "@material-ui/icons/Store";
import Warning from "@material-ui/icons/Warning";
import DateRange from "@material-ui/icons/DateRange";
import LocalOffer from "@material-ui/icons/LocalOffer";
import Update from "@material-ui/icons/Update";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";
import Accessibility from "@material-ui/icons/Accessibility";
import BugReport from "@material-ui/icons/BugReport";
import Code from "@material-ui/icons/Code";
import Cloud from "@material-ui/icons/Cloud";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import Tasks from "components/Tasks/Tasks.js";
import CustomTabs from "components/CustomTabs/CustomTabs.js";
import Danger from "components/Typography/Danger.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import  { useState } from 'react';
import axios from "axios";
import { bugs, website, server } from "variables/general.js";
import  { useEffect } from 'react';
import { format } from 'date-fns';
 

import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";
import Profile from "GP/profile";
import DashboardGp from "./MiniDashGp"
import DashboardPaym from "./MiniDashPaym"
import DashboardComm from "./MiniDashComm"


const useStyles = makeStyles(styles);
var x=0;
var y=0;
var z=0;
export default function Dashboard() {
  const classes = useStyles();
  const [users, setUsers] = useState("")
  const [deals, setDeals] = useState("")
  const [realS, setRealS] = useState("")

   


  const [employees, setEmployees] = useState("")
 
  const AuthStr = localStorage.getItem('FBIdToken');
  const [count, setCount] = useState(0);
  let _isMounted= true;
  const abortController= new AbortController();
  const signal = abortController.signal;
 
useEffect(() => {
  const CancelToken = axios.CancelToken;
  const source = CancelToken.source();
  async function fetchData(){
  await axios.get('/getInterest',{ headers: { Authorization: AuthStr } },{ cancelToken: source.token })
  .then(res=>{
    setUsers(res.data.length);
  })
   axios.get('/commercial/deal',{ headers: { Authorization: AuthStr } },{ cancelToken: source.token })
  .then(res=>{
    setDeals(res.data.length);
  }).catch (error => {
    if (axios.isCancel(error)) {
      console.log("cancelled");
    } else {
      throw error;
    }
  });
   axios.get('/posts')
  .then(res=>{
    setRealS(res.data.length);
  }).catch (error => {
    if (axios.isCancel(error)) {
      console.log("cancelled");
    } else {
      throw error;
    }
  });
   axios.get('/employeeData',{ headers: { Authorization: AuthStr } },{ cancelToken: source.token })
  .then(res=>{
    setEmployees(res.data.length);
  }).catch (error => {
    if (axios.isCancel(error)) {
      console.log("cancelled");
    } else {
      throw error;
    }
  });


    
 

  }
  fetchData();
 
  return () => {
    source.cancel();
  };

 






}, [count])
 
 
  return (
    <div style={{marginLeft:"20px", width:"80%"}}>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <GridContainer>
         <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="warning" stats icon>
              <CardIcon color="warning">
                <Icon>content_copy</Icon>
              </CardIcon>
              <p className={classes.cardCategory}>Deals</p>
              <h3 className={classes.cardTitle}>
                {deals} <small>Deals </small>
              </h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <Danger>
                  <Warning />
                </Danger>
                <a href="#pablo" onClick={e => e.preventDefault()}>
                  {deals} deals are done 
                </a>
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="success" stats icon>
              <CardIcon color="success">
                <Store />
              </CardIcon>
              <p className={classes.cardCategory}>Real estates</p>
              <h3 className={classes.cardTitle}>{realS}</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <DateRange />
                {realS} real estates are ready to buy
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="danger" stats icon>
              <CardIcon color="danger">
                <Icon>info_outline</Icon>
              </CardIcon>
              <p className={classes.cardCategory}>Interesed Clients</p>
              <h3 className={classes.cardTitle}>{users}</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <LocalOffer />
                 {users} clients are interested to buy   
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="info" stats icon>
              <CardIcon color="info">
                <Accessibility />
              </CardIcon>
              <p className={classes.cardCategory}>Employees</p>
              <h3 className={classes.cardTitle}>{employees}</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <Update />
                {employees}employees work in this agency 
              </div>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
      <h2>Post Manager Statestics</h2>
      <DashboardGp/>
     <h2>Commercial Statestics</h2>
      <DashboardComm/>
      <h2>Payment Agent Statestics</h2>
      <DashboardPaym/>
      

    </div>
  );
}


 
