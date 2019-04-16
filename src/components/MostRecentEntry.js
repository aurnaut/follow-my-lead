import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../redux/actions';

class TestComp extends Component {
  renderMostRecentEntry() {
    const { fbEntries } = this.props;
    const firebaseEntriesObjToArray = Object.entries(fbEntries || []);
    const firebaseEntries = firebaseEntriesObjToArray
      .filter(
        entry =>
          firebaseEntriesObjToArray.indexOf(entry) ===
          firebaseEntriesObjToArray.length - 1
      )
      .map(entry => {
        return (
          <div key={entry[0]}>
            <div className="current-sentence">
              Sentence: {entry[1].sentence}
            </div>
            <div className="current-author">Author: {entry[1].author}</div>
          </div>
        );
      });

    return firebaseEntries;
  }
  componentWillMount() {
    this.props.fetchEntries();
  }
  render() {
    return <div>{this.renderMostRecentEntry()}</div>;
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
)(TestComp);
