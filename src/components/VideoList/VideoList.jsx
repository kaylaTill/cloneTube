import React from 'react';
import './videoList.css';
import VideoListEntry from './VideoListEntry';


class VideoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { checked: false };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(checked) {
    this.setState({ checked });
  }

  render() {
    let videos = this.props.videos;
    return (
      <div>
        <div className="next">Up next</div>
        <div className="autoplay">
          <label>
            <span className="autoplay">Autoplay</span>
            <div className="switch">
              <input
                className="react-switch-checkbox"
                id={`react-switch-new`}
                type="checkbox"
              />
              <label
                className="react-switch-label"
                htmlFor={`react-switch-new`}
              >
                <span className={`react-switch-button`} />
              </label>
            </div>
          </label>
        </div>
  
        <ul className="video-list-wrapper">
          {videos.map(video => <VideoListEntry {...video} key={video.etag} onVideoSelect={this.props.onVideoSelect} />)}
        </ul>
      </div>
    );
  }
};

export default VideoList;