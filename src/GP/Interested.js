import React, { Component, Fragment } from 'react'
 import Button from '@material-ui/core/Button';
 import axios from 'axios';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
 import Box from '@material-ui/core/Box';
 import Container from '@material-ui/core/Container';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import CloseIcon from '@material-ui/icons/Close';
 import AssistantIcon from '@material-ui/icons/Assistant';
const styles = theme => ({
invisibleSeperater:{
    border:'none',
    margin:4
},
form: {
  width: '100%', // Fix IE 11 issue.
  marginTop: theme.spacing(1),
},
})

class Interested extends Component {
  constructor(){
    super();
    this.state={
      cin:"",
      firstName:"",
      email:"",
      lastName:"",
      phone:"",
      dateCin:" ",
      dn:" ",
      job:" ",
      nbBuy:" ",
      relation:" ",
      employeeId:"",
      postId:"",
      userId:"",
      errors:{},
      enter:false,
      open:false,
    }
  }
   componentDidMount() {
    axios.get(`/post/${this.props.postId}`)
    .then(res=>{
      this.setState({
        employeeId:res.data.commercialId
      })
    })
  
  }
  handleSubmit=async(event)=>{
 
 

      event.preventDefault();

      const interestData={
        employeeId: this.state.employeeId,
        postId:this.props.postId,
        userId:this.state.userId,
        status:"interested"
      }
      const userdata ={
        cin : this.state.cin,
        firstName : this.state.firstName,
        lastName : this.state.lastName,
        email : this.state.email,
        phone : this.state.phone,
        dateCin:this.state.dateCin,
        dn:this.state.dn,
        status:"false",

 
     
    }

 
let x=0;
   await axios.post("/user/createAccount",userdata )
    .then(res =>{
   
      console.log(res.data);
      this.setState({
       userId:res.data.general,
       enter:true
     })
     console.log("userID",this.state.userId);
      interestData.userId=this.state.userId;
     axios.post('/post/addInterest',interestData )
    .then(res=>{
      console.log(res.data)
    }).catch(err=>{  console.log(err)})
    }).catch(err=>{  console.log(err) ;   console.log("email",this.state.email);
      axios.get("/user").then(res=>{
          for (var i = 0; i < res.data.length; i++) {
            if(res.data[i].email==this.state.email){
              this.setState({
                userId:res.data[i].userDataId
              })
              break
            }
         
          }
     
          interestData.userId=this.state.userId;
          axios.post('/post/addInterest',interestData )
          .then(res=>{
            console.log(res.data)
          }).catch(err=>{  console.log(err)})
      }) ;
      this.setState({
   
        open:true
      })});
   
  }
  handleChange=(event)=>{
    this.setState({
     [event.target.name] : event.target.value
    })}
    handleOpen=()=>{
  

        this.setState({ open: true });
     }
    handleClose=()=>{
        this.setState({open:false});
    }
    render(){
  
    const dialogMarkup =  
          <Container component="main" maxWidth="xs" >
          <CssBaseline />
          <div  >
            <Avatar    >
              <AssistantIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Interrested form
            </Typography><br></br>
            <form   noValidate>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        autoComplete="fname"
                        name="firstName"
                        variant="outlined"
                        required
                        fullWidth
                        id="firstName"
                        label="First Name"
                        autoFocus
                        autoComplete="email"value={this.state.firstName} onChange={this.handleChange}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        variant="outlined"
                        required
                        fullWidth
                        id="lastName"
                        label="Last Name"
                        name="lastName"
                        autoComplete="lname"
                        autoComplete="email"value={this.state.lastName} onChange={this.handleChange}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        variant="outlined"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"value={this.state.email} onChange={this.handleChange}
                      />
                    </Grid>
                
                    
                     
                    <Grid item xs={12}>
                      <TextField
                        variant="outlined"
                        required
                        fullWidth
                        name="cin"
                        label="CIN"
                        type="number"
                        id="CIN"
                        autoComplete="current-password"                   
                        value={this.state.cin} onChange={this.handleChange}
                        />
                    </Grid>              
                    <Grid item xs={12}>
                      <TextField
                        variant="outlined"
                        required
                        fullWidth
                        name="phone"
                        label="phone"
                        type="number"
                        id="phone"
                        value={this.state.phone} onChange={this.handleChange}
                        />
                    </Grid>           
                 
                  </Grid><br></br>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    onClick={this.handleSubmit} 
                  >
                    Sign Up
                  </Button>
            
                 </form>
          </div>
          <Box mt={8}>
           </Box>
        </Container>
 
 
    return(
        <Fragment>
          <div style={{width:"50%",marginLeft:"25%"}}>
            <Button onClick={this.handleOpen} style={{borderRadius:25}} color="primary" variant="contained" tip="Expand scream" fullWidth >
                 Interested
            </Button>
            </div>
             <Dialog open={this.state.open} onClose={this.handleClose} fullWidth maxWidth='sm'>
                <Button tip="close"  onClick={this.handleClose}  >
                     <CloseIcon/>
                </Button>
                <DialogContent >
                    {dialogMarkup}
                </DialogContent>
            </Dialog>
        </Fragment> 
    )
    }
    }
    

 

export default (Interested);
