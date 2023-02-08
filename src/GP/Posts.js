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
import DeleteScream from './DeleteScream';
import {Link} from  'react-router-dom';
import ScreamDialog from './ScreamDialog';
import CardMedia from '@material-ui/core/CardMedia';
import Interested from './Interested';
import {   Grid } from '@material-ui/core';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import LocationOnIcon from '@material-ui/icons/LocationOn';
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
  
    
 
    render() {
        dayjs.extend(relativeTime);
        const {classes, scream : {body , createdAt, adresse,price,type,title },
        user :{
            authenticated
            
        } }=this.props;
       
        
        return ( 
            <div>
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
                <Grid item sm={8} xs={12} md={2} > <Typography variant="body1" >Description: </Typography></Grid>
                 <Grid item sm={8} xs={12} md={10} ><Typography variant="body1" > {body} </Typography></Grid>
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
            <div style={{paddingTop:"10%"}}> <Interested postId={this.props.scream.postId}   >   Interested</Interested> </div>
                </CardContent>
                </Grid>
                <Grid item>
                <Typography variant="subtitle1" style={{marginLeft:"-100px",marginTop:"20px",fontSize:"20px"}}> <b>{price} $</b>  </Typography>
            </Grid>
             </Card>
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



