import React, { Component } from 'react';
import _ from 'lodash';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/SearchBar/SearchBar';
import VideoList from './components/VideoList/VideoList';
import VideoDetail from './components/VideoDetail/VideoDetail';
import Nav from './components/Nav/Nav';
import './App.css';
import API_KEY from './key';

class App extends Component {
  state = {
    videos: [],
    selectedVideo: null
  };

  componentDidMount() {
    this.searchVideoHandler('How I become a software engineer'); // for default will be guns and roses :>
  }

  searchVideoHandler = term => YTSearch({key: API_KEY, term}, videos => this.setState({videos, selectedVideo: videos[0]}));

  render() {
    return (
      <div className="App">
        <Nav> 
          <SearchBar onSearchVideos={ _.debounce(this.searchVideoHandler, 433) } />
        </Nav>
        <VideoDetail videos={this.state.selectedVideo} > 
          <VideoList 
            videos={this.state.videos} 
            onVideoSelect={selectedVideo => this.setState({selectedVideo})} 
          /> 
        </VideoDetail>
      </div>
    );
  }
}

export default App;
