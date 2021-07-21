import React from "react";
import { Form, Image, TextArea } from "semantic-ui-react";

import "./AddComment.scss";

// The AddComment component displays the authenticated user's
// profile picture and a text input box that allows them
// to enter their comment and post it

export function AddComment() {
  return (
    <div className="add-comment">
      <Image
        className="user-image"
        src="http://via.placeholder.com/48x48"
        circular
      />
      <Form>
        <Form.TextArea
          control={TextArea}
          autoHeight
          placeholder="Add a public comment"
        />
      </Form>
    </div>
  );
}
