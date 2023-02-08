import { Button, Grid } from '@material-ui/core';
import React, { Component } from 'react'
import Header from "./header";
import Scream from "./Posts";
import {connect} from 'react-redux';
import {getScreams} from './redux/actions/dataActions';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import user from './user';
import ScreamSkeleton from './ScreamSkeleton';
import PostScream from './PostScream';
import Profile from './profile';
import mazed from '../image/mazed.png'
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

 class home extends Component {
    
     componentDidMount(){
            this.props.getScreams();
      }
    render() {
        const{screams,loading }=this.props.data;
        console.log("data",this.props.data);
         let usersFeed = !loading ?(
           screams.map((scream,index) =><div key={index} ><Scream key={scream.screamId} scream={scream}/></div>)
        ):  <ScreamSkeleton/>
        return (
            <div >
   

            <Grid container spacing={2}   >
       
                <Grid item sm={8} xs={12} md={12} >
                   {usersFeed}
                </Grid>
           
             </Grid>
         
            </div>
        )
    }
}
home.propTypes={
    getScreams:PropTypes.func.isRequired,
    data: PropTypes.object.isRequired
}

const mapStateToProps= state =>({
    data: state.data,


})


export default connect(mapStateToProps,{getScreams})(home);