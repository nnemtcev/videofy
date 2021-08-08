import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import useStore from "./store";

import { Home } from "./containers/Home/Home";
import { AppLayout } from "./components/AppLayout/AppLayout";
import { Watch } from "./containers/Watch/Watch";

const queryClient = new QueryClient();

function App() {
  const setLibraryLoaded = useStore((state) => state.setLibraryLoaded);

  function loadYouTubeAPI() {
    const script = document.createElement("script");
    script.src = "https://apis.google.com/js/client.js";

    script.onload = () => {
      window.gapi.load("client", () => {
        window.gapi.client.setApiKey(process.env.API_KEY);
        window.gapi.client.load("youtube", "v3", () => {
          setLibraryLoaded();
        });
      });
    };

    document.body.appendChild(script);
  }

  useEffect(() => {
    loadYouTubeAPI();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <AppLayout>
          <Switch>
            <Route path="/watch" component={Watch} />
            <Route path="/" component={Home} />
          </Switch>
        </AppLayout>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
