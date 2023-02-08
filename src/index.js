
import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import jwtDecode from 'jwt-decode';

import {Provider} from 'react-redux';

import axios from "axios";

 import { logoutUser, getUserData } from './GP/redux/actions/userActions';

// core components
import Adm from "./views/UserProfile/adm";
import RTL from "layouts/RTL.js";
import Login from './GP/login';
import store from './GP/redux/store'

import "assets/css/material-dashboard-react.css?v=1.9.0";
import Sidebar from "./GPone/Sidebar";
import Comm from "./Commercial/Comm";
import User from "userUI/User";
import Paym from "./Payment/Paym";
import HomePage from "home/HomePage";
import history from './history';
import addPost from "GPone/addPost";
import AuthRoute from "GP/AuthRou";
import testloop from "testloop";
import Map from "home/map";
import AuthrouComm from"GP/AuthrouComm";
import AuthrouPaym from"GP/AuthrouPaym";
import AuthrouAdmin from"GP/AuthrouAdmin";
import AuthLogin from "GP/AuthLogin";
import AuthrouUser from "GP/AuthrouUser";
import Dashboard from "views/Dashboard/Dashboard";
const Role = localStorage.getItem('role');


 let authenticated;//ken expired el token wala la
 const token=localStorage.FBIdToken;
 console.log('tokennn',token);
 if(token!=undefined){
  const decodedToken=token? jwtDecode(token) :"nothing";
 console.log("wa",decodedToken);
 if(decodedToken.exp *1000 < Date.now()){
 window.location.href="/home";
 store.dispatch(logoutUser());
 authenticated=false;
 }else{
 axios.defaults.headers.common['Authorization']=token;
 store.dispatch(getUserData());
 authenticated= true;
 
 }
}
 ReactDOM.render(
     <Provider store={store}>
       
  <Router history={history}>
    <Switch>
      <AuthrouAdmin path="/admin" component={Adm} />
      <AuthLogin path="/login" component={Login}    />
      <AuthRoute path="/gp" component={Sidebar} />
      <AuthrouComm path="/comm" component={Comm} />
       <AuthrouUser path="/user" component={User}/>
      <AuthrouPaym path="/paym" component={Paym}/>
      <Route path="/home" component={HomePage}/>
      <Route path="/Map" component={Map}/>

      <Redirect from="/" to="/home"/>



     </Switch>
  </Router> 
  </Provider>,
  document.getElementById('root')
 
 );
