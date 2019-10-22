import React from "react";
import SearchBar from 'react-js-search';
import "./search.css";

const Search = props => {
    return (
      <div className="search-wrapper">
          <input type="search" className="search-bar"  onChange={e => props.onSearchVideos(e.target.value)} placeholder="Search.." name="search"/>
          <button className="search-button" type="submit"><i class="fa fa-search"></i></button>
      </div>
    );
}

export default Search;
