import React from "react";
import "./Video.scss";

const BASE_EMBED_URL = "https://www.youtube.com/embed/";

// Video is a functional component that renders a responsive iFrame
// containing the YouTube video, in 16:9 dimensions

export function Video(props) {
  if (!props.id) return null; // If a YouTube video id is not passed in, render nothing
  const embedUrl = `${BASE_EMBED_URL}${props.id}`;

  return (
    <div className="video-container">
      <div className="video">
        <iframe
          src={embedUrl}
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
          title={"video"}
          className="video-player"
        ></iframe>
      </div>
    </div>
  );
}
