import React, { Component } from 'react';
import _ from 'lodash';
import YTSearch from 'youtube-api-search';
import Search from './components/SearchBar/SearchBar';
import VideoList from './components/VideoList/VideoList';
import VideoDetail from './components/VideoDetail/VideoDetail';
import NavBar from './components/Nav/NavBar';
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
        <NavBar> 
          <Search onSearchVideos={ _.debounce(this.searchVideoHandler, 433) } />
        </NavBar>
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
