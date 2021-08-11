import React from "react";
import { Image } from "semantic-ui-react";
import "./VideoPreview.scss";

// VideoPreview is a component that renders the YouTube video's thumbnail
// and the metadata (video title, number of views, channel, how long ago video was posted)

export class VideoPreview extends React.Component {
  render() {
    // Determines whether VideoPreview will display the video metadata
    // on the right side of the video thumbnail or below it
    const horizontal = this.props.horizontal ? "horizontal" : null;

    const { video } = this.props;

    if (!video) {
      return <div />;
    }

    return (
      <div className={["video-preview", horizontal].join(" ")}>
        <div className="image-container">
          <Image src={video.snippet.thumbnails.medium.url} />
          <div className="time-label">
            <span>{video.contentDetails.duration}</span>
          </div>
        </div>
        <div className="video-info">
          <div className="semi-bold show-max-two-lines">
            {video.snippet.title}
          </div>
          <div className="video-preview-metadata-container">
            <div className="channel-title">{video.snippet.channelTitle}</div>
            <div>
              <span>
                {video.statistics.viewCount} views • {video.snippet.publishedAt}
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
