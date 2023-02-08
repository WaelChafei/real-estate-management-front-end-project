 
  import React from 'react'
import {BrowserRouter as Router,Route,  Switch} from 'react-router-dom';
 import Drawer from './Drawer';
import { makeStyles } from "@material-ui/core/styles";
import Profile from './Profile';
import Formu from './Formu';
import GetContract from './GetContract'
const useStyles = makeStyles({
    container: {
      display: "flex"
    }
  });


export default function User(){

 


      const classes = useStyles();
      return(
         <div className={classes.container}>
         <Drawer/>
        
             <Switch>
              
         
               <Route  exact path="/user/form" component={Formu}/>
               <Route  exact path="/user/Contract" component={GetContract}/>

   
               </Switch>
   
          
          </div>
       )
 
   }
   
    