/*

import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import CircularProgress from '@material-ui/core/CircularProgress';
import AddIcon from '@material-ui/icons/Add'
import CloseIcon from '@material-ui/icons/Close'


import {connect} from 'react-redux';
import{postScream} from './redux/actions/dataActions'
/*const styles= theme =>({
    ...theme,
    submitButton:{
        position:'relative'
    },
    progressSpinner:{
        position:'abulute'
    },
    closeButton:{
        position:'absolute',
        left:'90%',
        top:'10%'
    }
})

class PostScream extends Component {
state={
    open : false ,
    body :'',
    userHandle:'',
    errors:{}
};
handleOpen=()=>{
    this.setState({ open:true })
}
handleClose=()=>{
    this.setState({open:false})
}

handleChange=(event)=>{
    this.setState({
     [event.target.name] : event.target.value
    })
    console.log("ww",this.state.userHandle);
   }
handleSubmit=(event)=>{
    this.props.postScream({body: this.state.body, userHandle:this.state.userHandle})
    this.setState({open:false})
}
render(){
    const {errors}=this.state;
     
    return(
        <Fragment>
            <Button onClick={this.handleOpen} tip="Post a Scream !">
                <AddIcon color="primary"/>
            </Button>
            <Dialog open={this.state.open} onClose={this.handleClose} fullWidth maxWidth='sm'>
                <Button tip="close" onClick={this.handleClose}  >
                     <CloseIcon/>
                </Button>
                <DialogTitle>Post a new scream</DialogTitle>
                <DialogContent>
                    <form onSubmit={this.handleSubmit}>
                        <TextField 
                            name="body"
                            type="text"
                            label="SCREAM !!"
                            multiline
                            rows="3"
                            placeholder="Scream at your fellow apes"
                            error={errors.body ? true:false}
                            helperText={errors.body}
                            
                            onChange={this.handleChange}
                            fullWidth/>
                               <TextField 
                            name="userHandle"
                            type="text"
                            label="Handle !!!"
                            multiline
                            rows="3"
                            placeholder="Scream at your fellow apes"
                            error={errors.body ? true:false}
                            helperText={errors.body}
                            
                            onChange={this.handleChange}
                            fullWidth/>
                            <Button type="submit" variant="contained" color="primary"  onClick={this.handleSubmit}  >
                                      submit
                                        <CircularProgress size={30}  />
                                      
                                    </Button>
                    </form>
                </DialogContent>
            </Dialog>
                    </Fragment>
    )
}

    
}
PostScream.propTypes={
     postScream: PropTypes.func.isRequired,
 }
const mapStateToProps=(state)=>({
    UI:state.UI
})


export default connect(mapStateToProps,{postScream })(PostScream)

*/


import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
 // MUI Stuff
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import CircularProgress from '@material-ui/core/CircularProgress';
import AddIcon from '@material-ui/icons/Add';
import CloseIcon from '@material-ui/icons/Close';
 
// Redux stuff
import { connect } from 'react-redux';
import { postScream, clearErrors } from './redux/actions/dataActions';

const styles = (theme) => ({
   submitButton: {
    position: 'relative',
    float: 'right',
    marginTop: 10
  },
  progressSpinner: {
    position: 'absolute'
  },
  closeButton: {
    position: 'absolute',
    left: '91%',
    top: '6%'
  }
});

class PostScream extends Component {
  state = {
    open: false,
    body: '',
    userHandle:'',
    errors: {}
  };
  componentWillReceiveProps(nextProps) {
    if (nextProps.UI.errors) {
      this.setState({
        errors: nextProps.UI.errors
      });
    }
    if (!nextProps.UI.errors && !nextProps.UI.loading) {
      this.setState({ body: '', open: false, errors: {} });
    }
  }
  handleOpen = () => {
    this.setState({ open: true });
  };
  handleClose = () => {
    this.props.clearErrors();
    this.setState({ open: false, errors: {} });
  };
  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.postScream({body: this.state.body, userHandle:this.state.userHandle})
  };
  render() {
    const { errors } = this.state;
    const {
      classes,
      UI: { loading }
    } = this.props;
    return (
      <Fragment>
        <Button onClick={this.handleOpen} tip="Post a Scream!">
          <AddIcon />
        </Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          fullWidth
          maxWidth="sm"
        >
          <Button
            tip="Close"
            onClick={this.handleClose}
            tipClassName={classes.closeButton}
          >
            <CloseIcon />
          </Button>
          <DialogTitle>Post a new scream</DialogTitle>
          <DialogContent>
            <form onSubmit={this.handleSubmit}>
              <TextField
                name="body"
                type="text"
                label="SCREAM!!"
                multiline
                rows="3"
                placeholder="Scream at your fellow apes"
                error={errors.body ? true : false}
                helperText={errors.body}
                className={classes.textField}
                onChange={this.handleChange}
                fullWidth
              />
                <TextField 
                            name="userHandle"
                            type="text"
                            label="Handle !!!"
                            multiline
                            rows="3"
                            placeholder="Scream at your fellow apes"
                            error={errors.body ? true:false}
                            helperText={errors.body}
                            
                            onChange={this.handleChange}
                            fullWidth/>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                className={classes.submitButton}
                disabled={loading}
              >
                Submit
                {loading && (
                  <CircularProgress
                    size={30}
                    className={classes.progressSpinner}
                  />
                )}
              </Button>
            </form>
          </DialogContent>
        </Dialog>
      </Fragment>
    );
  }
}

PostScream.propTypes = {
  postScream: PropTypes.func.isRequired,
  clearErrors: PropTypes.func.isRequired,
  UI: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  UI: state.UI
});

export default connect(
  mapStateToProps,
  { postScream, clearErrors }
)(withStyles(styles)(PostScream));