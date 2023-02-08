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
import Table from 'react-bootstrap/Table'
import 'bootstrap/dist/css/bootstrap.min.css';

 import {
  withGoogleMap,MapWithAMarker,
  withScriptjs,
  GoogleMap,
  Marker,
  InfoWindow
} from "react-google-maps"
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import Search from './Search';
import CommId from "./CommId";
import StepsPost from "./StepsPost";
import { toDate } from "date-fns";
import DataSkeleton from "Commercial/DataSkeleton";
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

const useStyles = makeStyles(styles);
function TableList() {
    const [screams, setScreams] = useState(null);
   const AuthStr = localStorage.getItem('FBIdToken');

   const classes = useStyles();
   useEffect(() => {
   async function fetchData(){
   await  axios.get('/posts')
       .then(res =>{
       
         setScreams(res.data)
       })
       .catch(err => console.log(err));
      }
      fetchData();
   },[]);
    const view = screams ?(
     screams.map(scream =>  
       
      <tr  >

<td >  {scream.title}    </td>
<td >  {scream.body}    </td>
<td >   {scream.type}    </td>
<td > {scream.surface}  m²  </td>
<td > {scream.price} DT   </td>
<td > {scream.commercialId}   </td>

<td >  <DeletePost postId={scream.postId} />    </td>
      
      </tr>
          
         
       
       
        )
   ):(
    <tr> <td colSpan={7}><DataSkeleton/> </td> </tr>   );
   return (
     <GridContainer>
       
       <GridItem xs={12} sm={12} md={12}>
         <Card>
           <CardHeader color="primary">
             <h4 className={classes.cardTitleWhite}>Posts list</h4>
             <p className={classes.cardCategoryWhite}>
               Here is all the posts
             </p>
           </CardHeader>
           <CardBody>
    
<Table striped bordered hover md={12} >
  <thead>
    <tr>
      <th>Title</th>
      <th>Description</th>
      <th>Type</th>
      <th>Surface</th>
      <th>Price</th>
      <th>Commercial ID</th>
      <th>Delete</th>
    </tr>
  </thead>
  <tbody>
    {view}
  </tbody>
</Table> 
           </CardBody>
         </Card>
       </GridItem>
        
     </GridContainer>
   );
  }
  
 


var x=0;

const MapWrapped = withScriptjs(withGoogleMap(Mapp));

  function UserProfile() {
    
  
  
  const classes = useStyles();
  return (
    <div>         
     <br></br>    <br></br>    <br></br>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
        <CardBody>

           <GridContainer >

               <GridItem xs={12} sm={12} md={12} >
               <div style={{ width: "70vw", height: "70vh" }}> 

                  <MapWithAMarker
                  loadingElement={<div style={{ height: `100%` }} />}
                  containerElement={<div style={{ height: `100%` }} />}
                  mapElement={<div style={{ height: `100%` }} />}
                  googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAPxPltISRL44yu-j-j-pMt92tPlJyPhCU&v=3.exp&libraries=geometry,drawing,places"
                  /></div>

               </GridItem  >
              </GridContainer>
             </CardBody>
            
          </Card>
        </GridItem>
       
     </GridContainer>
      
    </div>
  );
}
export default  function Mapp() {
    
  const [body, setBody] = useState("");

  const [adresse, setAdresse] = useState("");

  const [commercialId, setCommercialId] = useState("");

  const [title, setTitle] = useState(0);

  const [values, setValues] = useState(0);

  const [surface, setSurface] = useState(0);

  const [type, setType] = useState(0);
  
  const [userEmail, setUserEmail] = useState("");
 

  const [screams, setScreams] = useState("");

  const AuthStr = localStorage.getItem('FBIdToken');
  var [lat,setLat]=React.useState([]);

  var [lng,setLng]=React.useState([]);
 
  let handleChange3 = (event) => {
    setValues( event.target.value);
  };

  let handleChange8 = (event) => {
    setAdresse(event.target.value);
 
  };
   
  let handleChange4 = (event) => {
    setSurface(event.target.value);
 
  };

    let handleChange=(event)=>{
     setBody(event.target.value)}
  let handleChange2=(event)=>{
    setTitle(event.target.value)
 
  }
  let handleChange5=(event)=>{
    setType(event.target.value)
 
  }
  let handleChange9=(event)=>{
    setUserEmail(event.target.value)
 
  }
 
 
   let  handleSubmit=(event)=>{
      event.preventDefault();
        const userdata ={
            body : body,
            title :  title,
            surface: surface,
            type : type,
            commercialId:commercialId,
            adresse:adresse,
            lat:lat,
            lng:lng,
            userEmail:userEmail,
           
            price: values
       }
        const AuthStr = localStorage.getItem('FBIdToken');
       axios.post('/addPost',userdata,{ headers: { Authorization: AuthStr } } )
    
     .then(res =>{
       console.log(res.data);
      })
     .catch(err=>{  console.log(err);
       
     })
     
    
    }
    const [imageHandler, setimageHandler] = useState(false)
    const [imagePic, setimagePic] = useState("")

    const [imageHandler2, setimageHandler2] = useState(false)
    const [imagePic2, setimagePic2] = useState("")

    const [imageHandler3, setimageHandler3] = useState(false)
    const [imagePic3, setimagePic3] = useState("")

    let handleImage=(event)=>{
  const image = event.target.files[0];
  const formData = new FormData();
  setimageHandler(true);
  setimagePic(URL.createObjectURL(event.target.files[0]));
  console.log("image",event.target.files[0]);
  formData.append('image', image ,image.name);
 
  
  axios.patch('/post/pictureLeft/1iMYxW3wRXG3uG6JcUGb',formData)
    .then(res=>{
      console.log(res.data);
    })
   .catch(err=>{  console.log(err)});
 }

 let handleImage2=(event)=>{
  const image2 = event.target.files[0];
  const formData2 = new FormData();
  setimageHandler2(true);
  setimagePic2(URL.createObjectURL(event.target.files[0]));
  console.log("image",imagePic2);
  formData2.append('image', image2 ,image2.name);
 
  
  axios.patch('/post/pictureMid/1iMYxW3wRXG3uG6JcUGb',formData2)
    .then(res=>{
      console.log(res.data);
    })
   .catch(err=>{  console.log(err)});
 }

 let handleImage3=(event)=>{
  const image3 = event.target.files[0];
  const formData3 = new FormData();
  setimageHandler3(true);
  setimagePic3(URL.createObjectURL(event.target.files[0]));
  console.log("image",event.target.files[0]);
  formData3.append('image', image3 ,image3.name);
 
  
  axios.patch('/post/pictureRight/1iMYxW3wRXG3uG6JcUGb',formData3)
    .then(res=>{
      console.log(res.data);
    })
   .catch(err=>{  console.log(err)});
 }


    
 
 const[markers,setMarkers]=React.useState([]);

  const classes = useStyles();
  const MapWithAMarker= withScriptjs(withGoogleMap(props =>
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
    
    <div  >
    {/*

     <div>         
     <br></br>
        <ul>
     
        </ul>
      <GridContainer direction={"row"} >
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Add new Post</h4> 
              <p className={classes.cardCategoryWhite}>Complete post informations</p>
            </CardHeader>
            <CardBody>

            <GridContainer>
                <GridItem xs={12} sm={12} md={6}  >
                  <TextField
                        name="title"
                        type="text"
                        label="Title"
                        multiline
                        placeholder="Title"
                          
                        onChange={handleChange2}
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
                            onChange={handleChange}
                            fullWidth
                            prefix="$"

               
                  />
                </GridItem>
      
        
                <br></br>
                <br></br>

                <GridItem xs={12} sm={12} md={12}>
           
                </GridItem>
           

              <br></br>
              <br></br>
              <br></br>

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
               <GridItem xs={12} sm={12} md={4}>
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
             
                   <GridItem xs={12} sm={12} md={4}>
            <TextField
                   label="adresse"
                   value={values.numberformat2}
                   onChange={handleChange8}
                   name="adresse"
                   id="adresse"
                 fullWidth
             />
             
             
               </GridItem>
               <GridItem xs={12} sm={12} md={4}>
        
               <CommId handleChange7={value=>setCommercialId(value)}/>

               </GridItem>

               </GridContainer>
               <br></br>
              <br></br>
      <label htmlFor="contained-button-file"> Upload image : <br></br> 
  
            <GridContainer spacing={1}>
            <GridItem>
            {imageHandler==false?(
              <div>
            <input
accept="image/*"
className={classes.input}
id="contained-button-file"

type="file"
onChange={handleImage}
 style={{display:"none"}}
/>
<label htmlFor="contained-button-file">
<Button variant="contained" color="primary" component="span">
            
<div style={{height:"250px", width:"200px" }} >

  <div style={{paddingTop:"50%"}}> <AddIcon fontSize="large" /> </div>


 </div>    </Button>  </label> </div> 
  ):(
    <GridItem> <div style={{marginLeft:"-20px",borderRadius:5}}> <img src={imagePic} width="260px" height="300px"/> </div></GridItem>
   )}</GridItem> 


 <GridItem> 
  

{imagePic2==""?(    <div>
            <input
            accept="image/*"
            className={classes.input}
            id="contained-button-file2"
            
            type="file"
            onChange={handleImage2}
             style={{display:"none"}}
            />
            
  <label htmlFor="contained-button-file2">
  <Button variant="contained" color="primary" component="span">
 <div style={{height:"250px", width:"200px" }} >

  <div style={{paddingTop:"50%"}}> <AddIcon fontSize="large" /> </div>
 


 </div>  </Button>  </label> </div>):(  <GridItem><div style={{marginLeft:"-20px",borderRadius:5}}> <img src={imagePic2} width="260px" height="300px"/> </div></GridItem>
)}     </GridItem> 
 
 
 <GridItem>
 {imageHandler3==false?(
   <div>
            <input
accept="image/*"
className={classes.input}
id="contained-button-file3"

type="file"
onChange={handleImage3}
 style={{display:"none"}}
/>
<label htmlFor="contained-button-file3">
<Button variant="contained" color="primary" component="span">
            
<div style={{height:"250px", width:"200px" }} >

  <div style={{paddingTop:"50%"}}> <AddIcon fontSize="large" /> </div>


 </div>    </Button>  </label> </div> 
  ):(
    <GridItem> <div style={{marginLeft:"-20px",borderRadius:10}}> <img src={imagePic3}  width="260px" height="300px"/> </div></GridItem>
   )}</GridItem> 



</GridContainer>
      </label>
             </CardBody>
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
     <TextField name="lat" name='lat' id="lat" value={lat}  type="text" readonly />
    <TextField name="lng" id="lng" value={lng}  type="text" readonly />
          
        





 
            <CardFooter>

              <Button color="primary" onClick={handleSubmit}>Add post</Button>

            </CardFooter>

          </Card>

        </GridItem>
</GridContainer></div>
  */}

<StepsPost/>
 <TableList/>

   </div>
    
  );
  
}

 