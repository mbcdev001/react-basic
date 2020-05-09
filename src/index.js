import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import store from "./store";

import App from "./app/app.component";

const renderApp = () =>
  render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById("root")
  );

if (process.env.NODE_ENV !== "production" && module.hot) {
  module.hot.accept("./app/app.component", renderApp);
}

renderApp();
