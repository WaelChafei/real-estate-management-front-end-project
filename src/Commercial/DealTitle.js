import React, { useEffect } from 'react'
import  { useState } from 'react';
import axios from "axios";

export default function DealTitle(props) {

    const [employeeName,setemployeeName]= useState("");
    const [firstName,setfirstName]= useState("");
    const [lastName,setlastName]= useState("");
    const [postTitle,setpostTitle]= useState("");
    const AuthStr = localStorage.getItem('FBIdToken');



useEffect(() => {
async function fetchData(){

 



      axios.get('/employeeData',{ headers: { Authorization: AuthStr } })
    .then(res=>{
      for (var i = 0; i < res.data.length; i++) {
          if(res.data[i].employeeDataId==props.dealEmp){
            setemployeeName(res.data[i].employeeFullName);
           
              break
          }
       
      }
 
  
    })

    
      axios.get('/user',{ headers: { Authorization: AuthStr } })
    .then(res=>{
      for (var i = 0; i < res.data.length; i++) {
          if(res.data[i].cin==props.dealCin){
            setfirstName(res.data[i].firstName);
            setlastName(res.data[i].lastName);
         console.log("res.data[i].firstName",res.data[i].firstName);
         console.log("res.data[i].lastName",res.data[i].lastName);

              break
          }
       
      }
    
  
    })

      axios.get('/posts',{ headers: { Authorization: AuthStr } })
    .then(res=>{
      for (var i = 0; i < res.data.length; i++) {
          if(res.data[i].postId==props.postId){
            setpostTitle(res.data[i].title);
          
              break
          }
       
      }
    
  
    })

 
    
    }
        fetchData();




}, [0])

    return (
        <div>
           Deal between {employeeName} and {firstName} {lastName} about this post : {postTitle}
            
        </div>
    )
}
