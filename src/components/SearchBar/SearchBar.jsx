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
  } 

  handleChange(event) {
    this.setState({
      value: event.target.value
    })
  }
  
  
  handleSubmit() {
    this.props.onSearchVideos(this.state.value);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="search-wrapper">
          <input type="search" className="search-bar" onChange={this.handleChange} placeholder="Search" name="search"/>
          <button className="search-button" type="submit"><i className="fa fa-search"></i></button>
      </form>
    );
  }
}

export default Search;
