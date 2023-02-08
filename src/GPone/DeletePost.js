import React, { Component,Fragment } from 'react'
import { Button,  withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import DeleteOutline from '@material-ui/icons/DeleteOutline';

import {connect} from 'react-redux';
import {deleteScreamo} from '/Users/Lenovo/Downloads/material-dashboard-react-master/material-dashboard-react-master/src/GP/redux/actions/dataActions';
const styles ={

}
 class DeletePost extends Component {
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
    deleteScreamo=()=>{
        this.props.deleteScreamo(this.props.postId);
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
                        <Button onClick={this.deleteScreamo} color="secondary">
                            Delete
                        </Button>
                    </DialogActions>
                </Dialog>
            </Fragment>
        )
    }
}
DeletePost.propTypes={
    deleteScreamo: PropTypes.func.isRequired,
    postId: PropTypes.string.isRequired
}

export default connect(null, {deleteScreamo})(withStyles(styles)(DeletePost));
