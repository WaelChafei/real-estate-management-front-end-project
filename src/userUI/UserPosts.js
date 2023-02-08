import { Button, Divider, Typography, withStyles } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import React, { Component } from 'react'
import FavoriteIcon from '@material-ui/icons/Favorite';
import {connect} from 'react-redux';
 import PropTypes from 'prop-types';
import ChatIcon from '@material-ui/icons/Chat';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime'
import DeleteScream from '../GP/DeleteScream';
import {Link} from  'react-router-dom';
import ScreamDialog from '../GP/ScreamDialog';
import CardMedia from '@material-ui/core/CardMedia';
import {   Grid } from '@material-ui/core';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import TextField from '@material-ui/core/TextField';

 const styles = {
    card:{
        display :'flex',
        marginBottom:20
    },
    content:{
        padding:20
    }
}
 


class Posts extends Component {
    constructor(){
        super();
        this.state={
          clicked:"false",
        
        }
      }

    handleClick=(event)=>{
        this.setState({
            clicked : "true"
           })
          
            this.props.handleChange( this.props.scream.postId);
            console.log("eventi",this.props.scream.postId);
            this.props.handleChange12( this.props.scream.postId);

          
    }
    
    handleChange9=(event)=>{
        this.props.handleChange9(event.target.value)
        console.log("eventi",event.target.value);
    
      }
 handleChange10=(event)=>{
    this.props.handleChange10(event.target.value)
        console.log("eventi",event.target.value);
    
      }
 handleChange11=(event)=>{
    this.props.handleChange11(event.target.value)
        console.log("eventi",event.target.value);
    
      }
   handleChange8=(event)=>{
        this.props.handleChange8(event.target.value)
        console.log("eventi",event.target.value);
    
      }
    render() {
        dayjs.extend(relativeTime);
        const {classes, scream : {body , createdAt, adresse,price,type,title },
        user :{
            authenticated
            
        } }=this.props;
       
        
        return ( 
            <div>
                <Button onClick={this.handleClick}>
                  <Card className={classes.card}  >
                  <Grid item sm={8} xs={12} md={6} >
                 <ScreamDialog postId={this.props.scream.postId}  imgLeft={this.props.scream.imgLeft}
                 imgMid={this.props.scream.imgMid} imgRight={this.props.scream.imgRight} />
                 </Grid>  
                <Grid item sm={8} xs={12} md={6} >
              
                <CardContent className={classes.content}>
                     <br></br>
                    <br></br>
              
                <Typography gutterBottom variant="subtitle1" style={{fontSize:"25px"}} ><h4><b>Title:   {title}</b></h4> </Typography>
                <Grid container spacing={2}>
                <Grid item sm={8} xs={12} md={12} > <Typography variant="body1" >Description:{" "} {body} </Typography></Grid>
               </Grid>
               <Typography variant="body1" color="textSecondary" > {dayjs(createdAt).fromNow()} </Typography>
               
      
             
               <br></br>
               <Divider orientation="horizontal"  />
               <br></br>
               <Grid container>
                <Grid item sm={8} xs={12} md={12} > <Typography variant="body1"  color="textSecondary" style={{fontSize:"20px"}}> <LocationOnIcon fontSize="large"/> Location: {adresse}  </Typography></Grid>
              
                 </Grid>
                <br></br>
                <Grid container>
                <Grid item sm={8} xs={12} md={12} > <Typography variant="body1"  color="textSecondary" style={{fontSize:"20px"}}> <LocalOfferIcon fontSize="large" /> Type:   {type} </Typography></Grid>
              
                 </Grid>
                 <br></br>
                 <Divider/>
                 </CardContent>
                </Grid>
                <Grid item>
                <Typography variant="subtitle1" style={{marginLeft:"-100px",marginTop:"20px",fontSize:"20px"}}> <b>{price} $</b>  </Typography>
            </Grid>
             </Card>
             </Button>
             {this.state.clicked=="true"?(   <Grid container spacing={3}>
      <Grid item xs={12} sm={6}>
          <TextField
           id="buyer2"
           name="buyer2"
           label="Buyer 2" 
           fullWidth 
           onChange={this.handleChange8}

           />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
             id="cin2"
            name="cin2"
            type="number"
            label="Cin Buyer 2"
            fullWidth
           onChange={this.handleChange9}

          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
             id="buyer3"
            name="buyer3"
            label="Buyer 3"
            fullWidth
            onChange={this.handleChange10}


          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
           id="cin3"
           name="cin3"
           label="Cin Buyer 3" 
           type="number"
           fullWidth 
           onChange={this.handleChange11}

           />
        </Grid>
         </Grid>
        ):("")
        
        }
             </div>
        )
    }
}
Posts.propType={
     user:PropTypes.object.isRequired,
    scream: PropTypes.object.isRequired
    

}

const mapStateToProps=state=>({
    user : state.user
})
 

export default connect(mapStateToProps )(withStyles(styles)(Posts));



