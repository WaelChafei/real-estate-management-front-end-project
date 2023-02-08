/*import './App.css';
import React, {Component} from 'react';
import {BrowserRouter as Router,Route,  Switch} from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import Login from './login';
import Home from './home' ;
import AuthRoute from './AuthRoute';
import Signup from './signup';
import AuthRou from './AuthRou';
import Posts from'./Posts'
//Redux
import {Provider} from 'react-redux';
import store from './redux/store'

import axios from "axios";
 import { logoutUser, getUserData } from './redux/actions/userActions';
import ScreamDialog from './ScreamDialog';
import user from './user';

let authenticated;//ken expired el token wala la
const token=localStorage.FBIdToken;
if(token){
const decodedToken=jwtDecode(token);
console.log("wa",decodedToken);
if(decodedToken.exp *1000 < Date.now()){
window.location.href="/login";
store.dispatch(logoutUser());
authenticated=false;
}else{
axios.defaults.headers.common['Authorization']=token;
store.dispatch(getUserData());
authenticated= true;

}

}else{
  authenticated=false;
}
class App extends Component {
 //let = global
  render(){
    return(
      <div className="app">
        <Provider store={store}>

        <Router>
          <Switch>
           
          <AuthRoute path="/login" component={Login} authentificated={authenticated}/>
          <AuthRoute path="/signup" component={Signup}  />
          <AuthRoute path="/posts" component={Posts}  />
          <AuthRou path="/" component={Home} authentificated={authenticated} />
          <Route exact path="/users/:handle" component={user}/> 
          <Route  exact path="/scream/:screamId/" component={user}/>
          <Route  exact path="/scream/:screamId/" component={user}/>


            </Switch>

        </Router>
        </Provider>
      </div>
    )
  }
}
export default App;
*/