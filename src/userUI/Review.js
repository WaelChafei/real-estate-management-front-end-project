import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';

const products = [
  { name: 'Product 1', desc: 'A nice thing', price: '$9.99' },
  { name: 'Product 2', desc: 'Another thing', price: '$3.45' },
  { name: 'Product 3', desc: 'Something else', price: '$6.51' },
  { name: 'Product 4', desc: 'Best thing of all', price: '$14.11' },
  { name: 'Shipping', desc: '', price: 'Free' },
];
const addresses = ['1 Material-UI Drive', 'Reactville', 'Anytown', '99999', 'USA'];
const payments = [
  { name: 'Card type', detail: 'Visa' },
  { name: 'Card holder', detail: 'Mr John Smith' },
  { name: 'Card number', detail: 'xxxx-xxxx-xxxx-1234' },
  { name: 'Expiry date', detail: '04/2024' },
];

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

export default function Review(props) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Account summary
      </Typography>
      <List disablePadding>
      <Grid container spacing={2}>
       
      <Grid item xs={12} sm={6}>
      CIN: 
      </Grid>
      <Grid item xs={12} sm={6}>
      {props.cin}
      </Grid>
      <Grid item xs={12} sm={6}>
      Date of CIN:
      </Grid>
      <Grid item xs={12} sm={6}>
 {props.dateCin}

      </Grid>
      <Grid item xs={12} sm={6}>
      Birthday:
      </Grid>
      <Grid item xs={12} sm={6}>
      {props.dn}

      </Grid>
      <Grid item xs={12} sm={6}>
      Job :
      </Grid>
      <Grid item xs={12} sm={6}>
      {props.job}

      </Grid>
      <Grid item xs={12} sm={6}>
      Adresse:
      </Grid>
      <Grid item xs={12} sm={6}>
      {props.adress}

      </Grid>
      <Grid item xs={12} sm={6}>
      City:
      </Grid>
      <Grid item xs={12} sm={6}>
      {props.city}

      </Grid>
      <Grid item xs={12} sm={6}>
      Postal Code
      </Grid>
      <Grid item xs={12} sm={6}>
      {props.postalCode}

      </Grid>
      <Grid item xs={12} sm={6}>
      Buyer 2
      </Grid>
      <Grid item xs={12} sm={6}>
      {props.buyer2}

      </Grid>
      <Grid item xs={12} sm={6}>
      Cin Of Buyer 2
      </Grid>
      <Grid item xs={12} sm={6}>
      {props.cin2}

      </Grid>
      <Grid item xs={12} sm={6}>
      Buyer 3
      </Grid>
      <Grid item xs={12} sm={6}>
      {props.buyer3}

      </Grid>
      <Grid item xs={12} sm={6}>
      Cin of buyer 3
      </Grid>
      <Grid item xs={12} sm={6}>
      {props.cin3}

      </Grid>
    










        </Grid>
      
      </List>
     </React.Fragment>
  );
}