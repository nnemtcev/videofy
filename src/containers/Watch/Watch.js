import React from "react";

import "./Watch.scss";
import { Video } from "../../components/Video/Video";
import { RelatedVideos } from "../../components/RelatedVideos/RelatedVideos";

export class Watch extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div style={{ maxWidth: "80%" }}>
          <Video id="-7fuHEEmEjs" />
        </div>
        <RelatedVideos />
      </React.Fragment>
    );
  }
}
