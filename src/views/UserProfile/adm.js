 
import Dashboard from '../Dashboard/DashboardAdmin';
import React from 'react'
import {BrowserRouter as Router,Route,  Switch} from 'react-router-dom';
import UserProfile from './UserProfile';
import Map from './map';
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
           <Router>
             <Switch>
              
              <Route  exact path="/admin/employee" component={UserProfile}/>
             <Route  exact path="/admin/dash" component={Dashboard}/>
             <Route  exact path="/admin/map" component={Map}/>
   
   
               </Switch>
   
           </Router>
          </div>
       )
 
   }
   
    