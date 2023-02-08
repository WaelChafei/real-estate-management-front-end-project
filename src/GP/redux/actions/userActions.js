import {SET_USER,CLEAR_ERRORS,SET_ERRORS,LOADING_UI,SET_AUTHENTICATED,SET_UNAUTHENTICATED,LOADING_USER,MARK_NOTIFICATIONS_READ }from '../types';
import axios from 'axios';
import  { useState } from 'react';
import history from ".././../../history";

 export const loginUser =(userData)=>(dispatch)=>{
     dispatch({type: LOADING_UI});
    axios.post('/login',userData)
    .then((res) =>{
      console.log(res.data);
      const FBIdToken=`Bearer ${res.data.token}`
      const role=`${res.data.role}`

      localStorage.setItem(`FBIdToken`,FBIdToken); 
      localStorage.setItem(`role`,role); 

      axios.defaults.headers.common['Authorization']=FBIdToken;
      dispatch(getUserData());
      dispatch({type:CLEAR_ERRORS});
      dispatch({ type: SET_AUTHENTICATED });

        console.log(res.data.role);
       if((res.data.role)=="gp"){      
        history.push('/gp/dash');
         }else if ((res.data.role)=="admin") {
            history.push('/admin/dash');

     
         }
         else if ((res.data.role)=="comm") {
            history.push('/comm/dash');

          }
        else if ((res.data.role)=="paym") {
             history.push('/paym/dash');

        }
        else if ((res.data.role)=="user") {
             history.push('/user/form');

        }
        dispatch({
            type : SET_USER,
            payload: res.data
        })
    })
    .catch((err)=>{  
        dispatch({
            type : SET_ERRORS,
            payload: err.response.data
        })
    }) 
}


export const getUserData=()=>(dispatch)=>{
    axios.get('/user').then (res =>{
         dispatch({
            type : SET_USER,
            payload: res.data
        })
    }).catch(err => console.log(err))


}
export const markNotificationsRead=(id)=>dispatch=>{
        const AuthStr = localStorage.getItem('FBIdToken');

    axios.post('/notifications',id,{ headers: { Authorization: AuthStr } }    )
        .then(res=>{
            dispatch({
                type: MARK_NOTIFICATIONS_READ
            })
        })
        .catch(err=> console.log(err));
}
export const logoutUser = () => (dispatch) => {
    localStorage.removeItem('FBIdToken');
    localStorage.removeItem('role');

    delete axios.defaults.headers.common['Authorization'];
    dispatch({ type: SET_UNAUTHENTICATED });
  };
  export const uploadImage = (formData) => (dispatch) => {
    dispatch({ type: LOADING_USER });
    axios
      .post('/user/image', formData)
      .then(() => {
        dispatch(getUserData());
      })
      .catch((err) => console.log(err));
  };
 