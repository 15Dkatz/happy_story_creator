import React, { Component } from "react";
import '@zendeskgarden/react-buttons/dist/styles.css';
import '@zendeskgarden/react-textfields/dist/styles.css';

import { Button } from '@zendeskgarden/react-buttons';
import { TextField, Textarea, Label, Input } from '@zendeskgarden/react-textfields';

class Form extends Component { 

  render() {
    return (
      <form className="blog--post--form">
        <TextField>
          <Label>Post Heading
          <Input placeholder="Input your post heading" />
          </Label>
        </TextField>
        <Label>Post content
          <Textarea placeholder="Write your post"/>
        </Label>
        <Button onClick={()=>this.props.addBlogItem}>Submit</Button>
      </form>
    );
  }
}

export default Form;


