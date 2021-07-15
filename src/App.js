import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Home } from "./containers/Home/Home";
import { AppLayout } from "./components/AppLayout/AppLayout";
import { Watch } from "./containers/Watch/Watch";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <AppLayout>
          <Switch>
            <Route path="/watch" component={Watch} />
            <Route path="/" component={Home} />
          </Switch>
        </AppLayout>
      </BrowserRouter>
    );
  }
}

export default App;
