import React from 'react';
import './videoList.css';
import VideoListEntry from './VideoListEntry';
import Switch from "react-switch";


class VideoList extends React.Component {
  constructor(props) {
    super(props)
    this.state = { checked: false };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(checked) {
    this.setState({ checked });
  }
  
  render() {
    let videos = props.videos;
    return (
      <div>
        <div className="next">Up next</div>
        <div className="autoplay">
          <label>
            <span className="autoplay">Autoplay</span>
            <Switch onChange={this.handleChange} checked={this.state.checked} />
          </label>
        </div>
  
        <ul className="video-list-wrapper">
          {videos.map(video => <VideoListEntry {...video} key={video.etag} onVideoSelect={props.onVideoSelect} />)}
        </ul>
      </div>
    );
  }
};

export default VideoList;