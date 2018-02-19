import React from 'react';
import { connect } from 'react-redux';

const CounterButton = props => (
  <button onClick={ props.isInc ? props.increment : props.decrement}>
    {props.text}
  </button>
);

const mapDispatchToProps = dispatch => ({
  increment: () => {
    dispatch({
      type: 'INCREMENT',
    });
  },
  decrement: () => {
    dispatch({
      type: 'DECREMENT',
    });
  }
});
export default connect(null, mapDispatchToProps)(CounterButton);