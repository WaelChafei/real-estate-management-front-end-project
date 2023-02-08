import React from 'react'
import  { useState } from 'react';
import { makeStyles } from "@material-ui/core/styles";

import axios from "axios";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from '@material-ui/core/FormControl';
import  { useEffect } from 'react';

import Select from '@material-ui/core/Select';
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
export default function CommId(props) {
    const [comm, setComm] = useState([]);
    const useStyles = makeStyles(styles);

    const classes = useStyles();

     const [commName, setCommName] = useState([]);
    const AuthStr = localStorage.getItem('FBIdToken');
    let tab=[];
    let tabId=[];
    useEffect(() => {
      async function fetchData(){
     await axios.get('/employeeData',{ headers: { Authorization: AuthStr } })
      .then(res=>{
      for (var i=0;i<res.data.length;i++ ){
          if(res.data[i].role=="comm"){
              tab.push(res.data[i].employeeFullName);
              tabId.push(res.data[i].employeeDataId);
          }
      }
       
      setCommName(tab);
      setComm(tabId);
      })
    }
    fetchData();
    }, [0])

let handleChange7=(event)=>{
    props.handleChange7(event.target.value)
     console.log("type",event.target.value);

  }
const front= commName.map((commNam,i) => (
      <option value={comm[i]} >{commNam}</option>
 ));


    return (
        <div>
                 <FormControl className={classes.formControl} fullWidth>
               <InputLabel htmlFor="grouped-native-select">Commercial  </InputLabel>
       <Select native defaultValue="" id="grouped-native-select" fullWidth name="commercialId" onChange={handleChange7}  >
       <option aria-label="None" value="" />
                {front}
        </Select>
        </FormControl>
         </div>
    )
}
