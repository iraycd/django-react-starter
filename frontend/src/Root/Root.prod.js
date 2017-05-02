import React from "react";
import PropTypes from "prop-types";
import { Provider } from "react-redux";

import routes from "../routes";

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
            <Router history={this.props.history}>
              {routes}
            </Router>
          </div>
        </Provider>
      </div>
    );
  }
}
