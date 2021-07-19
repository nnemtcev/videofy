import React from "react";
import { Button, Divider, Icon } from "semantic-ui-react";

import "./VideoMetadata.scss";

// The VideoMetadata component renders metadata
// about the video that is currently being watched
// for example, the title of the video and the number of views

export function VideoMetadata(props) {
  const viewCount = Number(props.viewCount).toLocaleString() || "";

  return (
    <div className="video-metadata">
      <h3>Video title</h3>
      <div className="video-stats">
        <span>{viewCount}</span>
        <div></div>
      </div>
      <Divider />
    </div>
  );
}
