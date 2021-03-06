import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createSmurf } from "../state/actions";

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    

    this.state = {
        name: "",
        age:"",
        height: ""
      };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const smurf = {
      name: this.state.name,
      age: this.state.age,
      height: this.state.height
    };
    console.log(" before createSmurf() invoked in onsubmit");
    this.props.createSmurf(smurf);
    console.log(" after createSmurf() invoked in onsubmit");


  }

  render() {
    return (
      <div>
        <h1>Add Smurf</h1>
        <form onSubmit={this.onSubmit}>
          <div>
            <label htmlFor="">Name:</label>
            <br />
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.onChange}
            /><br/>

            <label htmlFor="">Age:</label>
            <br />
            
            <input
              type="number"
              name="age"
              value={this.state.age}
              onChange={this.onChange}
            />
          </div>
          <div>
            <label htmlFor="">height:</label>
            <br />
            <input
              name="height"
              value={this.state.height}
              onChange={this.onChange}
            ></input>
            <br />
            <button type="submit">Submit Smurf</button>
          </div>
        </form>
      </div>
    );
  }
}
SmurfForm.propTypes = {
  createSmurf: PropTypes.func.isRequired,
}
export default connect(null, {createSmurf})(SmurfForm);
