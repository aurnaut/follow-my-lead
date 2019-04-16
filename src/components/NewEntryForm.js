import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../redux/actions';

class NewEntryForm extends Component {
  state = {
    sentence: '',
    author: ''
  };

  inputChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  formSubmit = e => {
    const { sentence, author } = this.state;
    const { addEntry } = this.props;
    e.preventDefault();
    addEntry({ sentence, author });
    //this.setState({ entry: {} });
  };

  renderForm = () => {
    const { sentence, author } = this.state;
    console.log(this.state);
    return (
      <div>
        <form onSubmit={this.formSubmit}>
          <div>
            <label htmlFor="sentence">Sentence</label>
            <input
              value={sentence}
              onChange={this.inputChange}
              type="text"
              name="sentence"
            />
            <label htmlFor="author">Author</label>
            <input
              value={author}
              onChange={this.inputChange}
              type="text"
              name="author"
            />
            <button type="submit">Save</button>
          </div>
        </form>
      </div>
    );
  };

  componentWillMount() {
    this.props.fetchEntries();
  }
  render() {
    return <div>{this.renderForm()}</div>;
  }
}

export default connect(
  null,
  actions
)(NewEntryForm);
