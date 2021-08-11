import React from "react";
import { Image } from "semantic-ui-react";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";

import "./VideoPreview.scss";
import { getShortNumberString } from "../../services/number/number-format";
import { getVideoDurationString } from "../../services/date/date-format";

TimeAgo.locale(en);
const timeAgo = new TimeAgo("en-US");

// VideoPreview is a component that renders the YouTube video's thumbnail
// and the metadata (video title, number of views, channel, how long ago video was posted)

export class VideoPreview extends React.Component {
  static getFormattedViewAndTime(video) {
    const viewCount = video.statistics ? video.statistics.viewCount : null;
    const publicationDate = new Date(video.snippet.publishedAt);

    if (viewCount) {
      return `${getShortNumberString(
        new Number(viewCount)
      )} views • ${timeAgo.format(publicationDate)}`;
    }

    return "";
  }

  render() {
    const { video } = this.props;

    const duration = video.contentDetails
      ? video.contentDetails.duration
      : null;
    const videoDuration = getVideoDurationString(duration);
    const viewAndTimeString = VideoPreview.getFormattedViewAndTime(video);

    // Determines whether VideoPreview will display the video metadata
    // on the right side of the video thumbnail or below it
    const horizontal = this.props.horizontal ? "horizontal" : null;

    if (!video) {
      return <div />;
    }

    return (
      <div className={["video-preview", horizontal].join(" ")}>
        <div className="image-container">
          <Image src={video.snippet.thumbnails.medium.url} />
          <div className="time-label">
            <span>{videoDuration}</span>
          </div>
        </div>
        <div className="video-info">
          <div className="semi-bold show-max-two-lines">
            {video.snippet.title}
          </div>
          <div className="video-preview-metadata-container">
            <div className="channel-title">{video.snippet.channelTitle}</div>
            <div>
              <span>{viewAndTimeString}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
