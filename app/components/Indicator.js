import React, { Component, PropTypes } from 'react';
import mui, { CircularProgress } from 'material-ui';

export default class Indicator extends Component {
  render() {
    return (
      <div className="indicator">
        { this.props.pending ?
          <CircularProgress mode="indeterminate" size={0.5} /> :
          null }
      </div>
    );
  }

}

Indicator.childContextTypes = {
  muiTheme: React.PropTypes.object
};
