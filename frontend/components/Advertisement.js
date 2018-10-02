import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button } from "@zendeskgarden/react-buttons";

import './advertisement.css';


class Advertisement extends Component {
  render() {
    return (
      <div className="advertisement">
        <h4>The Zendesk Suite</h4>
        <p>The Zendesk Suite provides a true omnichannel experience with seamless customer support. Learn more about The Suite and start a free trial today.</p>
        <Button size="small">Learn more</Button>
      </div>
    );
  }
}

export default Advertisement;
