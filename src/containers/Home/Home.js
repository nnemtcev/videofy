import React from "react";

import { HomeContent } from "./HomeContent/HomeContent";
import { Sidebar } from "../Sidebar/Sidebar";
import "./Home.scss";

export class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Sidebar />
        <HomeContent />
      </React.Fragment>
    );
  }
}
