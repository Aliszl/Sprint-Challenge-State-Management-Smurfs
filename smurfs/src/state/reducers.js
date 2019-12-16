import { FETCH_SMURFS, NEW_SMURF } from "./types";

const initialState={
   
    smurfs:[],
    smurf:{}
}

export function smurfReducer(state=initialState, action){
    switch (action.type) {
        case FETCH_SMURFS:
            console.log("reducer");
          return {
              ...state, 
              smurfs: action.payload
          };
          case NEW_SMURF:
          return {
              ...state,
              smurf: action.payload
          }
        default:
          return state;
      }  

}