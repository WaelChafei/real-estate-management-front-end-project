import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
 
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
 
import  { useState } from 'react';
 
import axios from "axios";
 
 import  { useEffect } from 'react';
import {   Divider, Grid } from '@material-ui/core';
import styles from "assets/jss/material-dashboard-react/components/tableStyle.js";
 
import SelectSubmit from "./SelectSubmit";
import jwtDecode from 'jwt-decode';
 
import StepDeal from "./StepDeal"
import DataSkeleton from "./DataSkeleton";
 
import PlaylistAddCheckIcon from '@material-ui/icons/PlaylistAddCheck';
import Tabletri from "./tabletri";
import { DataGrid } from '@material-ui/data-grid';

 


const useStyles = makeStyles(styles);


function TableList() {
  const [screams, setScreams] = useState("");
  const [posts, setPosts] = useState("");
  const [pric, setPric] = useState("");
  const [surfac, setSurfac] = useState("");
  const [typ, setTyp] = useState("");
  const [total, setTotal] = useState("");

  //const [Statut, setStatut] = useState("");
  const [employeeId, setEmployeeId] = useState("");
  const [postId, setPostId] = useState([]);
  const [doneDeal, setdoneDeal] = useState([]);
  const [interestId, setinterestId] = useState([]);
  const [status, setstatus] = useState([]);
  const [userCin, setuserCin] = useState([]);
  const AuthStr = localStorage.getItem('FBIdToken');
   const token=localStorage.FBIdToken;

   const decodedToken=token? jwtDecode(token) :"nothing";
   const uid=decodedToken.user_id.toString();
    let tab=[];
    let emp=[];
    let post=[];
    let postid=[];
    let price=[];
    let surface=[];
    let type=[];
    let pst=[];
    let stats=[];
    let interId=[];
    let cin=[];
    let doneD=[];

 let _isMounted= true;
 const classes = useStyles();
let cab=[];
const abortController= new AbortController();
const signal = abortController.signal;
const [count, setCount] = useState(0);
   useEffect(() => {
     
    async function fetchData(){
  await   axios.get('/employeeData',{ headers: { Authorization: AuthStr } })
  .then(res=>{
    for (var i = 0; i < res.data.length; i++) {
        if(res.data[i].employeeId==uid){
            setEmployeeId(res.data[i].employeeDataId);
            console.log("emp",res.data[i].employeeId);
            console.log("emp",uid);
            emp.push(res.data[i].employeeDataId)
            break
        }
     
    }
    console.log("emp",emp);

  })
   await axios.get('/getInterest',{ headers: { Authorization: AuthStr } })
  .then(res=>{
    for (var i = 0; i < res.data.length; i++) {
      if(res.data[i].employeeId==emp[0]){
         tab.push(res.data[i].userId);
        
        pst.push(res.data[i].postId);
        interId.push(res.data[i].interestId)
        stats.push(res.data[i].status)

    

      }
    
  } 


  })
  setstatus(stats);
  setinterestId(interId);
 



   axios.get('/posts',{ headers: { Authorization: AuthStr } })
  .then(ras=>{
   
      for(var k=0;k<pst.length;k++){
        for (var j = 0; j <ras.data.length; j++) {
     if(pst[k]==ras.data[j].postId){
      post.push(ras.data[j].title);
      postid.push(ras.data[j].postId);
      price.push(ras.data[j].price);
      surface.push(ras.data[j].surface);
      type.push(ras.data[j].type);
      break
     }
    }
    }
    setPosts(post);
    setPostId(postid);
    setPric(price);
    setSurfac(surface);
    setTyp(type);

  })

   await axios.get('/user',{ headers: { Authorization: AuthStr } })
     .then(res =>{
      for (var i = 0; i < res.data.length; i++) {
        for (var j = 0; j < tab.length; j++) {
          if(res.data[i].userDataId==tab[j]){
            cab.push(res.data[i])
            cin.push(res.data[i].cin);
      
          }
        }
      }
      setuserCin(cin);
      setScreams(cab)
      setTotal(cab.length);
     })
     .catch(err => console.log(err));
      
 
     axios.get('/commercial/deal',{ headers: { Authorization: AuthStr } })
     .then(res=>{
      console.log("res.data",res.data);

      for (var k=0;k<cin.length;k++) {
         for(var i = 0; i < res.data.length; i++){
          console.log("res.data[i].userCin",res.data[i].userCin);
          console.log("cin[k]",cin[k]);


          console.log("data[i].postId",res.data[i].postId);
          console.log("postid[k]",postid[k]);
           if((res.data[i].userCin==cin[k])&&(res.data[i].postId==postid[k])){
       

            doneD.push("true");
            console.log("d5aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaal");
            break;
           }
         
          }
          if(i==res.data.length){
          doneD.push("false");
          }
      }
      doneD.splice(doneD.length-1,1);
      
setdoneDeal(doneD);
console.log("doneD",doneD);
     }).catch(err => console.log(err));
 

 
    }
    fetchData();
  
    return function cleanup () {
      abortController.abort(); // not good
  }
  },[count]
 );
 

 const recentScreamsMarkup = screams ?(
 
   screams.map((scream,index) =>
     
     
   <div key={index}>
     <Grid container spacing={1} style={{ marginLeft:"5px",fontFamily:"Roboto", fontSize:"15px",height:"20px"}}>
      
    <PlaylistAddCheckIcon color="primary" style={{marginTop:"4px"}} />  <Grid item xs={1} md={2} style={{color:"#21292F",fontWeight:"bold" }} >{scream.firstName} {scream.lastName}</Grid>
 
           <Grid item xs={2} md={2} style={{color:"gray"}} >{posts[index]}</Grid>
           <Grid item xs={1} md={1}  style={{color:"gray"}}>{scream.phone}</Grid>
           <Grid item xs={1} md={2}  style={{color:"gray"}}>{scream.email}</Grid>
       

 
           <Grid item xs={1} md={2} style={{marginTop:'-25px'}}  >
             <SelectSubmit   email={scream.email} interest={interestId[index]} stat={status[index]} />
         </Grid>
     
 
      {scream.dn==""?(
         <Grid item xs={2} md={2}     >
    <Button variant="contained"  disabled style={{backgroundColor:'#5CACE0',marginTop:"-10px" ,borderRadius:25}} >
      Waiting for update
  </Button>
  </Grid>
 
      ):(
        <Grid item xs={2} md={2} style={{marginTop:'-10px'}}    >
        <StepDeal firstName={scream.firstName} lastName={scream.lastName} phone={scream.phone} cin={scream.cin}
         dn={scream.dn} email={scream.email} job={scream.job} dateCin={scream.dateCin} price={pric[index]} surface={surfac[index]}
         type={typ[index]} postId={postId[index]}/>
     </Grid>
   

      )}
    
    </Grid>
    <br></br>
        
    <Divider/>
    <br></br>
    </div>
       )
 ):(
   <div  ><DataSkeleton/> </div>
 );
 return ( <div style={{width:"98%"}}>
   <br></br>
     <h2 className={classes.cardTitleBlack} style={{fontFamily:"Arial",marginBottom:"15px",color:"#595f7a",marginTop:"10px"}} >Opportunities :</h2> 
    <div style={{borderBottom:"4px solid",width:"22%",textAlign:"center",borderColor:"#5E7FFF",fontWeight:"bold",color:"#595f7a"}}>Here you can find all the opportunities</div>
 
 

 
  
       <div style={{width:"100%"}}>
 
 
 
    {screams ?( <Tabletri screams={screams} posts={posts} postId={postId} pric={pric} surfac={surfac} typ={typ} interestId={interestId}
status={status} doneDeal={doneDeal} />):   <div style={{marginTop:"-20px"}}><DataSkeleton/> </div>
}
       </div>
  
      
    </div>
 );
}


export default function UserProfile() {
     
    

 

  const classes = useStyles();
  return (
    <div style={{width:'100%',height:"100vh",backgroundColor:"#ffff",paddingLeft:"20px"}} >
        <br></br>
        <br></br>
       
      <GridContainer>
      <GridItem xs={12} sm={12} md={12}  >
      <TableList/>

</GridItem>
    

      </GridContainer>
    </div>
  );
}







 





 