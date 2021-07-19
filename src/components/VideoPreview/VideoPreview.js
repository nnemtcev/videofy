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

    return (
      <div className={["video-preview", horizontal].join(" ")}>
        <div className="image-container">
          <Image src="http://via.placeholder.com/210x118" />
          <div className="time-label">
            <span>05:22</span>
          </div>
        </div>
        <div className="video-info">
          <div className="semi-bold show-max-two-lines">Video title</div>
          <div className="video-preview-metadata-container">
            <div className="channel-title">Channel title</div>
            <div>
              <span>2.1M views • 2 days ago</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
