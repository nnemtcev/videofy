import React from "react";
import { HeaderNav } from "./containers/HeaderNav/HeaderNav";
import { Sidebar } from "./containers/Sidebar/Sidebar";
import { Home } from "./containers/Home/Home";
import { AppLayout } from "./components/AppLayout/AppLayout";

class App extends React.Component {
  render() {
    return (
      <AppLayout>
        <Home />
      </AppLayout>
    );
  }
}

export default App;
