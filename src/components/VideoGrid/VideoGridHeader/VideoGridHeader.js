import React from "react";
import "./VideoGridHeader.scss";

// This component is for rendering a customizable header
// for each VideoGrid component

export function VideoGridHeader(props) {
  return (
    <div className="video-grid-header">
      <span className="title">{props.title}</span>
    </div>
  );
}
