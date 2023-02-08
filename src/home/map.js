import React, { useState, useEffect } from "react";
import {
  withGoogleMap,
  withScriptjs,
  GoogleMap,
  Marker,
  InfoWindow
} from "react-google-maps"
  
import axios from 'axios'

import Header from "componentsNew/Header/Header.js";
import HeaderLinks from "componentsNew/Header/HeaderLinks.js";

 
 
   var x=0;
   
   function Mapp() {
    let cab=[];
    let tab=[];

  
    
     const [selectedPark, setSelectedPark] = useState(null);
   
    const[markers,setMarkers]=React.useState([]);
     var [lat,setLat]=React.useState([]);
    var [lng,setLng]=React.useState([]);
 

    useEffect(()=>{
      axios.get('/posts'  ) 
      .then(ras=>{
        
  
  
  
       for(var i=0 ; i< ras.data.length;i++){


              tab.push(ras.data[i].lat)
              cab.push(ras.data[i].lng)
        
  
     }
    setLat(tab);  
    setLng(cab);
        }
       )  
    })

     return (
       
       <div id="all">
       
       <GoogleMap
       
         defaultZoom={12}
         defaultCenter={{ lat: 34.747847, lng: 10.766163}}
     
    
         >
         
           {lat.map((la,index) =>
        
            (
             
            <Marker  
                  position={{lat:la , lng:lng[index]}}
   
        icon ={{
     
         scaledSize: new window.google.maps.Size(50, 50)
        }}
         > </Marker>
   
   
           ))} 
             
   
        
   
         
         
       </GoogleMap>
        </div>
       
     );
     
   }
   
   const MapWrapped = withScriptjs(withGoogleMap(Mapp));
   
   export default function Map() {
     return (
       <div style={{ width: "100%", height: "90vh" }}> 
       <br></br>
       <br></br>
       <br></br>
       <Header
    
    rightLinks={<HeaderLinks />}
    fixed
    color="#0000"
    changeColorOnScroll={{
      height: 400,
      color: "white"
    }}
 />
         <MapWrapped
     googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAPxPltISRL44yu-j-j-pMt92tPlJyPhCU&v=3.exp&libraries=geometry,drawing,places"
     loadingElement={<div style={{ height: `100%` }} />}
           containerElement={<div style={{ height: `100%` }} />}
           mapElement={<div style={{ height: `100%` }} />}
         />
      </div> 
     );
   }
   