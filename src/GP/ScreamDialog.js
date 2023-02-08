import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/withWidth';
import Button from '@material-ui/core/Button';
import dayjs from 'dayjs';
import {Link} from 'react-router-dom';

import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import CloseIcon from '@material-ui/icons/Close';
import back from "image/post.jpg"
import  { useState } from 'react';

import {connect} from 'react-redux';
import{getScream} from './redux/actions/dataActions'
import { UnfoldMore } from '@material-ui/icons';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./test.css"
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';

const styles = theme => ({
invisibleSeperater:{
    border:'none',
    margin:4
}

})

class ScreamDialog extends Component {
    state={
        open:false,
        oldPath:'',
        newPath:'',
        hover:false
    }
    handleOpen=()=>{
        let oldPath = window.location.pathname;
        const {userHandle, screamId }=this.props;
        const newPath=`/scream/${screamId}`;

        window.history.pushState(null,null,newPath);

        this.setState({ open: true, oldPath,newPath});
        this.props.getScream(this.props.screamId);
    }
    handleClose=()=>{
        window.history.pushState(null,null,this.state.oldPath);
        this.setState({open:false});
    }
    
          
    onHover = () => {
        this.setState({hover:true});
      };
             
      onLeave = () => {
        this.setState({hover:false});
      };
 
  
    render(){
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            color:"black"
          };
        const {  scream:{ body , createdAt, likeCount , userHandle}, UI :{ loading}  }=this.props;
 
    const dialogMarkup = loading?(
        <CircularProgress size={200}/>
        ):(
            <Grid container spacing={2}>
                <Grid item sm={5}>
                    <Typography component={Link} color='primary' variant="h5" to={`/users/${userHandle}`}>
                        @{userHandle}
                    </Typography>
                    <hr/>



                    <Typography variant="body2" color="textSecondary">
                         {dayjs(createdAt).fromNow()}
                    </Typography>
                    <hr />
                    <Typography variant="body1">
                        {body}
                    </Typography>
                    <Typography variant="body1" > Description : {body} </Typography>
                <Typography variant="body1" >Price : 200.000 $ </Typography>
                <Typography variant="body1" >Location : Sfax </Typography>

                </Grid>
            </Grid>
        )
        
            
             
        
    return(
        <div>
            
       
        
        <Carousel >
            <Carousel.Item>
          <div style={{color:"black"}}>
     
          <img src={this.props.imgLeft=="https://firebasestorage.googleapis.com/v0/b/ite-real-estate-management.appspot.com/o/pic-man.png?alt=media"?back:this.props.imgLeft} style={{borderRadius:5}} height="400px" width="600px" />   
          </div>
                
          </Carousel.Item>
          <Carousel.Item>

          <div>
          <img src={this.props.imgMid=="https://firebasestorage.googleapis.com/v0/b/ite-real-estate-management.appspot.com/o/pic-man.png?alt=media"?back:this.props.imgMid} style={{borderRadius:5}} height="400px" width="600px" />   
          </div>
    
          </Carousel.Item>
          <Carousel.Item>
          <div>
          <img src={this.props.imgRight=="https://firebasestorage.googleapis.com/v0/b/ite-real-estate-management.appspot.com/o/pic-man.png?alt=media"?back:this.props.imgRight} style={{borderRadius:5}} height="400px" width="600px" />   
          </div>
          </Carousel.Item>
        </Carousel>
 
        </div> 
    )
    }
    }
    


ScreamDialog.propTypes={
    getScream: PropTypes.func.isRequired,
  
 
  
    UI: PropTypes.object.isRequired,
}
const mapStateToProps= state =>({
    scream:state.data.scream,
    UI:state.UI
});
const mapActionsToProps={
    getScream
};

export default connect (mapStateToProps, mapActionsToProps)(withStyles(styles)(ScreamDialog));
