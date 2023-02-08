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

const useStyles = makeStyles(styles);
var x=0;
var y=0;
var z=0;
export default function Dashboard() {
  const classes = useStyles();
  const [users, setUsers] = useState("")
  const [deals, setDeals] = useState("")
  const [realS, setRealS] = useState("")

  const [month1, setmonth1] = useState(0);
  const [month2, setmonth2] = useState(0);
  const [month3, setmonth3] = useState(0);
  const [month4, setmonth4] = useState(0);
  const [month5, setmonth5] = useState(0);
  const [month6, setmonth6] = useState(0);
  const [month7, setmonth7] = useState(0);
  const [month8, setmonth8] = useState(0);
  const [month9, setmonth9] = useState(0);
  const [month10, setmonth10] = useState(0);
  const [month11, setmonth11] = useState(0);
  const [month12, setmonth12] = useState(0);


  
  const [amonth1, setamonth1] = useState(0);
  const [amonth2, setamonth2] = useState(0);
  const [amonth3, setamonth3] = useState(0);
  const [amonth4, setamonth4] = useState(0);
  const [amonth5, setamonth5] = useState(0);
  const [amonth6, setamonth6] = useState(0);
  const [amonth7, setamonth7] = useState(0);
  const [amonth8, setamonth8] = useState(0);
  const [amonth9, setamonth9] = useState(0);
  const [amonth10, setamonth10] = useState(0);
  const [amonth11, setamonth11] = useState(0);
  const [amonth12, setamonth12] = useState(0);

    
  const [fmonth1, setfmonth1] = useState(0);
  const [fmonth2, setfmonth2] = useState(0);
  const [fmonth3, setfmonth3] = useState(0);
  const [fmonth4, setfmonth4] = useState(0);
  const [fmonth5, setfmonth5] = useState(0);
  const [fmonth6, setfmonth6] = useState(0);
  const [fmonth7, setfmonth7] = useState(0);
  const [fmonth8, setfmonth8] = useState(0);
  const [fmonth9, setfmonth9] = useState(0);
  const [fmonth10, setfmonth10] = useState(0);
  const [fmonth11, setfmonth11] = useState(0);
  const [fmonth12, setfmonth12] = useState(0);

  var mon1=1;
  var mon2=1;
  var mon3=1;
  var mon4=1;
  var mon5=1;
  var mon6=1;
  var mon7=1;
  var mon8=1;
  var mon9=1;
  var mon10=1;
  var mon11=1;
  var mon12=1;

var amon1=1;
var amon2=1;
var amon3=1;
var amon4=1;
var amon5=1;
var amon6=1;
var amon7=1;
var amon8=1;
var amon9=1;
var amon10=1;
var amon11=1;
var amon12=1;

var fmon1=1;
var fmon2=1;
var fmon3=1;
var fmon4=1;
var fmon5=1;
var fmon6=1;
var fmon7=1;
var fmon8=1;
var fmon9=1;
var fmon10=1;
var fmon11=1;
var fmon12=1;


  const [employees, setEmployees] = useState("")
  const [interest, setInterest] = useState("")
  const [interestAccepted, setInterestAccepted] = useState("")
  const [interestRefused, setInterestRefused] = useState("")
  const AuthStr = localStorage.getItem('FBIdToken');
  const [count, setCount] = useState(0);
  let _isMounted= true;
  const abortController= new AbortController();
  const signal = abortController.signal;
  let creat=[];
  let accept=[];
  let refuse=[];
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


   axios.get('/posts',{ headers: { Authorization: AuthStr } },{ cancelToken: source.token })
  .then(res=>{
    for(var i=0 ; i<res.data.length;i++){
      var smt=new Date(res.data[i].createdAt);
      var month= smt.getMonth()
      var smt=new Date(res.data[i].createdAt);
      var now=new Date();
      var thisYear= now.getFullYear()
      var year= smt.getFullYear()
      if(thisYear==year){
      creat.push(month+1);
      }
     
 
    console.log('res.data',creat );
    }
    setInterest(creat);
 

  }).catch (error => {
    if (axios.isCancel(error)) {
      console.log("cancelled");
    } else {
      throw error;
    }
  }

  );
 
 

  }
  fetchData();
 
  return () => {
    source.cancel();
  };

 






}, [count])
 
if(x<10){
  x++;

for (var i = 0; i < interest.length; i++) {
     

  if(interest[i]==1){
   setmonth1(mon1++)
   console.log("month1",month1);

  }
  if(interest[i]==2){
   setmonth2(mon2++)
   console.log("month1",month2);

  }
  if(interest[i]==3){
   setmonth3(mon3++)
  }
  if(interest[i]==4){
   setmonth4(mon4++)
   console.log("month4",month4);

  }
  if(interest[i]==5){
   setmonth5(mon5++)
  }
  if(interest[i]==6){
   setmonth6(mon6++)
  }
  if(interest[i]==7){
   setmonth7(mon7++)
  }
  if(interest[i]==8){
   setmonth8(mon8++)
  }
  if(interest[i]==9){
   setmonth9(mon9++)
  }
  if(interest[i]==10){
   setmonth10(mon10++)
  }
  if(interest[i]==11){
   setmonth11(mon11++)
  }
  if(interest[i]==12){
   setmonth12(mon12+1)
  }


 }}
 
 
 

var delays = 80,
  durations = 500;
var delays2 = 80,
  durations2 = 500;
  var Chartist = require("chartist");
  const dailySalesChart = {
    data: {
      labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
      series: [[`${month1}`, `${month2}`, `${month3}`, `${month4}`, `${month5}`, `${month6}`, month7,month8,month9,month10,month11,month12]]
    },
    options: {
      lineSmooth: Chartist.Interpolation.cardinal({
        tension: 0
      }),
      low: 0,
      high: 30, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
      chartPadding: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
      }
    },
    // for animation
    animation: {
      draw: function(data) {
        if (data.type === "line" || data.type === "area") {
          data.element.animate({
            d: {
              begin: 600,
              dur: 700,
              from: data.path
                .clone()
                .scale(1, 0)
                .translate(0, data.chartRect.height())
                .stringify(),
              to: data.path.clone().stringify(),
              easing: Chartist.Svg.Easing.easeOutQuint
            }
          });
        } else if (data.type === "point") {
          data.element.animate({
            opacity: {
              begin: (data.index + 1) * delays,
              dur: durations,
              from: 0,
              to: 1,
              easing: "ease"
            }
          });
        }
      }
    }
  };


 
  return (
    <div style={{width:"80%"}}>
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
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card chart>
            <CardHeader color="success">
              <ChartistGraph
                className="ct-chart"
                data={dailySalesChart.data}
                type="Line"
                options={dailySalesChart.options}
                listener={dailySalesChart.animation}
              />
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>Posted annoucement of real estates per month</h4>
              <p className={classes.cardCategory}>
                <span className={classes.successText}>
                  <ArrowUpward className={classes.upArrowCardCategory} /> {realS}
                </span>{" "}
                total Real estates
              </p>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
            
              </div>
            </CardFooter>
          </Card>
        </GridItem>


      </GridContainer>
    </div>
  );
}
