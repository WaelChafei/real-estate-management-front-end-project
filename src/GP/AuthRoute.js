import React from 'react'
import { Route, Redirect} from 'react-router-dom';
const AuthRoute =({component:Component,authentificated, ...rest })=> (
    <Route
    {...rest}
    render={(props)=>
    authentificated=== true ?<Redirect to="/"/> : <Component {...props}/>
   
    }/>
);
export default  AuthRoute;

  

