import React, { Component } from 'react';
import withCounter from './withCounter';

export class CounterOne extends Component {
  render() {
      const {count,incrementcount,decrementcount}=this.props
    return <div>
        <p>username-{this.props.userName}</p>
        <p>count-{count}</p>
        <button onClick={incrementcount}>increment</button>
        <button onClick={decrementcount}>decrement</button>
    </div>;
  }
}

export default withCounter(CounterOne);
