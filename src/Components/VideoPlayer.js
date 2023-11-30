import React from "react";

const VideoPlayer = ({ selectedVideo }) => {
  return (
    <div>
      <h2>Video Player</h2>
      <video controls width="400" src={`/videos/${selectedVideo}`} />
    </div>
  );
};

export default VideoPlayer;
