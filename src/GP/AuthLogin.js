import React from 'react'
import {Route,Redirect} from 'react-router-dom';
const role = localStorage.getItem('role');
const token = localStorage.getItem('FBIdToken');

const AuthRoute =({component:Component,history, ...rest })=> (

    <Route
    {...rest}
    render={(props)=>
    token ? (
    <Redirect to={"/"+role+"/dash"}/>
   
 
    
    ): <Component {...'/login'}/> } />
);
export default AuthRoute;

  

