import { LOAD_DATA_REQUEST,LOAD_DATA_SUCCESS,LOAD_DATA_ERROR } from "./actionTypes";
import axios from "axios";
const loadData=()=>{
  return(dispatch)=>{
      dispatch({type:LOAD_DATA_REQUEST})
       axios.get("https://restcountries.com/v3.1/all").then(
        res=>{dispatch({type:LOAD_DATA_SUCCESS,payload:res.data})}
       ).catch((err)=>{
        dispatch({type:LOAD_DATA_ERROR,payload:err})
       })
  }
}
export default loadData