import React from 'react'
import Alert from '@material-ui/lab/Alert';
import axios from "axios";
import {useState} from 'react';
   import  { useEffect } from 'react';
export default function Submit(props) {
    const updateUserById ={
        cin:props.cin
        ,dateCin:props.dateCin
        ,dn:props.dn
        ,job:props.job,
        email:props.email ,
         firstName:props.firstName ,
          lastName:props.lastName , 
          phone:props.phone ,
           userId:props.userId ,
        userDataId:props.val,
    
    
    
    
    
      adresse:props.adress
        ,city:props.city
        ,codePostal:props.postalCode
  
   }   
   const buyersData={
       buyer2:props.buyer2
        ,buyerCin2:props.cin2
        ,buyer3:props.buyer3
        ,buyerCin3:props.cin3,
        postId:props.postId,
        userId:props.userId
  
   }
   console.log(updateUserById);
   const AuthStr = localStorage.getItem('FBIdToken');

const [count, setCount] = useState(0);
 useEffect(() => {

        async function fetchData(){
    axios.patch(`/user/${props.val}`,updateUserById,{ headers: { Authorization: AuthStr } })

 .then(res =>{
   console.log(res.data);
  })
 .catch(err=>{  console.log(err);
   
 });

 axios.post(`/user/buyerGroup/`,buyersData,{ headers: { Authorization: AuthStr } })

 .then(res =>{
   console.log(res.data);
  })
 .catch(err=>{  console.log(err);
   
 })


}
fetchData();
 }, [])

    return (
        <div>
         </div>
    )
}
