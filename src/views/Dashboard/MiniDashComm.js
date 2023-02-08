
   
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
   
   export default function DashboardComm() {
 
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
    
    
       axios.get('/getInterest',{ headers: { Authorization: AuthStr } },{ cancelToken: source.token })
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
          if(res.data[i].status=="ready to buy"){
            accept.push(month+1);
            }
            if(res.data[i].status=="refused"){
              refuse.push(month+1);
              }
        console.log('res.data',creat );
        }
        setInterest(creat);
        setInterestAccepted(accept);
        setInterestRefused(refuse);
    
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
     
     if(y<20){
      y++;
    
    for (var i = 0; i < interestAccepted.length; i++) {
      console.log("interestAccepted",interestAccepted);
    
     
    
      if(interestAccepted[i]==1){
       setamonth1(amon1++)
      
    
      }
      if(interestAccepted[i]==2){
       setamonth2(amon2++)
       console.log("amonth1",amonth2);
    
    
      }
      if(interestAccepted[i]==3){
       setamonth3(amon3++)
      }
      if(interestAccepted[i]==4){
       setamonth4(amon4++)
     
    
      }
      if(interestAccepted[i]==5){
       setamonth5(amon5++)
      }
      if(interestAccepted[i]==6){
       setamonth6(amon6++)
      }
      if(interestAccepted[i]==7){
       setamonth7(amon7++)
      }
      if(interestAccepted[i]==8){
       setamonth8(amon8++)
      }
      if(interestAccepted[i]==9){
       setamonth9(amon9++)
      }
      if(interestAccepted[i]==10){
       setamonth10(amon10++)
      }
      if(interestAccepted[i]==11){
       setamonth11(amon11++)
      }
      if(interestAccepted[i]==12){
       setamonth12(amon12+1)
      }
    
    
     }}
     console.log("interestRefused",interestRefused);
     console.log("interest",interest);
    
     if(z<30){
    z++
     for (var i = 0; i < interestRefused.length; i++) {
         
    
      if(interestRefused[i]==1){
       setfmonth1(fmon1++)
     
    
      }
      if(interestRefused[i]==2){
       setfmonth2(fmon2++)
     
    
      }
      if(interestRefused[i]==3){
       setfmonth3(fmon3++)
      }
      if(interestRefused[i]==4){
       setfmonth4(fmon4++)
      
    
      }
      if(interestRefused[i]==5){
       setfmonth5(fmon5++)
      }
      if(interestRefused[i]==6){
       setfmonth6(fmon6++)
      }
      if(interestRefused[i]==7){
       setfmonth7(fmon7++)
      }
      if(interestRefused[i]==8){
       setfmonth8(fmon8++)
      }
      if(interestRefused[i]==9){
       setfmonth9(fmon9++)
      }
      if(interestRefused[i]==10){
       setfmonth10(fmon10++)
      }
      if(interestRefused[i]==11){
       setfmonth11(fmon11++)
      }
      if(interestRefused[i]==12){
       setfmonth12(fmon12+1)
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
    
    
      console.log("amonth5",amonth5);
      console.log("month5",month5);
      console.log("fmonth5",fmonth5);
      const emailsSubscriptionChart = {
        data: {
          labels: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "Mai",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec"
          ],
          series: [[`${amonth1}`, `${amonth2}`, `${amonth3}`, `${amonth4}`, `${amonth5}`, `${amonth6}`,
           amonth7,amonth8,amonth9,amonth10,amonth11,amonth12]]
        },
        options: {
          axisX: {
            showGrid: false
          },
          low: 0,
          high: 30,
          chartPadding: {
            top: 0,
            right: 5,
            bottom: 0,
            left: 0
          }
        },
        responsiveOptions: [
          [
            "screen and (max-width: 640px)",
            {
              seriesBarDistance: 5,
              axisX: {
                labelInterpolationFnc: function(value) {
                  return value[0];
                }
              }
            }
          ]
        ],
        animation: {
          draw: function(data) {
            if (data.type === "bar") {
              data.element.animate({
                opacity: {
                  begin: 50,
                  dur: durations2,
                  from: 0,
                  to: 1,
                  easing: "ease"
                }
              });
            }
          }
        }
      };
    
    
      const completedTasksChart = {
        data: {
          labels: ["1", "2", "3", "4", "5", "6", "7", "8","9","10","11","12"],
          series: [[`${fmonth1}`, `${fmonth2}`, `${fmonth3}`, `${fmonth4}`, `${fmonth5}`, `${fmonth6}`,
           `${fmonth7}`,`${fmonth8}`,`${fmonth9}`,`${fmonth10}`,`${fmonth11}`,`${fmonth12}`]]
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
        <div>
  
      <GridContainer>
            <GridItem xs={12} sm={12} md={4}>
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
                  <h4 className={classes.cardTitle}>Interested per month</h4>
                  <p className={classes.cardCategory}>
                    <span className={classes.successText}>
                      <ArrowUpward className={classes.upArrowCardCategory} /> {users}
                    </span>{" "}
                    total interested
                  </p>
                </CardBody>
                <CardFooter chart>
                  <div className={classes.stats}>
                
                  </div>
                </CardFooter>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <Card chart>
                <CardHeader color="warning">
                  <ChartistGraph
                    className="ct-chart"
                    data={emailsSubscriptionChart.data}
                    type="Bar"
                    options={emailsSubscriptionChart.options}
                    responsiveOptions={emailsSubscriptionChart.responsiveOptions}
                    listener={emailsSubscriptionChart.animation}
                  />
                </CardHeader>
                <CardBody>
                  <h4 className={classes.cardTitle}>Accepted Clients</h4>
                  <p className={classes.cardCategory}>Clients that are ready to buy per month</p>
                </CardBody>
                <CardFooter chart>
                  <div className={classes.stats}>
            
                  </div>
                </CardFooter>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <Card chart>
                <CardHeader color="danger">
                  <ChartistGraph
                    className="ct-chart"
                    data={completedTasksChart.data}
                    type="Line"
                    options={completedTasksChart.options}
                    listener={completedTasksChart.animation}
                  />
                </CardHeader>
                <CardBody>
                  <h4 className={classes.cardTitle}>Refused Clients</h4>
                  <p className={classes.cardCategory}>Clients that refused to buy the real estate per month</p>
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
    
  