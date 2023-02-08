import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import axios from "axios";
import  { useState,useEffect } from 'react';
import { Button, Grid } from '@material-ui/core';
import styles from "assets/jss/material-dashboard-react/components/tableStyle.js";

const useStyles = makeStyles(styles);






export default function TableList() {
   const [screams, setScreams] = useState(null);
  const AuthStr = localStorage.getItem('FBIdToken');

  const classes = useStyles();
  useEffect(() => {
    axios.get('/employeeData',{ headers: { Authorization: AuthStr } })
      .then(res =>{
      
        setScreams(res.data)
      })
      .catch(err => console.log(err));
    
  } );
  const recentScreamsMarkup = screams ?(
    screams.map(scream => <p>
      
      <table className={classes.tableResponsive}   >
         <tr  >
            <td  className={classes.tableCell}>{scream.employeeFullName}</td>
            <td  className={classes.tableCell}>{scream.email}</td>
            <td  className={classes.tableHead}>{scream.phone}</td>
            <td  className={classes.tableCell}>{scream.officeCity}</td>
            <td  className={classes.tableCell}>{scream.role}</td>
         </tr>
         
        
      </table>
      
       </p> )
  ):(
    <p>loading...</p>
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
            <Table
              tableHeaderColor="primary"
              tableHead={["Name", "Email","Phone number", "City", "Role"]}
             
            />
             <Grid>{recentScreamsMarkup}</Grid>
          </CardBody>
        </Card>
      </GridItem>
       
    </GridContainer>
  );
}
