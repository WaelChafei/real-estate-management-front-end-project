 
import Dashboard from '../views/Dashboard/DashboardPaym';
import React from 'react'
import {BrowserRouter as Router,Route,  Switch} from 'react-router-dom';
import Table from './table';
import Drawer from './Drawer';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    container: {
      display: "flex"
    }
  });


export default function Gp(){

 


      const classes = useStyles();
      return(
         <div className={classes.container}  style={{backgroundColor:"#e4e6e6"}}>
         <Drawer/>
 
             <Switch>
              
              <Route  exact path="/paym/table" component={Table}/>
             <Route  exact path="/paym/dash" component={Dashboard}/>
   
   
               </Switch>
 
          </div>
       )
 
   }
   
    