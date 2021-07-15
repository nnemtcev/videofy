import React from "react";
import { HeaderNav } from "./containers/HeaderNav/HeaderNav";
import { Sidebar } from "./containers/Sidebar/Sidebar";
import { Home } from "./containers/Home/Home";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <HeaderNav />
        <Sidebar />
        <Home />
      </React.Fragment>
    );
  }
}

export default App;
