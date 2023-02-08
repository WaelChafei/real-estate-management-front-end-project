import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

export default function AddressForm(props) {
  let handleChange=(event)=>{
    console.log("eventi",event.target.value);
    props.handleChange(event.target.value)
   }
  let handleChange1=(event)=>{
    props.handleChange1(event.target.value)
    console.log("eventi",event.target.value);

  }

  let handleChange2=(event)=>{
    props.handleChange2(event.target.value)
    console.log("eventi",event.target.value);

  }
  let handleChange3=(event)=>{
    props.handleChange3(event.target.value)
    console.log("eventi",event.target.value);

  }
  let handleChange4=(event)=>{
    props.handleChange4(event.target.value)
    console.log("eventi",event.target.value);

  }
  let handleChange5=(event)=>{
    props.handleChange5(event.target.value)
    console.log("eventi",event.target.value);

  }
  let handleChange6=(event)=>{
    props.handleChange6(event.target.value)
    console.log("eventi",event.target.value);

  }
 
  
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        General informations
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="cin"
            name="cin"
            label="cin"
            type="number"
            aria-required="true"
            fullWidth
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}  sm={6}>
          <TextField
            required
            id="dateCin"
            name="dateCin"
            label="dateCin"
            type="date"
            value="2021-01-01"

            fullWidth
            onChange={handleChange2}

          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="job"
            name="job"
            label="job"
            fullWidth
            onChange={handleChange1}
          />
        </Grid>
   
        <Grid item xs={12}>
          <TextField
            id="dn"
            name="dn"
            label="birthday"
            value="2021-01-01"
            type="date"
            fullWidth
            onChange={handleChange3}

          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            required
            id="adress"
            name="adress"
            label="adress"
            fullWidth
            onChange={handleChange4}

          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
           id="city"
           name="city"
           label="City" 
           fullWidth 
           onChange={handleChange5}
           />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="postalCode"
            name="postalCode"
            type="number"
            label="Zip / Postal code"
            fullWidth
            onChange={handleChange6}

          />
        </Grid>
      
     
     
      </Grid>
    </React.Fragment>
  );
}