import React from "react";
import "./videoList.css";

const VideoListItem = props => {
  const videoData = {
    title: props.snippet.title,
    thumbnail: props.snippet.thumbnails.default.url,
    channel: props.snippet.channelTitle
  };
  return (
    <div className="list-group-item">
      <li className="list-item" onClick={() => props.onVideoSelect(props)}>
        <img src={videoData.thumbnail} alt={videoData.title} className="thumbnail"/>
        <div className="text-container">
          <span className="video-list-title">{videoData.title}</span>
          <small className="channelName">{videoData.channel}</small>
        </div>
      </li>
    </div>
  );
};

export default VideoListItem;
