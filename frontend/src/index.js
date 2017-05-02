import React from "react";
import ReactDOM from "react-dom";
import { browserHistory } from "react-router";
import { syncHistoryWithStore } from "react-router-redux";
import Root from "./Root";
import configureStore from "./store/configureStore";
import { authLoginUserSuccess } from "./actions/auth";

const target = document.getElementById("root");

// Create redux store with history
// this uses the singleton browserHistory provided by react-router
// Optionally, this could be changed to leverage a created history
// e.g. `const browserHistory = useRouterHistory(createBrowserHistory)();`
const initialState = {};
const store = configureStore(initialState, browserHistory);

// Sync history and store, as the react-router-redux reducer
// is under the non-default key ("routing"), selectLocationState
// must be provided for resolving how to retrieve the "route" in the state
const history = syncHistoryWithStore(browserHistory, store);

const node = <Root store={store} history={history} />;

const token = sessionStorage.getItem("token");
let user = {};
try {
  user = JSON.parse(sessionStorage.getItem("user"));
} catch (e) {
  // Failed to parse
}

if (token !== null) {
  store.dispatch(authLoginUserSuccess(token, user));
}

ReactDOM.render(node, target);
