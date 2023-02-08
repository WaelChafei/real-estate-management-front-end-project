import React , {Fragment} from 'react';
import PropTypes from 'prop-types';

import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Skeleton from '@yisheng90/react-loading';
import withStyles from '@material-ui/core/styles/withStyles';
import { BoxLoading } from 'react-loadingg';
const styles = theme => ({
    card:{
        display : 'flex',
        marginBottom:10,
        height:150
        
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

})

const ScreamSkeleton = (props)=>{
    const {classes}= props;

    const content = Array.from({length:5}).map((item, index)=>(
        <Card className={classes.card} key={index}>
            <Skeleton height={150} >
            <CardContent className={classes.CardContent}>
            <div className={classes.handle}/>
            <div className={classes.date}/>
            <div className={classes.fullLine}/>
       
            </CardContent>
            </Skeleton>
        </Card>
    ))
    return <Fragment><br></br> <br></br>{content}</Fragment>
}

ScreamSkeleton.propTypes ={
    classes: PropTypes.object.isRequired
};
export default withStyles(styles)(ScreamSkeleton);