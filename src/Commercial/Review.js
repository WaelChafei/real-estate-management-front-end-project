import React,{ useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import { useReactToPrint } from 'react-to-print';
import Button from "components/CustomButtons/Button.js";
import PrintIcon from '@material-ui/icons/Print';
import { Divider } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
  listItem: {
    padding: theme.spacing(1, 0),
  },
  total: {
    fontWeight: 700,
  },
  title: {
    marginTop: theme.spacing(2),
  },
}));
const ref = React.createRef();
const options = {
    orientation: 'landscape',
    unit: 'in',
    format: [4,2]
};
export default function Review(props) {
  const classes = useStyles();
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  
  return (
    <React.Fragment>
     
         
    <div  ref={componentRef} >
    <table>
      <Typography variant="h6" gutterBottom>
        Account summary
      </Typography>
      <List disablePadding> <tr><td>
     <h3> Personal informations</h3>
      <br></br>
      <Grid container spacing={2}>
      
      <Grid item xs={12} sm={3}>
      firstName:
      </Grid>
      <Grid item xs={12} sm={3}>
      {props.firstName}
      </Grid>
      <Grid item xs={12} sm={3}>
      lastName:
      </Grid>
      <Grid item xs={12} sm={3}>
 {props.lastName}

      </Grid>
      <Grid item xs={12} sm={3}>
      phone
      </Grid>
      <Grid item xs={12} sm={3}>
      {props.phone}

      </Grid>
      <Grid item xs={12} sm={3}>
      cin
      </Grid>
      <Grid item xs={12} sm={3}>
      {props.cin}

      </Grid>
      <Grid item xs={12} sm={3}>
      dateCin
      </Grid>
      <Grid item xs={12} sm={3}>
      {props.dateCin}

      </Grid>
      <Grid item xs={12} sm={3}>
      Birthday
      </Grid>
      <Grid item xs={12} sm={3}>
      {props.dn}

      </Grid>
      <Grid item xs={12} sm={3}>
      email
      </Grid>
      <Grid item xs={12} sm={3}>
      {props.email}

      </Grid>
      <Grid item xs={12} sm={3}>
      job
      </Grid>
      <Grid item xs={12} sm={3}>
      {props.job}

      </Grid>
     


</Grid></td></tr>
<tr><td>
<h3>Payment informations</h3>

   <Grid container spacing={2}>
   <Grid item xs={12} sm={3}>
  Type
      </Grid>
      <Grid item xs={12} sm={3}>
      {props.type}

      </Grid>
      <Grid item xs={12} sm={3}>
      Surface
      </Grid>
      <Grid item xs={12} sm={3}>
      {props.surface} m²

      </Grid>
      <Grid item xs={12} sm={3}>
      Price
      </Grid>
      <Grid item xs={12} sm={3}>
      {props.price} TND

      </Grid>
      <Grid item xs={12} sm={3}>
      MethodPayment:
      </Grid>
      <Grid item xs={12} sm={3}>
 {props.methodPayment}

      </Grid>
      <Grid item xs={12} sm={3}>
         MantantAvance
      </Grid>
      <Grid item xs={12} sm={3}>
      {props.mantantAvance}

      </Grid>
      <Grid item xs={12} sm={3}>
      ModePayment
      </Grid>
      <Grid item xs={12} sm={3}>
      {props.modePayment}

      </Grid>
      <Grid item xs={12} sm={3}>
      NombreMois
      </Grid>
      <Grid item xs={12} sm={3}>
      {props.nombreMois}

      </Grid>
      <Grid item xs={12} sm={3}>
      PaymentDay
      </Grid>
      <Grid item xs={12} sm={3}>
      {props.paymentDay}

      </Grid>
  
      <Grid item xs={12} sm={3}>
      Status
      </Grid>
      <Grid item xs={12} sm={3}>
      {props.status}

      </Grid>
     

          








        </Grid>
        </td></tr>
      </List>
      </table>

      </div>

      <Button onClick={handlePrint}><PrintIcon/> Print this out!</Button>

     </React.Fragment>
  );
}