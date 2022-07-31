import React, { Component } from 'react';
import './SearchBox.css';

class SearchBox extends Component {
  render() {
    return (
      <div>
        <input
          type="search"
          placeholder={this.props.placeHolder}
          className={`search-box ${this.props.className}`}
          onChange={this.props.onChangeHandler}
        />
      </div>
    );
  }
}

export default SearchBox;
