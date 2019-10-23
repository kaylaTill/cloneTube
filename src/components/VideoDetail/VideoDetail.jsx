import React from "react";
import "./videoDetail.css";

const VideoDetail = props => {
  if (!props.video) return null;

  let fulldate = props.video.publishedAt.split('-')
  let year = fulldate[0];
  let month = fulldate[1];
  let day = fulldate[2].slice(0, 2);
  const months = {
     "01" :'Jan',
      "02" :'Feb',
      "03" :'Mar',
      "04" :'Apr',
      "05" :'May',
      "06" :'Jun',
      "07" :'Jul',
      "08" :'Aug',
      "09" :'Sep',
      "01" :'Oct',
      "01" :'Nov',
     "01" :'Dec',
  };

  let videoId = props.video.id.videoId,
  url = `https://youtube.com/embed/${videoId}`;

  return (
    <div className="video-detail">
      <div className="video-detail-wrapper">
        <iframe src={url} title={`${props.video.title}`} className="video-player" />
        <h3 className="main-video-title">{`${props.video.title}`}</h3>
        <small className="main-video-date">
          {`${months[month]} ${day}, ${year}`}
        </small>
        <hr className="divider"></hr>
        <small className="main-video-channelTitle">
          {`${props.video.channelTitle}`}
        </small>
        <br />
        <small className="main-video-description">
          {`${props.video.description}`}
        </small>
        

      </div>
      {props.children}
    </div>
  );
};

export default VideoDetail;
