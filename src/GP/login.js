import React,{Component} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import PropTypes from 'prop-types';
import { Paper, withStyles } from '@material-ui/core';
import back from 'image/back55.jpg';
import back2 from 'image/back55.png';
import CardAvatar from "components/Card/CardAvatar.js";
import prof from "image/img_avatar3.png"
//redux stuff
import {connect} from'react-redux';
import {loginUser} from './redux/actions/userActions';
 import HomeIcon from '@material-ui/icons/Home';
 import  Alert from '@material-ui/lab/Alert';

import "../userUI/test.css";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
backe:{
  backgroundColor:"#21292F" 
},
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

 
 class login extends Component {
  constructor(){
    super();
    this.state={
      password:"",
      email:"",
      errors:{}
    }
  }
  componentWillReceiveProps(nextProps){
    if(nextProps.UI.errors){
      this.setState({errors: nextProps.UI.errors});
    }
  }


  handleSubmit=(event)=>{
  event.preventDefault();
    const userdata ={
    email : this.state.email,
    password : this.state.password,
  };
  this.props.loginUser(userdata);
 
 

}


  handleChange=(event)=>{
   this.setState({
    [event.target.name] : event.target.value
   })
  }




    render() {
      const {
        classes,
        UI: { loading }
      } = this.props;
      const { errors } = this.state;
    return (
      <div style={{width:'100%',height:'100vh',backgroundImage:`url(${back2})`,backgroundSize:"cover" }}>
        <br></br>
        <br></br>

        <Paper style={{borderRadius:'30px' ,marginLeft:"10%",marginRight:"10%",backgroundColor:"#F4F7F9"}}>
      <div style={{width:'100%',height: '90%',backgroundPosition: 'center'}} >
  
      
     <Grid container >
       
        <Grid item xs={2} sm={2} md={6}    >
          
          <img src={back} style={{width:"100%",height: '100%',borderTopLeftRadius:"30px",borderBottomLeftRadius:"30px"}} />
          </Grid>  <Grid item md={1} style={{position:'absolute',right:'9%'}} >
          <Link color="inherit" href="/home">
              <Button
              variant="contained"
              color="primary"
              style={{borderTopRightRadius:"30px",backgroundColor:"#5595FA"}}
                 >

                <HomeIcon/>
            </Button></Link>
            </Grid>
          <Grid item xs={10} sm={10} md={5} style={{padding:"100px"}}  >
        <div  > 
   
        <CardAvatar profile>
            
              <img src={prof}   />
            
        
            </CardAvatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form   noValidate onSubmit={this.handleSubmit}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              helperText={errors.email}
              error={errors.email ? true : false}
              autoFocus  value={this.state.email} onChange={this.handleChange}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              helperText={errors.password}
              error={errors.password ? true : false}
              autoComplete="current-password" value={this.state.password} onChange={this.handleChange}
            />

{errors.general && (
              <Typography variant="body2" style={{color:"red"}} >
                {errors.general}
               </Typography>
            )}


          <br></br>
          
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              style={{borderRadius:"30px",backgroundColor:"#5595FA"}}

            >
              Sign In
            </Button>
      
          </form>
        </div></Grid>
          
         </Grid>

  
     
      </div></Paper>
      {errors.email||errors.general||errors.password ?(<Alert severity="error" variant="filled" id="hideMe">Check your Inputs</Alert>):("")
    }
   

      </div>
    );
  }
}
login.propTypes={
   loginUser: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  UI: PropTypes.object.isRequired,
}

const mapStateToProps=(state)=>({
  user : state.user,
  UI: state.UI 
})
const mapActionsToProps={
  loginUser
}

export default connect(mapStateToProps, mapActionsToProps) (login) 


 