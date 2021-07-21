import React from "react";

import "./Watch.scss";
import { Video } from "../../components/Video/Video";
import { RelatedVideos } from "../../components/RelatedVideos/RelatedVideos";
import { VideoMetadata } from "../../components/VideoMetadata/VideoMetadata";
import { VideoInfoBox } from "../../components/VideoInfoBox/VideoInfoBox";
import { Comments } from "../Comments/Comments";

export class Watch extends React.Component {
  render() {
    return (
      <div className="watch-grid">
        <Video className="video" id="RDbvC5I9wtw" />
        <VideoMetadata className="metadata" viewCount={1000} />
        <VideoInfoBox />
        <Comments className="comments" />
        <RelatedVideos className="relatedVideos" />
      </div>
    );
  }
}
