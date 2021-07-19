import React from "react";

import "./RelatedVideos.scss";
import { VideoPreview } from "../VideoPreview/VideoPreview";
import { NextUpVideo } from "./NextUpVideo/NextUpVideo";

// The RelatedVideos component renders the video that is coming up next
// and a limited number of videos related to the current video that is being watched

export function RelatedVideos(props) {
  return (
    <div className="related-videos">
      <NextUpVideo />
      <VideoPreview horizontal />
      <VideoPreview horizontal />
      <VideoPreview horizontal />
    </div>
  );
}
