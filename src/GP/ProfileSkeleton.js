import React , {Fragment} from 'react';
import PropTypes from 'prop-types';

import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Skeleton from '@yisheng90/react-loading';
import withStyles from '@material-ui/core/styles/withStyles';
import { BoxLoading } from 'react-loadingg';

import NoImg from './noimg.png';

const styles = theme => ({
    card:{
        display : 'flex',
        marginBottom:20,
        height:300,
        width:250
        
    },
    cardContent:{
        width:'100%',
        flexDirection:'column',
        padding:25
    },
    handle:{
        width:60,
        height:10,
        backgroundColor:'#3995ff',
        marginBottom:7
    },
    date:{
        height:10,
        width:100,
        backgroundColor:'rgba(0,0,0,0.3)',
        marginBottom:7

    },
    fullLine:{
        height:10,
        width:100,
        backgroundColor:'rgba(0,0,0,0.3)',
        marginBottom:7

    },
    halfLine:{
        height:10,
        width:100,
        backgroundColor:'rgba(0,0,0,0.3)'
    },
    cover:{
        minWidth:200,
        height:200
    }

})

const ScreamSkeleton = (props)=>{
    const {classes}= props;

        

    return <Fragment>
    <Card className={classes.card} >
    <Skeleton height={350} >
    <img className={classes.cover} src={NoImg}/>
    <CardContent className={classes.CardContent}>
    <div className={classes.handle}/><br></br>

    <div className={classes.fullLine}/>
    <BoxLoading size=''/>
    </CardContent>
    </Skeleton>
</Card></Fragment>
}

ScreamSkeleton.propTypes ={
    classes: PropTypes.object.isRequired
};
export default withStyles(styles)(ScreamSkeleton);