import { NEW_SMURF, FETCH_SMURFS } from "./types"; //or import * as types from './Types'; () then types.FETCH_SMURFS)
// import axios from "axios";
export const fetchSmurfs = () => dispatch => {
    // this.state = { name:'',age:'', height:'' };
  console.log("fetching");

  fetch("http://localhost:3333/smurfs")
    .then(res => res.json())
    .then(smurfs =>
      dispatch({
        type: FETCH_SMURFS,
        payload: smurfs
      })
   
    )
    .catch(err => {
      debugger;
    });
};

export const createSmurf = (smurfData) => dispatch => {
console.log("action");
    fetch("http://localhost:3333/smurfs",{
        method: 'PATCH',
        headers: {
            'content-type': 'application/json',
            "Access-Control-Origin": "*"
        },
        body: JSON.stringify(smurfData)
    })
      .then(res => res.json())
      .then(smurf =>
        dispatch({
          type: NEW_SMURF,
          payload: smurf
        })
     
      );
    //   .catch(err => {
    //     debugger;
    //   });
  };