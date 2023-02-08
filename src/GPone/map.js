import React, { useState, useEffect } from "react";
import {
  withGoogleMap,
  withScriptjs,
  GoogleMap,
  Marker,
  InfoWindow
} from "react-google-maps"
 import trash from "../image/trash.jpg"
   import firebase from "../firebase/index";




 
 
   var x=0;
   
   function Mapp() {
    
    
    
     const [selectedPark, setSelectedPark] = useState(null);
   
    const[markers,setMarkers]=React.useState([]);
    var [dlat,setlat]=React.useState([]);
    var [dlng,setlng]=React.useState([]);
   
    console.log('dlat=',dlat);
    console.log('dlng=',dlng);
   
    const onCreate = () => {
     const db = firebase.firestore();
     db.collection("Positions").add({ lat : dlat,lng : dlng });
   };
     return (
       
       <div id="all">
       
       <GoogleMap
       
         defaultZoom={12}
         defaultCenter={{ lat: 34.747847, lng: 10.766163}}
     
   
         onClick={(event)=>{
           x++;
           if (x==1){
           setMarkers(current => [...current,{
               lat:event.latLng.lat(),
               lng:event.latLng.lng(),
               time:new Date(),
   
           }])
           setlat(
             dlat*0+event.latLng.lat()
           )
           setlng(
             dlng*0+event.latLng.lng()
           )
   
         }
         }}
         >
         
           {markers.map((marker) =>(
            <Marker key={marker.time.toISOString()}
               draggable={true}
                 position={{lat:marker.lat , lng:marker.lng}}
   
        icon ={{
     
         scaledSize: new window.google.maps.Size(50, 50)
        }}
         > </Marker>
   
   
           ))} 
             
   
        
   
         
         
       </GoogleMap>
       <form method="POST">
       <input name="dlat" name='dlat' id="dlat" value={dlat}  type="text" readonly />
       <input name="dlng" id="dlng" value={dlng}  type="text" readonly />
       <input type="button" onClick={onCreate} value="Submit location"></input>
   </form>
       </div>
       
     );
     
   }
   
   const MapWrapped = withScriptjs(withGoogleMap(Mapp));
   
   export default function Map() {
     return (
       <div style={{ width: "50vw", height: "70vh" }}> 
         <MapWrapped
     googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAPxPltISRL44yu-j-j-pMt92tPlJyPhCU&v=3.exp&libraries=geometry,drawing,places"
     loadingElement={<div style={{ height: `100%` }} />}
           containerElement={<div style={{ height: `100%` }} />}
           mapElement={<div style={{ height: `100%` }} />}
         />
      </div> 
     );
   }