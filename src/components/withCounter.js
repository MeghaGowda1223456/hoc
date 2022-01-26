import React from "react";

function withCounter(PassedComponent, initialcount = 0) {
  class WrappedComponent extends React.Component {
    state = {
      count: initialcount,
    };
    incrementcount = () => {
      this.setState({
        count: this.state.count + 1,
      });
    };
    decrementcount = () => {
      this.setState({
        count: this.state.count - 1,
      });
    };
    render() {
      return (
        <PassedComponent
          count={this.state.count}
          incrementcount={this.incrementcount}
          decrementcount={this.decrementcount}
          {...this.props}
        />
      );
    }
  }

  return WrappedComponent
}

export default withCounter;