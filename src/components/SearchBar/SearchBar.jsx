import React from "react";
import SearchBar from 'react-js-search';
import "./search.css";

const Search = props => {
    return (
      <div className="search-wrapper">
        {/* <input
          type="search"
          onChange={e => props.onSearchVideos(e.target.value)}
          className="search-bar"
          placeholder="Type for search..."
        /> */}



        <SearchBar
          type="search"
          onChange={e => props.onSearchVideos(e.target.value)}
          placeHolderText={"Search here..."}
          className="search-bar"
        />
      </div>
    );
}

export default Search;
