import React from "react";
import { Image, Button } from "semantic-ui-react";

import "./VideoInfoBox.scss";

export class VideoInfoBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: true,
    };
  }

  onToggleCollapseButtonClick = () => {
    this.setState((previousState) => {
      return {
        collapsed: !previousState.collapsed,
      };
    });
  };

  render() {
    return (
      <div className="video-info-box">
        <Image
          className="channel-image"
          src="http://via.placeholder.com/48x48"
          circular
        />
        <div className="video-info">
          <div className="channel-name">Channel Name</div>
          <div className="video-publication-date">Thu 24, 2017</div>
        </div>
        <Button color="youtube">91.5K Subscribe</Button>
        <div
          className={`video-description ${
            this.state.collapsed ? "collapsed" : "expanded"
          }`}
        >
          <p>Paragraph 1</p>
          <p>Paragraph 2</p>
          <p>Paragraph 3</p>
          <p>Paragraph 4</p>
          <p>Paragraph 5</p>
          <Button onClick={this.onToggleCollapseButtonClick} compact>
            Show More
          </Button>
        </div>
      </div>
    );
  }
}
