import React, { Component } from "react";
import { Link } from "react-router-dom";

class Form extends Component {
  render() {
    return (
      <form className="blog--post--form">
        <input placeholder="Post heading" />
        <textarea />
        <button>Submit</button>
      </form>
    );
  }
}

export default Form;


