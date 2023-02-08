import React, { useEffect } from 'react'
import  { useState } from 'react';
import axios from "axios";

export default function DealTitle(props) {

    const [employeeName,setemployeeName]= useState("");
    const [postTitle,setpostTitle]= useState("");
    const AuthStr = localStorage.getItem('FBIdToken');



useEffect(() => {
async function fetchData(){

 


 
    
    

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
           Deal between {props.employeeName} and you about this post : {postTitle}
            
        </div>
    )
}
