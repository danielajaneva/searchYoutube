import React from "react";
import "./VideoItem.css";

const VideoItem = (props) => {
  return (
    //<div class="ui items">
    <div
      onClick={() => {
        props.onVideoItemClick(props.video);
      }}
      className="item video-item"
    >
      <div className="image">
        <img alt="" src={props.video.snippet.thumbnails.medium.url} />
      </div>
      <div className="content">
        <a className="header" href="/">
          {props.video.snippet.title}
        </a>
        {/* <div className="meta">
          <span>Description</span>
        </div>
        <div className="description">
          <p>{props.video.snippet.description}</p>
        </div>
        <div className="extra">
          Additional Details :<span>{props.video.snippet.publishedAt}</span>
        </div> */}
      </div>
    </div>
    //</div>
  );
};

export default VideoItem;
