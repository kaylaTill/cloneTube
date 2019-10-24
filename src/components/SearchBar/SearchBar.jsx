import React from "react";
import SearchBar from 'react-js-search';
import "./search.css";
import { removePropertiesDeep } from "@babel/types";

class Search extends React.Component {
  constructor(props) {
    super(props) 

    this.state = {
      value: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearSearchBar = this.clearSearchBar.bind(this);
  } 
  
  handleChange(event) {
    event.preventDefault()
    this.setState({
      value: event.target.value
    })
  }
  
  async handleSubmit(event) {
    event.preventDefault()
    await this.props.sendTerm(this.state.value);
    this.clearSearchBar()
  }

  clearSearchBar() {
    this.setState({value: ""})
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="search-wrapper">
        <input type="search" className="search-bar" placeholder="Search" name="search" autocomplete="off" value={this.state.value} onChange={this.handleChange} />
        <button className="search-button" type="submit"><i className="fa fa-search"></i></button>
      </form>
    );
  }
}

export default Search;
