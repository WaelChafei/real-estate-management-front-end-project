import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Scream from './Posts';
import StaticProfile from './StaticProfile';
import Grid from '@material-ui/core/Grid';

import ScreamSkeleton from './ScreamSkeleton';
import ProfileSkeleton from './ProfileSkeleton';

import { connect } from 'react-redux';
import { getUserData } from './redux/actions/dataActions';

class user extends Component {
  state = {
    profile: null,
    screamIdParam: null
  };
  componentDidMount() {
    const handle = this.props.match.params.handle;
    const screamId = this.props.match.params.screamId;

    if (screamId) this.setState({ screamIdParam: screamId });
    console.log("zaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");   

    this.props.getUserData(handle);
    axios
      .get(`/user/${handle}`)
      .then((res) => {
        console.log("zaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");   
 
        this.setState({
            
          profile: res.data.user
        });
      })
      .catch((err) => console.log(err));
  }
  render() {
    const { screams, loading } = this.props.data;
    const { screamIdParam } = this.state;
    console.log("zaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");   

    const screamsMarkup = loading ? (
      <ScreamSkeleton />
    ) : screams === null ? (
      <p>No screams from this user</p>
    ) : !screamIdParam ? (
      screams.map((scream) => <Scream key={scream.screamId} scream={scream} />)
    ) : (
      screams.map((scream) => {
        if (scream.screamId !== screamIdParam)
          return <Scream key={scream.screamId} scream={scream} />;
        else return <Scream key={scream.screamId} scream={scream} openDialog />;
      })
    );
    console.log("zaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");   

    return (
      <Grid container spacing={16}>
        <Grid item sm={8} xs={12}>
          {screamsMarkup}
        </Grid>
        <Grid item sm={4} xs={12}>
          {this.state.profile === null ? (
            <ProfileSkeleton />
          ) : (
            <StaticProfile profile={this.state.profile} />
          )}
        </Grid>
      </Grid>
    );
  }
}

user.propTypes = {
  getUserData: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  data: state.data
});

export default connect(
  mapStateToProps,
  { getUserData }
)(user);