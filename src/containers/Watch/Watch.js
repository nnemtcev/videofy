import React from "react";

import "./Watch.scss";
import { Video } from "../../components/Video/Video";
import { VideoPreview } from "../../components/VideoPreview/VideoPreview";

export class Watch extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div style={{ maxWidth: "80%" }}>
          <Video id="-7fuHEEmEjs" />
        </div>
        <div style={{ display: "inline" }}>
          <VideoPreview horizontal />
        </div>
      </React.Fragment>
    );
  }
}
