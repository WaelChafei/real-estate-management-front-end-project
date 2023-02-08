 
import Dashboard from '../views/Dashboard/Dashboard';
import React from 'react'
import {BrowserRouter as Router,Route,  Switch} from 'react-router-dom';
import Check from './Check';
import Drawer from './Drawer';
import { makeStyles } from "@material-ui/core/styles";
import Deals from './deals';
import history from "../history";
const useStyles = makeStyles({
    container: {
      display: "flex"
    }
  });


export default function Gp(){

 


      const classes = useStyles();
      return(
         <div className={classes.container}  style={{backgroundColor:"#e4e6e6"}}>
               <Drawer   />
     

             <Switch>
              
              <Route  exact path="/comm/check" render={props=><Check {...props} />}/>
             <Route  exact path="/comm/dash" render={props=><Dashboard {...props} />}/>
             <Route  exact path="/comm/deals" render={props=><Deals {...props} />}/>

   
               </Switch>
   
           
          </div>
       )
 
   }
   
    