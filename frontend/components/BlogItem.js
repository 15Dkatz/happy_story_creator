import React, { Component } from "react";
import { Link } from "react-router-dom";

import { Anchor } from "@zendeskgarden/react-buttons";

class Form extends Component {
  render() {
    return (
      <div>
        <div>
          <h3>{this.props.title}</h3>
          <p>{this.props.content}</p>
        </div>
        <div className="blog--post--below">
          <div className="blog--post--share">
          
          <p><small><Anchor href="#">Facebook</Anchor> | <Anchor href="#">Twitter</Anchor> | <Anchor href="#">LinkedIn</Anchor></small></p>
          </div>
        </div>
      </div>
    );
  }
}

export default Form;
