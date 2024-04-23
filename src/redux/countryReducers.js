import { LOAD_DATA_REQUEST,LOAD_DATA_SUCCESS,LOAD_DATA_ERROR } from "./actionTypes";
   
const initialState={
    country:[],
    loading:false,
    error:""
}

const countryReducer=(state=initialState,action)=>{
    switch(action.type){
        case LOAD_DATA_REQUEST:
        return {...state,loading:true}
        case LOAD_DATA_SUCCESS:
            return {...state,loading:false,country:action.payload}
            case LOAD_DATA_ERROR:
                return {...state,error:action.payload}
                default:
                    return state
    }
}
export default countryReducer