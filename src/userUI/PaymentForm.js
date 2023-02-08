import React, { useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import {useState} from 'react';
import axios from 'axios';
import Scream from "./UserPosts";
import { Button } from '@material-ui/core';

let pat=[];
let sat=[];
export default function PaymentForm(props) {
  const [postId, setpostId] = useState([]);
  const [screams, setscreams] = useState([]);
  const [selectedPost, setselectedPost] = useState("");
  const AuthStr = localStorage.getItem('FBIdToken');

useEffect(() => {
  async function fetchData(){
 await axios.get('/getInterest',{ headers: { Authorization: AuthStr } } )
  .then(res=>{
    for (var i = 0; i < res.data.length; i++) {
      if(res.data[i].userId==props.val){
        pat.push(res.data[i].postId)
      }
      
    }
    setpostId(pat);
  })

  axios.get('/posts',{ headers: { Authorization: AuthStr } } )
  .then(res=>{
    for (var i = 0; i < res.data.length; i++) {
      for (var j = 0; j < pat.length; j++) {
      if(res.data[i].postId==pat[j]){
        sat.push(res.data[i])
      }
    }
    }
    
    setscreams(sat);
  })
  }
  fetchData();


}, [0])

 
 const view= screams?(screams.map((scream,index) =>
 (selectedPost==""?(<div key={index} > <Scream key={scream.postId} scream={scream}        handleChange={value=>setselectedPost(value)}
 handleChange8={value=>props.handleChange8(value)} handleChange9={value=>props.handleChange9(value)} 
 handleChange10={value=>props.handleChange10(value)} handleChange11={value=>props.handleChange11(value)}   
 handleChange12={value=>props.handleChange12(value)}      />
 </div>):selectedPost==scream.postId?(<div key={index} > <Scream key={scream.postId} scream={scream}  
       handleChange={value=>setselectedPost(value)}
        handleChange8={value=>props.handleChange8(value)} handleChange9={value=>props.handleChange9(value)} 
 handleChange10={value=>props.handleChange10(value)} handleChange11={value=>props.handleChange11(value)}
 handleChange12={value=>props.handleChange12(value)}    

       />
 </div>):("") ))

 
 ):(<p>loadingaa..</p>)

  return (
    <React.Fragment>
    
      <Grid container spacing={3}>
        <h3><b>Select A deal to update</b></h3>
        {view} 
         
      </Grid>
    </React.Fragment>
  );
}