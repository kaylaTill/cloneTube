import React from "react";
import "./videoDetail.css";

const VideoDetail = props => {
  if (!props.videos) return null;

  let videoId = props.videos.id.videoId,
    url = `https://youtube.com/embed/${videoId}`;
  return (
    <div className="video-detail">
      <div className="video-detail-wrapper">
        <iframe src={url} title={props.videos.title} className="video-player" />
        <h3 className="main-video-title">{props.videos.snippet.title}</h3>
        <hr className="divider"></hr>
        <small className="main-video-channelTitle">
          {props.videos.snippet.channelTitle}
        </small>
        <br />
        <small className="main-video-description">
          {props.videos.snippet.description}
        </small>
      </div>
      {props.children}
    </div>
  );
};

export default VideoDetail;
