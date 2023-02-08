import React, { useEffect, useState } from 'react'
import axios from "axios";


export default function TotalPrice(props) {
    const [price, setPrice] = useState("")
    const AuthStr = localStorage.getItem('FBIdToken');

 
    useEffect(() => {
        async function fetchData(){
         axios.get('/posts',{ headers: { Authorization: AuthStr } } )
        .then(res=>{
          for (var i = 0; i < res.data.length; i++) {
                if(props.postId==res.data[i].postId){
                 setPrice(res.data[i].price);
                  break;
                }
              
          
            
          }
    
        })
    }
    fetchData();

    }, [0])
  
    return (
        <div>
            {price}
        </div>
    )
}
