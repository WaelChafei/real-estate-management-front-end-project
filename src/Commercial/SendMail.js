import React, { useEffect } from 'react'
import axios from 'axios';
import Button from "components/CustomButtons/Button.js";
import SendIcon from '@material-ui/icons/Send';
export default function SendMail(props) {
    const AuthStr = localStorage.getItem('FBIdToken');

    const userMail={email:props.email};
    
    let handleMail=() =>{
         axios.post('/commercial/user/sendMail',userMail,{ headers: { Authorization: AuthStr } })
        .then(res=>{
            console.log(res);
        }).catch(err=>console.log(err));

      
        const updateUserById ={
            status : "mailed"
         
        
         }
        
            axios.patch(`/post/interest/${props.interest}`,updateUserById,{ headers: { Authorization: AuthStr } })
              
               .then(res =>{
                 console.log(res.data);
                })
               .catch(err=>{  console.log(err);
                 
               })


    }
    return (
        <Button variant="contained"onClick={handleMail} style={{backgroundColor:'#4cafa2' ,borderRadius:25}} fullWidth>
     <SendIcon/>
            Send Mail
        </Button>
    )
}
