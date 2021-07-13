import React from "react";
import { Subscription } from "./Subscription/Subscription";
import { Divider } from "semantic-ui-react";
import { SidebarHeader } from "../SidebarHeader/SidebarHeader";

export class Subscriptions extends React.Component {
  render() {
    return (
      <React.Fragment>
        <SidebarHeader title="Subscriptions" />
        <Subscription label="Music" broadcasting />
        <Subscription label="Coursera" amountNewVideos={10} />
        <Subscription label="TEDx Talks" amountNewVideos={23} />
        <Subscription label="Stanford iOS" amountNewVideos={4} />
        <Subscription label="Udacity" amountNewVideos={114} />
        <Divider />
      </React.Fragment>
    );
  }
}
