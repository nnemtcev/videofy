import React from "react";
import { HeaderNav } from "./containers/HeaderNav/HeaderNav.js";
import { Sidebar } from "./containers/Sidebar/Sidebar.js";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <HeaderNav />
        <Sidebar />
      </React.Fragment>
    );
  }
}

export default App;
