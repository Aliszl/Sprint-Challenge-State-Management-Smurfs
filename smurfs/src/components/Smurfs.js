import React, { Component } from "react";
// import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchSmurfs } from "../state/actions";

class Smurfs extends Component {
  constructor(props) {
    super(props);
    
    console.log(props);
  }

  componentDidMount() {
    console.log("before fetchfetchsmurfs()");
  this.props.fetchSmurfs();
  console.log("after fetchfetchsmurfs()");
  }

  componentDidUpdate(nextProps){
    this.props.fetchSmurfs();
    // if (nextProps.newSmurf){
    //   this.props.smurfs.unshift(nextProps.newSmurf)
    // }
  }
  render() {
    const smurfItems = this.props.smurfs.map(smurf => (
      <div key="{smurf.id}">
        <h2>{smurf.name}</h2>
        <h2>{smurf.age}</h2>
        <h2>{smurf.height}</h2>
      </div>
    ));
    return (
      <div>
        <h2>Smurfs</h2>
        {smurfItems}
      </div>
    );
  }
}
// Smurfs.propTypes = {
//   fetchSmurfs: PropTypes.func.isRequired,
//   smurfs:PropTypes.array.isRequired,
//   newSmurf: PropTypes.object
// }
const mapStateToProps = state => ({
  smurfs: state.smurfs.smurfs,//state.smurfs is reducer.  smurfs(items) is piece of state to go in this property.
newSmurf: state.smurfs.smurf
});
export default connect(mapStateToProps, {fetchSmurfs} )(Smurfs);
