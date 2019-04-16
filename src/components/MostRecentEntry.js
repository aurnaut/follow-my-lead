import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../redux/actions';

class TestComp extends Component {
  renderToDo() {
    const { data } = this.props;
    const firebaseEntriesObjToArray = Object.entries(data);
    const firebaseMostRecentEntry = firebaseEntriesObjToArray.filter(
      entry =>
        firebaseEntriesObjToArray.indexOf(entry) ===
        firebaseEntriesObjToArray.length - 1
    );
    const firebaseEntries = firebaseMostRecentEntry.map(entry => {
      return <div key={entry[0]}>{entry[1].title}</div>;
    });

    return firebaseEntries;
  }
  componentWillMount() {
    this.props.fetchEntries();
  }
  render() {
    return (
      <div>
        <div>{this.renderToDo()}</div>
      </div>
    );
  }
}

const mapStateToProps = ({ data }) => {
  return {
    data
  };
};

export default connect(
  mapStateToProps,
  actions
)(TestComp);
