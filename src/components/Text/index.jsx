import React from 'react';
import { connect } from 'react-redux';

const Text = props => (
  <div className="Text" >
    {props.value}
  </div>
);
const mapStateToProps = state => ({
  value: state.counter.count,
});

export default connect(mapStateToProps, null)(Text);