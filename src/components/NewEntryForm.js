import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../redux/actions';

class NewEntryForm extends Component {
  componentWillMount() {}
  render() {
    return <div>Form render</div>;
  }
}

const mapStateToProps = ({ fbEntries }) => {
  return {
    fbEntries
  };
};

export default connect(
  mapStateToProps,
  actions
)(NewEntryForm);
