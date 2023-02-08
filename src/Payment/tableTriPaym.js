import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import  { useState } from 'react';
 import {   Divider, Grid } from '@material-ui/core';
import CardHeader from "components/Card/CardHeader.js";

let rows=[];
let stat=[];

var x=0;
export default function RowsGrid(props) {

  
    var i=0;
 
if(x==0){
    x++;
 for(var j=0; j<props.screams.length;j++){
     
    rows.push({id:j,ID: `${props.screams[j].id}`, 
    CIN:`${props.screams[j].userCin} `,Paymentday:`${props.screams[j].paymentDay}`,
    MethodPayment:`${props.screams[j].methodPayment}`,  AdvanceAmount:`${props.screams[j].mantantAvance}`,
    ModeOfPayment:`${props.screams[j].modePayment}`,  MonthNumber:`${props.screams[j].nombreMois}`,
    Status:`${props.screams[j].status}`
  
});
      console.log("rows",rows);
      
    }
}

 

const   columns  = 
[ { field: 'ID', width: 150 }, { field: 'CIN', width: 150 }
  , { field: 'Paymentday', width: 150 }, { field: 'MethodPayment', width: 150 }
  , { field: 'AdvanceAmount', width: 150 }

 , { field: 'ModeOfPayment ', width: 150 ,height:150}
 , { field: 'MonthNumber ', width: 150 ,height:150}
 , { field: 'Status ', width: 150 ,height:150}
 , { field: 'payed ', width: 150 ,height:150}

];
     
 console.log("rows",rows);
 

 console.log("columns",columns);
  
  return (
      <div>
 <br></br>
 
 
    <div style={{ height: "100vh", width: '80%',position:"absolute" }}>


      <DataGrid
        columns={columns}
        rows={rows}
        
        />
 

    </div></div>
  );
}