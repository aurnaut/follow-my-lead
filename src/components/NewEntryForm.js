import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../redux/actions';
import countryList from 'react-select-country-list';

class NewEntryForm extends Component {
  state = {
    sentence: '',
    author: '',
    country: 'Afghanistan',
    options: countryList().getData(),
    currentInput: 'sentence'
  };

  inputChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  nextClick = e => {
    e.preventDefault();
    if (this.state.sentence.length > 0) {
      this.setState({ currentInput: 'author' });
    }
    if (this.state.author.length > 0) {
      this.setState({ currentInput: 'country' });
    }
  };

  formSubmit = e => {
    const { sentence, author, country } = this.state;
    const { addEntry } = this.props;
    e.preventDefault();
    addEntry({ sentence, author, country });
    this.setState({
      sentence: '',
      author: '',
      country: 'Afghanistan',
      currentInput: 'sentence'
    });
  };

  renderForm = () => {
    const { sentence, author, country, options, currentInput } = this.state;
    const sentenceInput = (
      <div className="form-group">
        <label htmlFor="sentence">Sentence</label>
        <input
          value={sentence}
          onChange={this.inputChange}
          type="text"
          name="sentence"
        />
        <button onClick={this.nextClick} type="text">
          Next
        </button>
      </div>
    );

    const authorInput = (
      <div className="form-group">
        <label htmlFor="author">Author</label>
        <input
          value={author}
          onChange={this.inputChange}
          type="text"
          name="author"
        />
        <button onClick={this.nextClick} type="text">
          Next
        </button>
      </div>
    );

    const countrySelect = (
      <div className="form-group">
        <label htmlFor="country">Country</label>
        <select
          name="country"
          value={country}
          onChange={this.inputChange}
          className="form-control"
        >
          {options.map(option => {
            return (
              <option key={option.value} value={option.label}>
                {option.label}
              </option>
            );
          })}
        </select>
      </div>
    );
    return (
      <div>
        <form onSubmit={this.formSubmit}>
          <div>
            {currentInput === 'sentence'
              ? sentenceInput
              : currentInput === 'author'
              ? authorInput
              : countrySelect}

            <button type="submit">Save</button>
          </div>
        </form>
      </div>
    );
  };

  render() {
    return <div>{this.renderForm()}</div>;
  }
}

export default connect(
  null,
  actions
)(NewEntryForm);
