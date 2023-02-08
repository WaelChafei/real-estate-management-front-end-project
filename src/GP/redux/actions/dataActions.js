import axios from 'axios';
import {
    POST_SCREAM,
    SET_ERRORS,
    CLEAR_ERRORS,
    SET_SCREAMS,
    LIKE_SCREAM,
    STOP_LOADING_UI,
    UNLIKE_SCREAM,
    LOADING_DATA,
    DELETE_SCREAM, 
    LOADING_UI,
    SET_SCREAM
 }from '../types'
 import  { useEffect } from 'react';

export const postScream=(newScream)=>(dispatch)=>{
    const AuthStr = localStorage.getItem('FBIdToken');
     axios.post('/addPost',newScream,{ headers: { Authorization: AuthStr } })
    .then(res=>{
        const FBIdToken=`Bearer ${res.data.token}`
        axios.defaults.headers.common['Authorization']=FBIdToken;
    
        console.log(res.data);

        dispatch({
            type:POST_SCREAM,
            payload:res.data
        });
        dispatch({type: CLEAR_ERRORS})
    }).catch(err=>{
        dispatch({
            type:SET_ERRORS,
            payload:err.response.data
        })
    })
}
const AuthStr = localStorage.getItem('FBIdToken');
export const getScreams=()=>(dispatch)=>{
    dispatch({type: LOADING_DATA});
    axios.get('/posts' )
        .then(res=>{
            dispatch({
                type: SET_SCREAMS,
                payload: res.data
            })
        })
        .catch(err=>{
            dispatch({
                type:SET_SCREAMS,
                payload:[]
            })
        })
}
//like
 

export const deleteScream = (employeeId)=>dispatch=>{
    const AuthStr = localStorage.getItem('FBIdToken');

    axios.delete(`/admin/deleteEmployeeData/${employeeId}`,{ headers: { Authorization: AuthStr } })
    .then((res)=>{
      
        console.log('deleteeee');

        dispatch({
            type:DELETE_SCREAM,
            payload: employeeId
        })
    }).catch(err =>console.log(err));
}
 
export const deleteScreamo = (postId)=>(dispatch)=>{
    const AuthStr = localStorage.getItem('FBIdToken');
 axios.delete(`/post/${postId}`,{ headers: { Authorization: AuthStr } })
    .then( (res)=>{
        
        console.log('deleteeee');

        dispatch({
            type:DELETE_SCREAM,
            payload: postId 
        })
    }).catch(err =>console.log(err));


}

export const getUserData=(userHandle)=>dispatch=>{
    dispatch({type : LOADING_DATA});
    axios.get(`/user/${userHandle}`)
        .then( res=>{
            dispatch({
            type: SET_SCREAMS,
            payload: res.data.screams
        });
        })
        .catch(()=>{
            dispatch({
                type:SET_SCREAMS,
                payload:null
            });
        });
}
export const getScream=(postId)=>dispatch=>{
    dispatch({type:LOADING_UI});
    axios.get(`/post/${postId}`)
        .then(res=>{
            dispatch({
                type: SET_SCREAM,
                payload:res.data
            });
            dispatch({type:STOP_LOADING_UI})
          
        })  .catch(err=> console.log(err));
}
export const clearErrors = () => (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
  };

  export const editUserDetails = (userDetails,employeeId) => (dispatch) => {
    console.log("helloooo" );
    console.log('emp Id',employeeId);
    const AuthStr = localStorage.getItem('FBIdToken');
     axios
      .patch(`/admin/updateEmployee/${employeeId}`, userDetails,{ headers: { Authorization: AuthStr } })
      .then((res) => {
        console.log("helloooo",res.data)
      })
      .catch((err) => console.log(err));
  };