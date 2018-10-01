import React, { Component } from "react";
import { Link } from "react-router-dom";

class Form extends Component {
  render() {
    return (
      <div>
        <div>
          <h2>{this.props.title}</h2>
          <p>{this.props.content}</p>
        </div>
        <div className="blog--post--below">
          <div className="blog--post--share">
            <a href="">Facebook</a>
            <br />
            <a href="">Twitter</a>
            <br />
            <a href="">Instagram</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Form;
