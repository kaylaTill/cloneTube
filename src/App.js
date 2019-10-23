import React, { Component } from 'react';
import _ from 'lodash';
import YouTubeSearch from 'youtube-api-search';
import Search from './components/SearchBar/SearchBar';
import VideoList from './components/VideoList/VideoList';
import VideoDetail from './components/VideoDetail/VideoDetail';
import NavBar from './components/Nav/NavBar';
import './App.css';
import API_KEY from './key';

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      videos: [],
      selectedVideo: null,
      term: ''
    };
    this.getTerm = this.getTerm.bind(this);
  }

  componentDidMount() {
    this.handleSearch(this.state.term); 
  }


  async getTerm(term) {
    await this.setState({term: term})
    this.handleSearch(this.state.term)
  }

  handleSearch(term) {
    YouTubeSearch({ key: API_KEY, term }, videos => this.setState({ videos, selectedVideo: videos[0] }));
  }

  render() {
    console.log(this.state.videos)
    return (
      <div className="App">
        <NavBar> 
          <Search sendTerm={this.getTerm} />
        </NavBar>
        
        <VideoDetail videos={this.state.selectedVideo} > 
          <VideoList 
            videos={this.state.videos} 
            onVideoSelect={video => this.setState({selectedVideo: video })} 
          /> 
        </VideoDetail>
      </div>
    );
  }
}

export default App;
