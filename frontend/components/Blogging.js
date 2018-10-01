import React, { Component } from "react";
import { Link } from "react-router-dom";
import Form from "./Form";
import BlogItem from "./BlogItem";
import Advertisement from "./Advertisement";
import Thermometer from "react-thermometer-component";
import { Button } from "@zendeskgarden/react-buttons";
import {
  Chrome,
  Body,
  Main
} from "@zendeskgarden/react-chrome";
import {
  TextField,
  Textarea,
  Label,
  Input
} from "@zendeskgarden/react-textfields";

import "@zendeskgarden/react-chrome/dist/styles.css";
import "@zendeskgarden/react-buttons/dist/styles.css";
import "@zendeskgarden/react-textfields/dist/styles.css";
import "./blogging.css";

class Blogging extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blogItems: [],
      heading: "",
      content: ""
    };
  }

  addBlogItem() {
    const { heading, content, blogItems } = this.state;
    console.log(blogItems);
    this.setState({
      blogItems: [...blogItems, { heading, content }]
    });
  }

  render() {
    return (
      <Chrome>
        <Body style={{ maxWidth: 1024 }}>
          <header>
            <blockquote>
              <p>"Be the change you wish to see in the world."</p>
              <cite>Ghandi</cite>
            </blockquote>
          </header>

          <h2>Blogging</h2>
          <Link to="/">Home</Link>

          <div className="blog--display">
            {this.state.blogItems.map((blogItem, index) => {
              return (
                <BlogItem
                  key={index}
                  title={blogItem.heading}
                  content={blogItem.content}
                />
              );
            })}
          </div>
          <hr />
          <Main className="blog--content">
            <div className="blog--post">
              <div className="blog--post--form">
                <TextField>
                  <Label>
                    Post Heading
                    <Input
                      onChange={event =>
                        this.setState({ heading: event.target.value })
                      }
                      placeholder="Input your post heading"
                    />
                  </Label>
                </TextField>
                <Label>
                  Post content
                  <Textarea
                    onChange={event =>
                      this.setState({ content: event.target.value })
                    }
                    placeholder="Write your post"
                  />
                </Label>
                <Button primary onClick={() => this.addBlogItem()}>
                  Submit
                </Button>
              </div>
            </div>

            <div className="sidebar">
              <div className="blog--post--valueprop">
                <Advertisement />
              </div>
              <br />
              <Thermometer
                theme="light"
                value="7000"
                max="12000"
                format=" hours"
                size="large"
                height="300"
              />
            </div>
          </Main>
        </Body>
      </Chrome>
    );
  }
}

export default Blogging;
