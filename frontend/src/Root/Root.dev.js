import React from "react";
import PropTypes from "prop-types";
import { Provider } from "react-redux";
import { Router } from "react-router";

import Routes from "../routes";
import DevTools from "./DevTools";

export default class Root extends React.Component {
  static propTypes = {
    store: PropTypes.shape().isRequired,
    history: PropTypes.shape().isRequired
  };

  render() {
    return (
      <div>
        <Provider store={this.props.store}>
          <div>
            <Router history={this.props.history} routes={Routes} />
            <DevTools />
          </div>
        </Provider>
      </div>
    );
  }
}
