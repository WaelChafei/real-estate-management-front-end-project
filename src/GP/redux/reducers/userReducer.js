import {SET_USER,
    SET_AUTHENTICATED,LIKE_SCREAM,UNLIKE_SCREAM,
     SET_UNAUTHENTICATED, MARK_NOTIFICATIONS_READ,
     LOADING_USER}from '../types';

const initialState={
 authenticated: false,
 credentials:{},
 likes:[],
 notif:[],
 loading:false,
}
export default function testtt(state=initialState,action){

    switch(action.type){
        case SET_AUTHENTICATED:
            return {
                ...state,
                authenticated:true,
            };
        case SET_UNAUTHENTICATED:
            return  initialState;
        case SET_USER:
            console.log('useraaa')
            return{
                authenticated:true,
                loading:false,
                ...action.payload
            };
        case LOADING_USER:
            return {
                ...state,
                loading :true
            }
        case LIKE_SCREAM:

            return{
                ...state,
                likes:[
                    ...state.likes ,
                    {
                        screamId:action.payload.screamId,
                        employeeFullName:   state.credentials.employeeFullName

                    }
                ]
            }
        case UNLIKE_SCREAM:
            return{
                ...state,
                likes:state.likes.filter(
                    (like)=>like.screamId!==action.payload.screamId)
            }
            case MARK_NOTIFICATIONS_READ:
                state.notif.forEach(not=> not.read = true);
                return {
                    ...state
                }
        default:
            return state;
            
    }
}