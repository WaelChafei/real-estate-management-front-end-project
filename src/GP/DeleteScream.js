import React, { Component,Fragment } from 'react'
import { Button,  withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import DeleteOutline from '@material-ui/icons/DeleteOutline';

import {connect} from 'react-redux';
import {deleteScream} from './redux/actions/dataActions';
const styles ={

}
 class DeleteScream extends Component {
     state={
         open : false
     };
     handleOpen=()=>{
        this.setState({
            open:true
        })
    }  
    handleClose=()=>{
        this.setState({
            open:false
        })
    }
    deleteScream=()=>{
        this.props.deleteScream(this.props.screamId);
        this.setState({open:false});
    }
    render() {
        return (
            <Fragment>
                <Button tip="Delete Scream"
                onClick={this.handleOpen}
                >
                    <DeleteOutline color="secondary"/>
                </Button>
                <Dialog open={this.state.open}
                onClose={this.handleClose}
                fullWidth
                maxWidth='sm'>
                    <DialogTitle>
                        are u SURE ?
                    </DialogTitle>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary">
                            cancel
                        </Button>
                        <Button onClick={this.deleteScream} color="secondary">
                            Delete
                        </Button>
                    </DialogActions>
                </Dialog>
            </Fragment>
        )
    }
}
DeleteScream.propTypes={
    deleteScream: PropTypes.func.isRequired,
    screamId: PropTypes.string.isRequired
}

export default connect(null, {deleteScream})(withStyles(styles)(DeleteScream));
