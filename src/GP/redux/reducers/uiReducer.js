import {SET_ERRORS,CLEAR_ERRORS,LOADING_UI ,STOP_LOADING_UI}from '../types';
const initialState ={
    loading : false,
    error: null
}
export default function testt(state=initialState,action){

    switch(action.type){
        case SET_ERRORS:
            return {
                ...state,
                loading:true,
                errors:action.payload
            };
  
        case CLEAR_ERRORS:
            return{
                ...state,
                loading:true,
                errors:null
            };
        case LOADING_UI:
            return {
                ...state,
                loading :true
            }
        case STOP_LOADING_UI:
            return{
                ...state,
                loading:false
            };
      
        default:
            return state;
            
    }
}