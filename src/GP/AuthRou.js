import React from 'react'
import {Route,Redirect} from 'react-router-dom';
const role = localStorage.getItem('role');
const token = localStorage.getItem('FBIdToken');

const AuthRoute =({component:Component,history, ...rest })=> (
    token ? (
    <Route
    {...rest}
    render={(props)=>

    role!= "gp" ? <Redirect to={"/"+role+"/dash"}/>
   
   : <Component {...'/gp/dash'}/>
    
   } />
   ): window.location.href="/login"
);
export default AuthRoute;

  

