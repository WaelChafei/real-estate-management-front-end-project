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

export default function ImportImage(props){
const [imageHandler, setimageHandler] = useState(false)
const [imagePic, setimagePic] = useState("")
const useStyles = makeStyles(styles);

 const classes = useStyles();
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

console.log("props.addPostId",props.addPostId);

axios.patch(`/post/pictureLeft/${props.addPostId}`,formData)
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

return(
    <div style={{padding:"50px"}}>
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
<GridItem> <div style={{marginLeft:"-20px",borderRadius:5}}> <img src={imagePic} width="260px" height="300px" style={{borderRadius:5}} /> </div></GridItem>
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



</div>  </Button>  </label> </div>):(  <GridItem><div style={{marginLeft:"-20px",borderRadius:5}}> <img src={imagePic2} width="260px" height="300px" style={{borderRadius:5}} /> </div></GridItem>
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
<GridItem> <div style={{marginLeft:"-20px",borderRadius:10}}> <img src={imagePic3}  width="260px" height="300px" style={{borderRadius:5}} /> </div></GridItem>
)}</GridItem> 
</GridContainer> </label> </div> 
)
}