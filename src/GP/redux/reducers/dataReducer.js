import { POST_SCREAM,SET_SCREAMS,LIKE_SCREAM,
    UNLIKE_SCREAM, LOADING_DATA ,DELETE_SCREAM,SET_SCREAM} from "../types";

const initialState={
    screams:[],
    scream:{},
    loading:false,
    employees:[]
}

export default function test(state = initialState,action){
    switch (action.type){
        case LOADING_DATA:
            return{
                ...state,
                loading:true
            }
        case SET_SCREAMS:
            return{
                ...state,
                screams:action.payload,
                loading:false
            }
        case LIKE_SCREAM:
        case UNLIKE_SCREAM:

                let index = state.screams.findIndex((scream)=> scream.postId=== action.payload.postId);
                state.screams[index]= action.payload;
                return{
                    ...state,
                 
                };
        case SET_SCREAM:
            return{
                ...state,
                scream: action.payload
            }
            

        case POST_SCREAM:
            return{
                ...state,
                screams:[
                    action.payload,
                    ...state.screams
                ]
            }
        case DELETE_SCREAM:
            let inde= state.employees.findIndex(employee=>employee.employeeId===action.payload);
            state.employees.splice(inde,1 );
            return{
                ...state
            }
            default :
            return state;
    }
}


 
