import React from 'react'
import {Route,Redirect} from 'react-router-dom';
const role = localStorage.getItem('role');
const token = localStorage.getItem('FBIdToken');

const AuthRoute =({component:Component,history, ...rest })=> (
    token ? (
    <Route
    {...rest}
    render={(props)=>
   
    role!= "paym" ? <Redirect to={"/"+role+"/dash"}/>
   
   : <Component {...'/paym/dash'}/>
    
        } />
        ): window.location.href="/login"

);
export default AuthRoute;

  

