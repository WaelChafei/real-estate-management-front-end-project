import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
 // Redux stuff
import { connect } from 'react-redux';
import { editUserDetails } from '/Users/Lenovo/Downloads/material-dashboard-react-master/material-dashboard-react-master/src/GP/redux/actions/dataActions';
// MUI Stuff
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
// Icons
import EditIcon from '@material-ui/icons/Edit';
import InputLabel from "@material-ui/core/InputLabel";

import FormControl from '@material-ui/core/FormControl';

import Select from '@material-ui/core/Select';

const styles = () => ({
  
  button: {
    float: 'right'
  }
});

class EditDetails extends Component {
  state = {
    employeeFullName: '',
    email: '',
    phone: '',
    officeCity: '',
    role: '',
    status:'',
    password:'',

    open: false
  };
  mapUserDetailsToState = (credentials) => {
    this.setState({
 
    });
  };
  handleOpen = () => {
    this.setState({ open: true });
    this.mapUserDetailsToState(this.props.credentials);
  };
  handleClose = () => {
    this.setState({ open: false });
  };
  componentDidMount() {
    const { credentials } = this.props;
    this.mapUserDetailsToState(credentials);
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  handleSubmit = () => {
    const userDetails = {
        employeeFullName: this.state.employeeFullName,
      email: this.state.email,
      phone: this.state.phone,
      officeCity: this.state.officeCity,
      role: this.state.role,
      password: this.state.password,
      status:this.state.status
    };
    this.props.editUserDetails(userDetails,this.props.employeeId);
    this.handleClose();
  };
  render() {
    const { classes } = this.props;
    return (
      <Fragment>
        <Button
          tip="Edit Details"
          onClick={this.handleOpen}
          btnClassName={classes.button}
        >
          <EditIcon color="primary" />
        </Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          fullWidth
          maxWidth="sm"
        >
          <DialogTitle>Edit your details</DialogTitle>
          <DialogContent>
            <form>
              <TextField
                name="employeeFullName"
                type="text"
                label="employeeFullName"
                multiline
       
                placeholder="New full name"
                className={classes.textField}
                value={this.state.employeeFullName}
                onChange={this.handleChange}
                fullWidth
              />
              <TextField
                name="email"
                type="text"
                label="email"
                placeholder="New email"
                className={classes.textField}
                value={this.state.email}
                onChange={this.handleChange}
                fullWidth
              />
              <TextField
                name="phone"
                type="text"
                label="phone"
                placeholder="New phone number"
                className={classes.textField}
                value={this.state.phone}
                onChange={this.handleChange}
                fullWidth
              />
               <TextField
                name="officeCity"
                type="text"
                label="officeCity"
                placeholder="New location"
                className={classes.textField}
                value={this.state.officeCity}
                onChange={this.handleChange}
                fullWidth
              /> 
          
                <FormControl className={classes.formControl}      fullWidth>
        <InputLabel htmlFor="grouped-native-select" >Role</InputLabel>
        <Select native defaultValue="" id="grouped-native-select" name="role" onChange={this.handleChange}>
          <option aria-label="None" value="" />
             <option value="gp">Post Manager</option>
            <option value="admin">Admin</option>
            <option value="paym">Payment agent</option>
            <option value="comm">Commercial</option>

         </Select>
      </FormControl>
              <TextField
              name="status"
              type="text"
              label="status"
              placeholder="status"
              className={classes.textField}
              value={this.state.status}
              onChange={this.handleChange}
              fullWidth
            />
              <TextField
              name="password"
              type="password"
              label="password"
              placeholder="password"
              className={classes.textField}
              value={this.state.password}
              onChange={this.handleChange}
              fullWidth
            />
            </form>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleSubmit} color="primary">
              Save
            </Button>
          </DialogActions>
        </Dialog>
      </Fragment>
    );
  }
}

EditDetails.propTypes = {
  editUserDetails: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  credentials: state.user.credentials
});

export default connect(
  mapStateToProps,
  { editUserDetails }
)(withStyles(styles)(EditDetails));