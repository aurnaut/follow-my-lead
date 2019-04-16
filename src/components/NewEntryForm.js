import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../redux/actions';
import countryList from 'react-select-country-list';

class NewEntryForm extends Component {
  state = {
    sentence: '',
    author: '',
    country: '',
    options: countryList().getData()
  };

  inputChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  formSubmit = e => {
    const { sentence, author, country } = this.state;
    const { addEntry } = this.props;
    e.preventDefault();
    addEntry({ sentence, author, country });
    //this.setState({ entry: {} });
  };

  renderForm = () => {
    const { sentence, author, country, options } = this.state;
    console.log(this.state);
    console.log(options);
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
            <br />
            <label htmlFor="author">Author</label>
            <input
              value={author}
              onChange={this.inputChange}
              type="text"
              name="author"
            />
            <br />
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
            <br />
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
