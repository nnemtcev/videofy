import React from "react";
import { Checkbox, Divider } from "semantic-ui-react";
import { VideoPreview } from "../../VideoPreview/VideoPreview";

import "./NextUpVideo.scss";

// The NextUpVideo component is for rendering the thumbnail and metadata for the
// video that is coming up next (assuming autoplay is toggled)

export function NextUpVideo(props) {
  return (
    <React.Fragment>
      <div className="next-up-container">
        <h4>Up next</h4>
        <div className="up-next-toggle">
          <span>Autoplay</span>
          <Checkbox toggle defaultChecked />
        </div>
      </div>
      <VideoPreview horizontal />
      <Divider />
    </React.Fragment>
  );
}
