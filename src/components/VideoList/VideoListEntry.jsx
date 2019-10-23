import React from "react";
import "./videoList.css";

const VideoListItem = props => {
  const video = {
    title: props.title,
    thumbnail: props.thumbnails.default.url,
    channel: props.channelTitle
  };
  return (
    <div className="list-group-item">
      <li className="list-item" onClick={() => props.onVideoSelect(props)}>
        <img src={video.thumbnail} alt={video.title} className="thumbnail"/>
        <div className="text-container">
          <span className="video-list-title">{video.title}</span>
          <small className="channelName" >{video.channel}</small>
        </div>
      </li>
    </div>
  );
};

export default VideoListItem;
