import React from "react";
import VideoItem from "./VideoItem";

const VideoList = (props) => {
  const renderList = props.videos.map((video) => {
    return (
      <VideoItem
        key={video.id.videoId}
        onVideoItemClick={props.onVideoItemClick}
        video={video}
      />
    );
  });
  return <div className="ui relaxed divided list segment">{renderList}</div>;
};

export default VideoList;
