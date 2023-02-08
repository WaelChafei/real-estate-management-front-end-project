import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardAvatar from "components/Card/CardAvatar.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import  { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import avatar from "assets/img/faces/marc.jpg";
import axios from "axios";
import Table from "components/Table/Table.js";
import  { useEffect } from 'react';
import {   Divider, Grid } from '@material-ui/core';
import DeletePost from './DeletePost'
import Notifications from '../GP/Notifications';
import FormControl from '@material-ui/core/FormControl';
import NumberFormat from 'react-number-format';
import Select from '@material-ui/core/Select';
 import Profile from "../GP/profile"
import Checkbox from '@material-ui/core/Checkbox';
import AddIcon from '@material-ui/icons/Add';
import CommId from './CommId';
import {
    withGoogleMap,MapWithAMarker,
    withScriptjs,
    GoogleMap,
    Marker,
    InfoWindow
  } from "react-google-maps"


  var x=0;

const styles = {
    cardCategoryWhite: {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0"
    },
    cardTitleWhite: {
      color: "#FFFFFF",
      marginTop: "0px",
      minHeight: "auto",
      fontWeight: "300",
      fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
      marginBottom: "3px",
      textDecoration: "none"
    }
  };

  function NumberFormatCustom(props) {
    const { inputRef, onChange, ...other } = props;
  
    return (
      <NumberFormat
        {...other}
        getInputRef={inputRef}
        onValueChange={(values) => {
          onChange({
            target: {
              name: props.name,
              value: values.value,
            },
          });
        }}
        thousandSeparator
        isNumericString
        prefix="TND "
      />
    );
  }
  function NumberFormatCustom2(props) {
    const { inputRef, onChange, ...other } = props;
  
    return (
      <NumberFormat
        {...other}
        getInputRef={inputRef}
        onValueChange={(values) => {
          onChange({
            target: {
              name: props.name,
              value: values.value,
            },
          });
        }}
        thousandSeparator
        isNumericString
        prefix="m² "
      />
    );
  }  
export default  function Mapp(props) {
    const useStyles = makeStyles(styles);
    const [values, setValues] = useState(0);

    
    const [userEmail, setUserEmail] = useState("");
    const [img, setImg] = useState("");
  
    const [screams, setScreams] = useState("");
  
    const AuthStr = localStorage.getItem('FBIdToken');
    var [lat,setLat]=React.useState([]);
  
    var [lng,setLng]=React.useState([]);
   
    props.handleChange8(lat);
    props.handleChange9(lng);

  
    let handleChange1=(event)=>{
        props.handleChange1(event.target.value);
        console.log("title",event.target.value);

  
    }
    let handleChange2 = (event) => {
        props.handleChange2(event.target.value)
   
    };
     
    let handleChange3 = (event) => {
        props.handleChange3(event.target.value)
   
    };
  
      let handleChange4=(event)=>{
        props.handleChange4(event.target.value)
    
    };
    let handleChange5=(event)=>{
        props.handleChange5(event.target.value)
   
    }
    let handleChange6=(event)=>{
        props.handleChange6(event.target.value)
   
    }
  
    let handleChange8=(event)=>{
        props.handleChange8(event.target.value)
   
    }
   let handleChange9=(event)=>{
        props.handleChange9(event.target.value);
        console.log('event.target.value',event.target.value);
   
    }
     let  handleSubmit=(event)=>{
 
       
      
      }
 
      
   
   const[markers,setMarkers]=React.useState([]);
    const classes = useStyles();
    const MapWithAMarker= withScriptjs(withGoogleMap((props) =>
      <GoogleMap
      
      defaultZoom={12}
      defaultCenter={{ lat: 34.747847, lng: 10.766163}}
  
  
      onClick={(event)=>{
        x++;
        if (x==1){
        setMarkers(current => [...current,{
            lat:event.latLng.lat(),
            lng:event.latLng.lng(),
            time:new Date(),
  
        }])
  
        setLat(
           lat*0+event.latLng.lat()
        )
        setLng(
          lng*0+event.latLng.lng()
        )
  
      }
      }}  
      >
      
        
         <Marker  
               position={{lat: parseFloat(lat) , lng: parseFloat(lng)}}
      > </Marker>
  
  
   
          
  
     
  
      
      
    </GoogleMap>
   
  
    ));

     return (
      
      <div style={{padding:'50px'}} >
      
  
       <div>         
  
          <ul>
       
          </ul>
        <GridContainer direction={"row"} >
          <GridItem xs={12} sm={12} md={12}>
            
         
 
  
              <GridContainer>
                  <GridItem xs={12} sm={12} md={12}  >
                    <TextField
                          name="title"
                          type="text"
                          label="Title"
                          multiline
                          placeholder="Title"
                            
                          onChange={handleChange1}
                          fullWidth
  
                    />
  
                  </GridItem>
  
       
  
              
                  <GridItem xs={12} sm={12} md={12}>
                    <TextField
                              name="body"
                              type="text"
                              label="Description"
                              multiline
                              rows="3"
                              placeholder="Description"
                              className={classes.textField}
                              onChange={handleChange2}
                              fullWidth
                              prefix="$"
  
                 
                    />
                  </GridItem>
        
      
  
                <GridItem xs={12} sm={12} md={6}>
                <TextField
                     label="Price"
                     fullWidth
                     value={values.numberformat}
                     onChange={handleChange3}
                     name="Price"
                     id="Price"
                     InputProps={{
                      inputComponent: NumberFormatCustom,
                      }}
               />
        </GridItem>
        <GridItem xs={12} sm={12} md={6}>
              <TextField
              fullWidth
                     label="Surface"
                     value={values.numberformat2}
                     onChange={handleChange4}
                     name="surface"
                     id="Surface"
                     InputProps={{
                      inputComponent: NumberFormatCustom2,
                      }}
               />
               
                 </GridItem>
          
                 <br></br>
                 <br></br>          <br></br>
                 <br></br>
                 <GridItem xs={12} sm={12} md={6}>
                     <FormControl className={classes.formControl} fullWidth>
                       <InputLabel htmlFor="grouped-native-select">Type  </InputLabel>
                        <Select native defaultValue="" id="grouped-native-select" fullWidth name="type" onChange={handleChange5}  >
                          <option aria-label="None" value="" />
                             <option value="house">House</option>
                            <option value="land">Land</option>
                            <option value="office">Office</option>
                            <option value="appartement">Appartement</option>
  
                         </Select>
                     </FormControl>
                     </GridItem>
               
                     <GridItem xs={12} sm={12} md={6}>
              <TextField
                     label="adresse"
                     value={values.numberformat2}
                     onChange={handleChange6}
                     name="adresse"
                     id="adresse"
                   fullWidth
               />
               
               
                 </GridItem>
                 <GridItem xs={12} sm={12} md={4}>
        
        <CommId handleChange7={value=>props.handleChange7(value)}/>

        </GridItem>
  
                 </GridContainer>
                 <br></br>
                <br></br>
   
        
               <GridItem xs={12} sm={12} md={12}>
  <div style={{width:"100%",height:"400px"}}>
   
          <MapWithAMarker
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{ height: `100%` }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                    rows="6"
                    googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAPxPltISRL44yu-j-j-pMt92tPlJyPhCU&v=3.exp&libraries=geometry,drawing,places"
                    /> 
    
                    </div>
                    </GridItem>
   
            
          
  
  
  
  
  
  
      
  
          </GridItem>
  </GridContainer></div>
<div style={{display:"none"}}> <TextField name="lat" name='lat' id="lat" value={lat}      onChange={handleChange8} type="text" readonly />
      <TextField name="lng" id="lng" value={lng}     onChange={handleChange9}  type="text" readonly /></div> 

  
    
 
     </div>
      
    );
    
  }
  