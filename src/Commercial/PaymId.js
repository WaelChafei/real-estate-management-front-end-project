import React from 'react'
import  { useState } from 'react';

import axios from "axios";

import Select from '@material-ui/core/Select';
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';

export default function CommId(props) {
    const [comm, setComm] = useState([]);

     const [commName, setCommName] = useState([]);
    const AuthStr = localStorage.getItem('FBIdToken');
    let tab=[];
    let tabId=[];
axios.get('/employeeData',{ headers: { Authorization: AuthStr } })
.then(res=>{
for (var i=0;i<res.data.length;i++ ){
    if(res.data[i].role=="paym"){
        tab.push(res.data[i].employeeFullName);
        tabId.push(res.data[i].employeeDataId);
    }
}
 
setCommName(tab);
setComm(tabId);
})
 
      
  let handleChange8=(event)=>{
    props.handleChange8(event.target.value)
console.log("eventi",event.target.value);


}
const front= commName.map((commNam,i) => (
      <option value={comm[i]} >{commNam}</option>
 ));


    return (
        <div>
                         <FormControl variant="outlined" fullWidth className={props.classes.formControl}  error={props.don7=="7" ? true : false}>

            <InputLabel htmlFor="grouped-select">Payment agent</InputLabel>
       <Select native defaultValue="" id="grouped-native-select" fullWidth name="commercialId" onChange={handleChange8}  >
       <option aria-label="None" value="" />
                {front}
        </Select>
        </FormControl>
        <FormHelperText style={{color:"red"}}>{props.don7=="7"? "this input is required" : ""}</FormHelperText>
         </div>
    )
}
