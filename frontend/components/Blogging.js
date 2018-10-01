import React, { Component } from "react";
import { Link } from "react-router-dom";
import Form from "./Form";
import BlogItem from "./BlogItem";
import "./blogging.css";

class Blogging extends Component {
  render() {
    return (
      <div>
        <h2>Blogging</h2>
        <Link to="/">Home</Link>
        <div className="blog--display">
          <BlogItem title="Post heading" content="Post content" />
        </div>
        <hr />
        <main className="blog--content">
          <div className="blog--post">
            <Form />
          </div>
          <aside className="sidebar">
            <div className="blog--post--valueprop">
              <p>Advertisement</p>
            </div>
            <p>thermometer</p>
          </aside>
        </main>
      </div>
    );
  }
}

export default Blogging;
