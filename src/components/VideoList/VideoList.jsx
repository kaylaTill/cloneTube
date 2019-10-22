import React from 'react';
import './videoList.css';
import VideoListEntry from './VideoListEntry';

const VideoList = props => {
  let videos = props.videos;
  return (
    <ul className="video-list-wrapper">
      {videos.map(video => <VideoListEntry {...video} key={video.etag} onVideoSelect={props.onVideoSelect} />)}
    </ul>
  );
};

export default VideoList;