 
import Dashboard from '../views/Dashboard/DashboardGp';
import React from 'react'
import {BrowserRouter as Router,Route,  Switch} from 'react-router-dom';
import addPost from './addPost';
import Drawer from './Drawer';
import { makeStyles } from "@material-ui/core/styles";
import Map from './map';

const useStyles = makeStyles({
    container: {
      display: "flex"
    }
  });


export default function Gp(){

 


      const classes = useStyles();
      return(
         <div className={classes.container} style={{backgroundColor:"#e4e6e6"}}>
         <Drawer/>
   
             <Switch>
              
              <Route  exact path="/gp/add" component={addPost}/>
             <Route  exact path="/gp/dash" component={Dashboard}/>
             <Route  exact path="/gp/map" component={Map}/>

   
               </Switch>
   
 
          </div>
       )
 
   }
   
    