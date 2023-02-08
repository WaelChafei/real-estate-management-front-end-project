import React from 'react'
import  { useState } from 'react';
import axios from "axios";
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import  { useEffect } from 'react';


export default function SelectSubmit(props) {
    const [status, setStatus] = useState("");
    const [val, setVal] = useState("");
    const [def, setDef] = useState(["interested"]);

 
    const AuthStr = localStorage.getItem('FBIdToken');
        let dab=[];
        useEffect(() => {
          async function fetchData(){
         await axios.get('/user',{ headers: { Authorization: AuthStr } })
          .then(res => {
        
            for(var i=0 ; i< res.data.length;i++){
               if(res.data[i].email==props.email){
                   dab.push(res.data[i].status);
               

                   break;
           }
        
            }
            setDef(dab);
          })
          await axios.get('/user',{ headers: { Authorization: AuthStr } })
          .then(res => {
        
            for(var i=0 ; i< res.data.length;i++){
               if(res.data[i].email==props.email){
                   setVal(res.data[i].userDataId);
                   break;
           }
            }
          })}
          fetchData();
        }, [])
let sab="";
    let handleChange=  async (event) =>{
         setStatus(event.target.value);
         sab=event.target.value;
        console.log("status",event.target.value); 
      
        const AuthStr = localStorage.getItem('FBIdToken');

    
      
        const updateUserById ={
          status : sab,
       
      
       }
      
       await  axios.patch(`/post/interest/${props.interest}`,updateUserById,{ headers: { Authorization: AuthStr } })
            
             .then(res =>{
               console.log(res.data);
              })
             .catch(err=>{  console.log(err);
               
             })

    }



    return (
        <div style={{marginTop:'-10px'}}>
          <br></br>
              <FormControl style={{borderRadius:25}}  >
           <Select native defaultValue="" id="grouped-native-select" fullWidth name="status" onChange={handleChange} >
                        <option aria-label="hello"  selected hidden >{props.stat}</option>
                           <option value="interested">interested</option>
                          <option value="mailed" disabled >mailed</option>
                          <option value="ready to buy">ready to buy</option>
                          <option value="refused">refused</option>
 
                       </Select>
                       

      </FormControl>
        </div>
    )
}
