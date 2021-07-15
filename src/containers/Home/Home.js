import React from "react";
import { VideoPreview } from "../../components/VideoPreview/VideoPreview";
import "./Home.scss";

export class Home extends React.Component {
  render() {
    return (
      <div class="home">
        <VideoPreview />
      </div>
    );
  }
}
